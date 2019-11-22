import Voice from "./Util";

////////////////////////////////////////////////////////////
/// モジュレータ
/// 変調に用いる音色（通常は声）を生成・管理する
////////////////////////////////////////////////////////////
Voice.Modulator = function(onReady) {
  var me = this;

  this.src = Voice.audioCtx.createBufferSource();
  this.analyserNode = Voice.audioCtx.createAnalyser();
  this.dst = Voice.audioCtx.destination;

  // Analyserノードの内部データ（周波数スペクトル）
  this.spectrumData = new Float32Array(this.analyserNode.frequencyBinCount);

  ////////////////////////////////////////////////////////////
  /// AudioBufferを用いてオーディオグラフを初期化する
  ////////////////////////////////////////////////////////////
  const InitByAudioBuffer = function(audioBuffer) {
    // 音源ノード
    me.src.buffer = audioBuffer;
    me.src.loop = false;
    me.src.loopStart = 0;
    me.src.loopEnd = audioBuffer.duration;
    me.src.playbackRate.value = 1;

    // ノードの接続
    // [src] -> [analyserNode] -> [(dst)]
    me.src.connect(me.analyserNode);
    //me.analyserNode.connect(me.dst);

    me.src.start();

    onReady();
  };

  this.GetOvertone = function() {
    this.analyserNode.getFloatFrequencyData(this.spectrumData);

    var maxDb = this.analyserNode.maxDecibels;
    var minDb = this.analyserNode.minDecibels;
    var sampleRate = Voice.audioCtx.sampleRate;
    var fftSize = this.analyserNode.fftSize;
    var octave = 1;
    var baseFreq = 0;
    var baseFreqDb = minDb;
    var overtone = [];

    this.spectrumData.forEach(function(db, idx) {
      var nowFreq = (sampleRate * idx) / fftSize;

      if (0 < nowFreq && nowFreq < 300 && baseFreqDb < db) {
        baseFreqDb = db;
        baseFreq = nowFreq;
      }
    });

    this.spectrumData.forEach(function(db, idx) {
      //var db       = (byteData * ((maxDb - minDb) / 255)) + minDb;
      var gain = Math.pow(10, db / 20);
      var prevFreq = (sampleRate * (idx - 1)) / fftSize;
      var nowFreq = (sampleRate * idx) / fftSize;

      if (prevFreq < baseFreq * octave && baseFreq * octave <= nowFreq) {
        // 倍音の時のみゲインを追加していく
        overtone.push(gain);

        octave++;
      }
    });

    return { f: baseFreq, overtone: overtone };
  };

  ////////////////////////////////////////////////////////////
  /// 音声ファイル読み込み
  ////////////////////////////////////////////////////////////
  this.LoadSoundFile = function(soundFileName) {
    // 選択したファイルパスの表示
    Voice.fs.readFile(soundFileName, function(err, data) {
      if (err) {
        console.error(err);
      }

      // data（配列）をArrayBufferに変換
      var arrayBuffer = Voice.Util.ToArrayBuffer(data);

      // ArrayBuffer -> AudioBuffer への変換
      Voice.audioCtx.decodeAudioData(
        arrayBuffer,
        InitByAudioBuffer, // On Success
        function(err) {
          // On Error
          console.error(err);
        }
      );
    });
  };
};

export default Voice.Modulator;

////////////////////////////////////////////////////////////
/// 汎用メソッド群
////////////////////////////////////////////////////////////
let Voice = {};
Voice.Util = {};
Voice.audioCtx = new AudioContext();

////////////////////////////////////////////////////////////
/// data（配列）をArrayBufferに変換する
////////////////////////////////////////////////////////////
Voice.Util.ToArrayBuffer = function(buf) {
  const arrayBuffer = new ArrayBuffer(buf.length);
  let view = new Uint8Array(arrayBuffer);
  for (var i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }

  return arrayBuffer;
};

////////////////////////////////////////////////////////////
/// ファイル選択ダイアログを開き、音声ファイルを選択する
////////////////////////////////////////////////////////////
Voice.Util.loadSound = function(url) {
  const request = new XMLHttpRequest();
  let voiceBuffer = null;
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  // Decode asynchronously
  request.onload = function() {
    Voice.audioCtx.decodeAudioData(
      request.response,
      function(buffer) {
        voiceBuffer = buffer;
      },
      err => {
        console.log(err);
      }
    );
  };
  request.send();
};

export default Voice;

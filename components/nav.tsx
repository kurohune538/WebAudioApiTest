import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

type LinkType = {
  href: string;
  label: string;
  key?: string;
};
const links: LinkType[] = [
  { href: "https://zeit.co/now", label: "ZEIT" },
  { href: "https://github.com/zeit/next.js", label: "GitHub" },
].map((link: LinkType) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <NavComponent>
    <Ul>
      <Li>
        <Link href="/">
          <A>Home</A>
        </Link>
      </Li>
      {links.map(({ key, href, label }) => (
        <Li key={key}>
          <A href={href}>{label}</A>
        </Li>
      ))}
    </Ul>
  </NavComponent>
);

const NavComponent = styled.nav`
  text-align: center;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 4px 16px;
`;

const Li = styled.li`
  display: flex;
  padding: 6px 8px;
`;

const A = styled.a`
  color: #067df7;
  text-decoration: none;
  font-size: 13px;
`;
export default Nav;

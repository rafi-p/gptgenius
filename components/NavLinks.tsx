import Link from "next/link";
import React from "react";

interface NavLinksProps {}

const links = [
  {
    href: "/chat",
    label: "chat",
  },
  {
    href: "/tours",
    label: "tours",
  },
  ,
  {
    href: "/tours/new-tour",
    label: "new tour",
  },
  ,
  {
    href: "/profile",
    label: "profile",
  },
] as {
  href: string;
  label: string;
}[];

const NavLinks = ({}: NavLinksProps) => {
  return (
    <ul className="menu text-base-content">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="capitalize">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

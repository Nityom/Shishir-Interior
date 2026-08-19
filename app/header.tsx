"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [["Home", "/"], ["About", "/about"], ["Services", "/service"], ["Projects", "/project/gallery"]] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 70);
    update();
    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      document.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Link className="brand" href="/" aria-label="Shishir Consultants home">
        <Image src="/images/logo.png" alt="Shishir Consultants" width={48} height={52} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => <a href={href} key={href} className={isActive(pathname, href) ? "is-active" : ""}>{label}</a>)}
      </nav>
      <a className="contact-button" href="/contact">Contact Us</a>
      <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span /><span /><span />
      </button>
      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {links.map(([label, href]) => <a href={href} key={href} className={isActive(pathname, href) ? "is-active" : ""} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="/contact" onClick={() => setOpen(false)}>Contact Us</a>
      </div>
    </header>
  );
}
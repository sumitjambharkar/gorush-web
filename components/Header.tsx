"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/safety", label: "Safety" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="wrap nav">
        <Link href="/" className="logo">
          <Image src="/img/gorush.png" alt="GoRush" width={194} height={40} priority />
        </Link>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <nav className={open ? "menu open" : "menu"} id="menu" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
          <div className="menu-actions">
            <Link href="/#business" className="btn btn-ghost btn-sm" onClick={close}>
              For stores
            </Link>
            <Link href="/#courier" className="btn btn-primary btn-sm" onClick={close}>
              Become a courier
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

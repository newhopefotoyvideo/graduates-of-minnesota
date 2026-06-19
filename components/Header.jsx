"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// "Home" is now a group: the original editorial layout plus three alternate
// designs (Magazine / Cinematic / Boutique) shown as a submenu.
const homeVersions = [
  { label: "Editorial", note: "The original", href: "/" },
  { label: "Magazine", note: "Print-style spread", href: "/v2" },
  { label: "Cinematic", note: "Full-bleed & bold", href: "/v3" },
  { label: "Boutique", note: "Soft & playful", href: "/v4" },
];
const homeHrefs = homeVersions.map((v) => v.href);

const navItems = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Inquiry Services Page", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = homeHrefs.includes(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The dark/light hero treatment only applies to the image-led layouts
  // (Editorial "/" and Cinematic "/v3"). The Magazine and Boutique heroes
  // sit on cream, so the header should be solid there.
  const lightHero = pathname === "/" || pathname === "/v3";
  const solid = !lightHero || scrolled || open;

  return (
    <header className={`site-header ${solid ? "solid" : "over-hero"}`}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Graduates of Minnesota — home">
          Graduates <span>of Minnesota</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <ul>
            <li className="nav-has-sub">
              <button
                type="button"
                className="nav-sub-toggle"
                aria-haspopup="true"
              >
                Home <span className="caret" aria-hidden="true">▾</span>
              </button>
              <ul className="nav-submenu">
                {homeVersions.map((v) => (
                  <li key={v.href}>
                    <Link
                      href={v.href}
                      className={pathname === v.href ? "active" : ""}
                    >
                      {v.label}
                      <small>{v.note}</small>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? "active" : ""}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-right">
          <Link href="/contact" className="btn btn-red book-cta">
            Book a Session
          </Link>
          <button
            type="button"
            className={`hamburger ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <ul>
          <li>
            <span className="drawer-group-label">Home</span>
            <ul className="drawer-sub">
              {homeVersions.map((v) => (
                <li key={v.href}>
                  <Link href={v.href}>{v.label}</Link>
                </li>
              ))}
            </ul>
          </li>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn btn-red">
          Book a Session
        </Link>
      </div>
    </header>
  );
}

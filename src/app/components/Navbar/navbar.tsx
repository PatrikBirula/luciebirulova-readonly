"use client";

import { useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import "./navbar.scss";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="container w-max-1065 nav-wrapper">
        <a href="/">
          <Image
            src="/assets/logo/logotype-png/Color/Logo-line-cl.png"
            alt="Lucie Birulová logo"
            className="logo-full-size height-auto"
            title="Zpět na domovskou stránku"
            width={314}
            height={100}
          />
          <Image
            src="/assets/logo/logotype-png/Color/Logo-symbol-cl.png"
            alt="Lucie Birulová logo"
            className="logo-small height-auto"
            title="Zpět na domovskou stránku"
            width={100}
            height={100}
          />
        </a>

        <div className="btn-hamburger-menu" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li>
            <Link href="/about" className={`${pathname === "/about" ? "active" : ""}`}>O mně</Link>
          </li>
          <li>
            <Link href="/services" className={`${pathname === "/services" ? "active" : ""}`}>Služby</Link>
          </li>
          <li>
            <Link href="/courses" className={`${pathname === "/courses" ? "active" : ""}`}>Kurzy</Link>
          </li>
          <li>
            <Link href="/ebooks" className={`${pathname === "/eBooks" ? "active" : ""}`}>E-booky</Link>
          </li>
          <li>
            <Link href="/contacts" className={`${pathname === "/contacts" ? "active" : ""}`}>Kontakt</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

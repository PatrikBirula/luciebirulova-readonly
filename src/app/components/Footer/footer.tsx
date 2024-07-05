"use client";

import "./footer.scss";
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  manualFixed?: boolean | null;
}

const Footer = ({ manualFixed = null }: Props) => {
  return (
    <footer>
      <section className="container d-flex align-items-center justify-content-around my-3 flex-wrap">
        <Image
          src="../assets/logo/logotype-svg/Color/Logo-compact-cl.svg"
          alt="Lucie Birulová"
          className="footer-logo ms-sm-0 ms-xl-3"
          width={210}
          height={116}
        />
        <ul className="text-center">
          <li>IČO: 08571341</li>
          <li>
            <a href="tel:+420 723 237 148" className="text-decoration-none">
              tel: +420 723 237 148
            </a>
          </li>
          <li>
            <a
              href="mailto:ucto@luciebirulova.cz"
              className="text-decoration-none"
            >
              e-mail: ucto@luciebirulova.cz
            </a>
          </li>
          <li>Adresa: Okrová 281, 547 01 Náchod</li>
        </ul>
        <ul className="text-center">
          <li>
            <a href="/src/assets/pdf/VOP.pdf" target="_blank">
              Obchodní podmínky
            </a>
          </li>
          <li>
            <a href="/src/assets/pdf/GDPR.pdf" target="_blank">
              Zpracování osobních údajů
            </a>
          </li>
          <li>© 2023 - Lucie Birulová</li>
        </ul>
        <div className="row align-items-center justify-content-around social-icons">
          <Link
            href="https://www.facebook.com/luciebirulovaucetni"
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              src="/assets/images/icons/facebook.svg"
              alt="Facebook"
              title="Odkaz na facebook"
              className="icon-social size-auto"
              width={100}
              height={100}
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/lucie-birulov%C3%A1-3955261b4/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              src="/assets/images/icons/linkedin.svg"
              alt="LinkedIn"
              title="Odkaz na LinkedIn"
              className="icon-social size-auto"
              width={100}
              height={100}
            />
          </Link>
          <Link
            href="https://www.instagram.com/lucie.birulova.ucetni/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              src="/assets/images/icons/instagram.svg"
              alt="Instagram"
              title="Odkaz na instagram"
              className="icon-social size-auto"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="welcome-page">
      <Image
        src="/assets/logo/logotype-png/Color/Loco-compact-cl.png"
        alt="Lucie Birulová"
        width={300}
        height={165}
        className="mx-auto d-block logo"
      />
      <h1 className="text-center">Co pro Vás mohu&nbsp;udělat?</h1>
      <div className="w-100 d-flex justify-content-center">
        <Link href="/poradenstvi" className="btn">
          Poradenství
        </Link>
      </div>
      <div className="w-100 d-flex justify-content-around">
        <Link href="/kurzy" className="btn">
          Online kurzy
        </Link>
        <Link href="/sluzby" className="btn">
          Vedení účetnictví a&nbsp;daňové evidence
        </Link>
      </div>
    </section>
  );
}

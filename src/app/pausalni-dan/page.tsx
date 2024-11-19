import "../styles/index.scss";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import BulletList from "../components/BulletList/bulletList";
import References from "../components/References/references";
import Button from "../components/Buttons/button";
import {
  introduction,
  imagine,
  description,
  bonus,
  bonusBullets,
  aboutCourse,
  forWhoYes,
  forWhoNo,
} from "../data/pausalniDanData";

const indentifikovanaOsobaRoute = () => {
  return (
    <>
      <Navbar />
      <header className="container courses-detail-header flex-column">
        <h1 className="text-center">Online&nbsp;kurz Paušální&nbsp;daň&nbsp;2025 s&nbsp;odbornou&nbsp;podporou</h1>
        <img
          src="/assets/images/lucie_photo_2.webp"
          alt="Paušální daň 2024"
          width="600px"
          className="mobile-cut"
        />
      </header>
      <section className="container">
        <h2 className="text-center color-green">
          Už jen do 10. ledna máte čas na přihlášku k&nbsp;paušální dani!
          <br/>V&nbsp;souvislosti s&nbsp;tím si možná říkáte:
        </h2>
        <BulletList items={introduction} />
        <h2 className="text-center color-green"> Jenže</h2>
        <BulletList items={imagine} />
        <article className="fs-22">
          <p dangerouslySetInnerHTML={{ __html: description[0] }} />
          <p dangerouslySetInnerHTML={{ __html: description[1] }} />
        </article>
        <h2 className="text-center color-green">Co absolvováním kurzu&nbsp;získáte</h2>
        <BulletList items={aboutCourse} />
        <h2 className="text-center color-green">Reference</h2>
        <section className="references">
          <References />
        </section>
        {/* <h2 className="text-center">
          Zvýhodněná cena v předprodeji <span className="color-green">1.555,-&nbsp;Kč</span>, platí do <span className="color-green">13.11.2024</span><br />poté 2.888,-&nbsp;Kč
        </h2>
        <Button
          buttonText="Objednat kurz"
          src="/pausalni-dan/objednavka"
          customClasses="mx-auto px-1"
        /> */}
                 <h2 className="text-center">Kurz je akutálně <span className="color-red">vyprodán</span>, pokud byste chtěli konzultaci na míru, neváhejte mne <a href="/kontakty" className="color-green underline">konktaktovat</a>.</h2>
        <h2 className="text-center color-green pt-3">Navíc <strong>jako dárek</strong> ode&nbsp;mě získáte dva odborné e&#8209;booky:</h2>
        <BulletList items={bonusBullets} listClasses="mb-0"/>
        <p
          className="fs-22"
          dangerouslySetInnerHTML={{ __html: bonus }}
        />
        <h2 className="text-center color-green pt-3">Jak přesně kurz probíhá:</h2>
        <ul className={`bullet-list`}>
          <li>Získáte sérii videí o paušální dani, kde se dozvíte:</li>
          <ul>
            <li>
              <strong>Co je to paušální daň</strong> a jaké jsou rozdíly oproti běžnému režimu podávání
              daňového přiznání.
            </li>
            <li><strong>Kdo může vstoupit</strong> do režimu paušální daně.</li>
            <li><strong>Na co si dát pozor</strong> v&nbsp;průběhu roku, kdy jste v&nbsp;režimu paušální daně.</li>
            <li><strong>O třech pásmech paušální daně</strong> a kolik budete platit.</li>
            <li><strong>Důležité termíny</strong> ve vztahu k&nbsp;paušální dani.</li>
            <li><strong>Registrace</strong> k&nbsp;paušální dani, <strong>výstup</strong> z&nbsp;paušální daně a <strong>důležité povinnosti</strong>.</li>
          </ul>
          <li>
            Následně Vás vyzvu k <strong>vyplnění dotazníku</strong>, který se týká Vašich příjmů z&nbsp;podnikání a
            dalších dat souvisejících s&nbsp;odvody OSVČ, díky čemuž budu schopná<strong> provést analýzu výhod / nevýhod paušální daně </strong> pro Vaše podnikání.
          </li>
          <li>
          V&nbsp;posledním kroku si naplánujeme <strong>online setkání</strong> (20 minut), kde Vám ukážu
          <strong> výsledky analýzy</strong>, zodpovím Vaše <strong>doplňující dotazy</strong> a získáte mé
          <strong> doporučení k&nbsp;paušální dani</strong> v&nbsp;kontextu Vašeho podnikání.
          </li>
        </ul>
        <h2 className="text-center color-green">Pro koho kurz je:</h2>
        <BulletList items={forWhoYes} />
        <h2 className="text-center color-red">Pro koho kurz není:</h2>
        <BulletList items={forWhoNo} />
        {/* <h2 className="text-center">
          Zvýhodněná cena v předprodeji <span className="color-green">1.555,-&nbsp;Kč</span>, platí do <span className="color-green">13.11.2024</span><br />poté 2.888,-&nbsp;Kč
        </h2>
        <Button
          buttonText="Objednat kurz"
          src="/pausalni-dan/objednavka"
          customClasses="mx-auto px-1 mb-5"
        /> */}
         <h2 className="text-center">Kurz je akutálně <span className="color-red">vyprodán</span>, pokud byste chtěli konzultaci na míru, neváhejte mne <a href="/kontakty" className="color-green underline">konktaktovat</a>.</h2>
      </section>
      <Footer />
    </>
  );
};

export default indentifikovanaOsobaRoute;

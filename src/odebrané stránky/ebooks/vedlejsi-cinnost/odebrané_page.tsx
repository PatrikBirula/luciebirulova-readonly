// import "../../styles/index.scss";
// import Navbar from "../../components/Navbar/navbar";
// import Footer from "../../components/Footer/footer";
// import BulletList from "../../components/BulletList/bulletList";
// import References from "../../components/References/references";
// import Button from "../../components/Buttons/button";
// import {
//   introduction,
//   imagine,
//   ebookContent,
//   bonus,
//   answears,
// } from "../../data/ebookVedlejsiCinnostData";

// const ebooksVedlejsiCinnostRoute = () => {
//   return (
//     <>
//       <Navbar />
//       <header className="container courses-detail-header flex-column">
//         <h1 className="text-center">
//           Průvodce podnikáním na vedlejší&nbsp;činnost
//         </h1>
//         <img
//           src="/assets/images/lucie_photo_2.webp"
//           alt="Průvodce podnikáním na vedlejší činnost"
//           width="600px"
//           className="mobile-cut"
//         />
//       </header>
//       <h2 className="container text-center color-green">
//         Nacházíte se v některé z následujících situací?
//       </h2>
//       <BulletList items={introduction} />
//       <h2 className="container text-center color-green">Představte si, že</h2>
//       <BulletList items={imagine} />
//       <h2 className="container text-center color-green">
//         Co e-book konkrétně obsahuje
//       </h2>
//       <BulletList items={ebookContent} />
//       <h2 className="container text-center color-green">Bonus</h2>
//       <p
//         className="container fs-22"
//         dangerouslySetInnerHTML={{ __html: bonus }}
//       />
//       <h2 className="container text-center color-green">Reference</h2>
//       <section className="container references">
//         <References />
//       </section>
//       <h2 className="text-center">
//         Cena <span className="color-green">380,-&nbsp;Kč</span>
//       </h2>
//       <Button
//         buttonText="Objednat kurz"
//         src="/ebooks/vedlejsi-cinnost/objednavka"
//         customClasses="mx-auto px-1"
//       />
//       <h2 className="container text-center color-green pt-3">
//         Časté dotazy podnikatelů
//       </h2>
//       <article className="container fs-22">
//         <h5 className="text-center">
//           Proč bych měl <strong>investovat do e-booku,</strong> když jsou tyto
//           informace dostupné zdarma na internetu?
//         </h5>
//         <p dangerouslySetInnerHTML={{ __html: answears[0] }} />
//       </article>
//       <article className="container fs-22">
//         <h5 className="text-center">
//           Proč má E-book <strong>takovou cenu,</strong> když bych za tuto částku
//           sehnal i celou knihu?
//         </h5>
//         <p dangerouslySetInnerHTML={{ __html: answears[1] }} />
//       </article>
//       <Footer />
//     </>
//   );
// };

// export default ebooksVedlejsiCinnostRoute;

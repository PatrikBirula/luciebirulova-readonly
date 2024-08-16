// import "../../styles/index.scss";
// import Navbar from "../../components/Navbar/navbar";
// import Footer from "../../components/Footer/footer";
// import BulletList from "../../components/BulletList/bulletList";
// import References from "../../components/References/references";
// import Button from "../../components/Buttons/button";
// import {
//   introduction,
//   imagine,
//   description,
//   bonus,
//   courseContent,
//   courseLineUp,
//   answears,
//   forWhoYes,
//   forWhoNo,
// } from "../../data/pausalniDanData";

// const indentifikovanaOsobaRoute = () => {
//   return (
//     <>
//       <Navbar />
//       <header className="container courses-detail-header flex-column">
//         <h1 className="text-center">Paušální&nbsp;daň 2024</h1>
//         <img
//           src="/assets/images/lucie_photo_2.webp"
//           alt="Paušální daň 2024"
//           width="600px"
//           className="mobile-cut"
//         />
//       </header>
//       <h2 className="text-center color-green">
//         Možná v souvislosti se svým podnikáním řešíte některou z následujících
//         situací:
//       </h2>
//       <BulletList items={introduction} />
//       <h2 className="text-center color-green"> Představte si, že</h2>
//       <BulletList items={imagine} />
//       <article className="container fs-22">
//         <h2 className="text-center color-green">Popis kurzu</h2>
//         <p dangerouslySetInnerHTML={{ __html: description[0] }} />
//         <p dangerouslySetInnerHTML={{ __html: description[1] }} />
//       </article>
//       <h2 className="text-center color-green">Obsah kurzu</h2>
//       <BulletList items={courseContent} />
//       <h2 className="text-center color-green">Bonus</h2>
//       <p
//         className="container fs-22"
//         dangerouslySetInnerHTML={{ __html: bonus }}
//       />
//       <h2 className="text-center color-green">Reference</h2>
//       <section className="container references">
//         <References />
//       </section>
//       <h2 className="text-center">
//         Cena <span className="color-green">980,-&nbsp;Kč</span>
//       </h2>
//       <Button
//         buttonText="Objednat kurz"
//         src="/kurzy/pausalni-dan/objednavka"
//         customClasses="mx-auto px-1"
//       />
//       <h2 className="text-center color-green pt-3">Jak bude kurz probíhat</h2>
//       <p
//         className="container fs-22"
//         dangerouslySetInnerHTML={{ __html: courseLineUp }}
//       />
//       <h2 className="text-center color-green">Časté dotazy podnikatelů</h2>
//       <article className="container fs-22">
//         <h5 className="text-center">
//           Proč kupovat kurz, když{" "}
//           <strong>článků o paušální dani je na internetu spousta</strong>?
//         </h5>
//         <p dangerouslySetInnerHTML={{ __html: answears[0] }} />
//       </article>
//       <article className="container fs-22">
//         <h5 className="text-center">
//           Není lepší <strong>zavolat si přímo na finanční úřad</strong> a
//           informovat se tam?
//         </h5>
//         <p dangerouslySetInnerHTML={{ __html: answears[1] }} />
//       </article>
//       <h2 className="text-center color-green">
//         Pro koho je tento kurz vhodný?
//       </h2>
//       <BulletList items={forWhoYes} />
//       <h2 className="text-center color-red">Pro koho to není?</h2>
//       <BulletList items={forWhoNo} />
//       <Footer />
//     </>
//   );
// };

// export default indentifikovanaOsobaRoute;

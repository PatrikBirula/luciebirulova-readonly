// import Image from "next/image";
// import "../../styles/index.scss";
// import Navbar from "../../components/Navbar/navbar";
// import Footer from "../../components/Footer/footer";
// import BulletList from "../../components/BulletList/bulletList";
// import References from "../../components/References/references";
// import Button from "../../components/Buttons/button";
// import {
//   introduction,
//   howAboutIf,
//   afterCourse,
//   courseContentTeory,
//   courseContentPractical,
//   forWhoYes,
//   forWhoNo,
//   whatComming,
//   answears,
// } from "../../data/identifikovanaOsobaData";

// const indentifikovanaOsobaRoute = () => {
//   return (
//     <>
//       <Navbar />
//       <header className="container courses-detail-header">
//         <Image
//           src="/assets/images/lucie_photo_1.webp"
//           alt="Identifikovaná osoba krok za krokem"
//           className="height-auto"
//           width={300}
//           height={100}
//         />
//         <h1 className="text-center">
//           Identifikovaná osoba
//           <br />
//           krok za krokem
//         </h1>
//       </header>
//       <h2 className="text-center color-green">
//         Možná jste se ocitli v jedné z těchto situací:
//       </h2>
//       <BulletList items={introduction} />
//       <BulletList items={howAboutIf} listClasses="without-markers" />
//       <h2 className="text-center color-green"> Po absolvování kurzu</h2>
//       <BulletList items={afterCourse} />
//       <h2 className="text-center color-green">Co můžete očekávat v kurzu?</h2>
//       <h3 className="text-center">
//         Kurz je strukturován do&nbsp;dvou hlavních&nbsp;částí
//       </h3>
//       <section className="container courses-detail side-by-side">
//         <article>
//           <h4>Teoretické</h4>
//           <p
//             className="container fs-22"
//             dangerouslySetInnerHTML={{ __html: whatComming[0] }}
//           />
//         </article>
//         <article>
//           <h4>Praktické</h4>
//           <p
//             className="container fs-22"
//             dangerouslySetInnerHTML={{ __html: whatComming[1] }}
//           />
//         </article>
//       </section>
//       <h2 className="text-center color-green">Obsah kurzu</h2>
//       <section className="container courses-detail side-by-side">
//         <article>
//           <h4>Teoretická část</h4>
//           <BulletList items={courseContentTeory} />
//         </article>
//         <article>
//           <h4>Praktická část</h4>
//           <BulletList items={courseContentPractical} />
//         </article>
//       </section>
//       <h2 className="text-center color-green">Reference</h2>
//       <section className="container references">
//         <References />
//       </section>
//       <h2 className="text-center">
//         Cena <span className="color-green">980,-&nbsp;Kč</span>
//       </h2>
//       <Button
//         buttonText="Objednat kurz"
//         src="/kurzy/identifikovana-osoba/objednavka"
//         customClasses="mx-auto px-1"
//       />
//       <h2 className="text-center color-green pt-3">Časté dotazy podnikatelů</h2>
//       <article className="container fs-22">
//         <h5 className="text-center">
//           Proč bych měl zpracovávat výkazy sám, když si mohu najmout účetního?
//         </h5>
//         <p dangerouslySetInnerHTML={{ __html: answears[0] }} />
//       </article>
//       <article className="container fs-22">
//         <h5 className="text-center">
//           Není snazší najít vše potřebné na internetu?
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

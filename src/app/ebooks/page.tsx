import "../styles/index.scss";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import ProductReview from "../components/ProductReview/productReview";
import { ebooksData } from "../data/ebooksData";

const ebooksRoute = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-center">E-booky</h1>
      <section className="ebooks">
        {ebooksData.map((ebook, index) => (
          <ProductReview key={index} {...ebook} />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default ebooksRoute;

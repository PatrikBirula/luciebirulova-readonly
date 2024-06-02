import "../styles/index.scss";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import ProductReview from "../components/ProductReview/productReview";
import { coursesData } from "../data/coursesData";

const coursesRoute = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-center">Kurzy</h1>

      {coursesData.map((course, index) => (
        <ProductReview key={index} {...course} />
      ))}

      <Footer />
    </>
  );
};

export default coursesRoute;

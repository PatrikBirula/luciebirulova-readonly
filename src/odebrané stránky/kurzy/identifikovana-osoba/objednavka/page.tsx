import "../../../styles/index.scss";
import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";
import Order from "../../../components/Order/order";

const coursesIdentifikovanaOsobaObjednavkaRoute = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-center container">
        Identifikovaná osoba - objednávka
      </h1>
      <Order url="https://form.fapi.cz/script.php?id=3356d066-e346-483d-aaf1-8e8667ef7bb2" />
      <Footer manualFixed={false} />
    </>
  );
};

export default coursesIdentifikovanaOsobaObjednavkaRoute;

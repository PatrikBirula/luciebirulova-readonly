import "../../styles/index.scss";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Order from "../../components/Order/order";

const coursesPausalniDanObjednavkaRoute = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-center container">Paušální daň - objednávka</h1>
      <Order url="https://form.fapi.cz/script.php?id=d480d77c-4490-4a9a-a4ab-1287d933c03b" />
      <Footer manualFixed={false} />
    </>
  );
};

export default coursesPausalniDanObjednavkaRoute;

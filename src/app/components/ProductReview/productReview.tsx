import "./product-review.scss";
import Button from "../Buttons/button";

interface Props {
  header: string;
  price: number;
  backgroundImage: string;
  content: string;
  linkOrder: string;
  linkInfo: string;
}

const productReview = ({
  header,
  price,
  backgroundImage,
  content,
  linkOrder,
  linkInfo,
}: Props) => {
  const headerStyles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <>
      <article className="product-review">
        <h5 style={headerStyles}>
          {header}
          <span>{price}&nbsp;Kč</span>
        </h5>

        <p dangerouslySetInnerHTML={{ __html: content }}></p>
        <section className="btns-wrapper">
          <Button buttonText="Více info" src={linkInfo} />
          <Button buttonText="Objednat" src={linkOrder} />
        </section>
      </article>
    </>
  );
};

export default productReview;

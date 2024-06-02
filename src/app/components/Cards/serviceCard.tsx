import "./service-card.scss";

interface Props {
  header: string;
  paragraphText?: string;
  wrapperClass?: string;
}

const serviceCard = ({ header, paragraphText, wrapperClass = "" }: Props) => {
  return (
    <div className={`service-card-wrapper ${wrapperClass}`}>
      <h5 className="fw-bold service-card">{header}</h5>

      {paragraphText && (
        <p className="service-card-paragraph text-center mb-5">
          {paragraphText}
        </p>
      )}
    </div>
  );
};

export default serviceCard;

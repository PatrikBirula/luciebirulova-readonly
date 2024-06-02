import "./button.scss";
import Link from 'next/link';

interface Props {
  buttonText: string;
  src: string;
  customClasses?: string;
}

const button = ({ buttonText, src, customClasses }: Props) => {
  return (
    <Link href={src} className={`btn ${customClasses}`}>
      <h5>{buttonText}</h5>
    </Link>
  );
};

export default button;

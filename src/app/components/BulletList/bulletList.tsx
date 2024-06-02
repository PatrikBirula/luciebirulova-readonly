import "./bullet-list.scss";

interface Props {
  items: string[];
  listClasses?: string;
}

const BulletList = ({ items, listClasses }: Props) => {
  return (
    <ul className={`container bullet-list ${listClasses}`}>
      {items.map((item, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ul>
  );
};

export default BulletList;

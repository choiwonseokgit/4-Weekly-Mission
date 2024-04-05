import { LinksData, Link } from "@/types/commonTypes";
import Card from "./Card";
import styles from "./CardBox.module.css";

interface Props {
  linksData: LinksData[] | Link[];
}

function CardBox({ linksData }: Props) {
  return (
    <div className={styles.container}>
      {linksData.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </div>
  );
}

export default CardBox;

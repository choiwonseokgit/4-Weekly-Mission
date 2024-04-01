import { LinksData, Link } from "@/types/commonTypes";
import Card from "./Card";
import styles from "./CardBox.module.css";

function CardBox({ linksData }: { linksData: LinksData[] | Link[] }) {
  return (
    <div className={styles.container}>
      {linksData.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </div>
  );
}

export default CardBox;

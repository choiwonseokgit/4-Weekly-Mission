import { MEDIA_LINK } from "@/lib/const";
import Icon from "./Icon";
import styles from "./BottomNavBar.module.css";

function BottomNavBar() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.left}>©codeit - 2023</div>
        <div className={styles.center}>
          <span className={styles.centerText}> Privacy Policy </span>
          <span className={styles.centerText}> FAQ </span>
        </div>
        <div className={styles.right}>
          {MEDIA_LINK.map((media) => (
            <Icon key={media.id} mediaType={media} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default BottomNavBar;

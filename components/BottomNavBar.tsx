import facebooklogo from "@/public/facebook.svg";
import instagramlogo from "@/public/instagram.svg";
import twitterlogo from "@/public/twitter.svg";
import youtubelogo from "@/public/youtube.svg";
import { MediaLink } from "@/types/commonTypes";
import Icon from "./Icon";
import styles from "./BottomNavBar.module.css";

const MEDIA_LINK: MediaLink[] = [
  {
    id: 1,
    type: "facebook",
    link: "https://www.facebook.com/",
    logo: facebooklogo,
  },
  {
    id: 2,
    type: "twitter",
    link: "https://twitter.com/",
    logo: twitterlogo,
  },
  {
    id: 3,
    type: "youtube",
    link: "https://www.youtube.com/",
    logo: youtubelogo,
  },
  {
    id: 4,
    type: "instgram",
    link: "https://www.instagram.com/",
    logo: instagramlogo,
  },
];

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

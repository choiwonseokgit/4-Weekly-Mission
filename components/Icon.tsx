import Image from "next/image";
import { MediaLink } from "../types/commonTypes";

function Icon({ mediaType }: { mediaType: MediaLink }) {
  return (
    <a href={mediaType?.link}>
      <Image src={mediaType?.logo} alt={mediaType?.type} />
    </a>
  );
}

export default Icon;

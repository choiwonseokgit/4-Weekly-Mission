import Image from "next/image";
import { MediaLink } from "../types/commonTypes";

interface Props {
  mediaType: MediaLink;
}

function Icon({ mediaType }: Props) {
  return (
    <a href={mediaType?.link}>
      <Image src={mediaType?.logo} alt={mediaType?.type} />
    </a>
  );
}

export default Icon;

import { StaticImageData } from "next/image";

export interface FolderList {
  created_at: string;
  favorite: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

export interface LinksData {
  created_at: string;
  description: string | null;
  folder_id: number | null;
  id: number;
  image_source: string | undefined;
  title: string | null;
  updated_at: string | null;
  url: string;
}

export interface Link {
  createdAt: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
}

export interface ProfileData {
  email: string;
  id: number;
  name: string;
  profileImageSource: string;
}

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface FolderData {
  count: number;
  id: number;
  links: Link[];
  name: string;
  owner: Owner;
}

export interface MediaLink {
  id: number;
  type: string;
  link: string;
  logo: string;
}

export type Modal =
  | "add"
  | "edit"
  | "deleteFolder"
  | "share"
  | "addToFolder"
  | "deleteLink"
  | null;

export type InputType =
  | "signInEmail"
  | "signInPassword"
  | "signUpEmail"
  | "signUpPassword"
  | "signUpPasswordCheck";

export interface ShareModalButtonType {
  tag: "kakao" | "facebook" | "link";
  description: "카카오톡" | "페이스북" | "링크 복사";
  img: StaticImageData;
  onClick?: () => void;
}

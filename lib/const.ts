import facebooklogo from "@/public/facebook.svg";
import facebookImg from "@/public/FacebookPng.png";
import instagramlogo from "@/public/instagram.svg";
import kakaoImg from "@/public/KakaoSmall.svg";
import linkImg from "@/public/link.svg";
import twitterlogo from "@/public/twitter.svg";
import youtubelogo from "@/public/youtube.svg";
import { ShareModalButtonType, MediaLink } from "@/types/commonTypes";

export const MODALS = {
  addFolder: {
    type: "add",
    title: "폴더 추가",
    buttonName: "추가하기",
    placeholder: "내용 입력",
  },
  deleteFolder: {
    type: "deleteFolder",
    title: "폴더 삭제",
    buttonName: "삭제하기",
  },
  deleteLink: {
    type: "deleteLink",
    title: "링크 삭제",
    buttonName: "삭제하기",
  },
  edit: {
    type: "edit",
    title: "폴더 이름 변경",
    buttonName: "변경하기",
    placeholder: "내용 입력",
  },
  share: {
    type: "share",
    title: "폴더 공유",
  },
  addToFolder: {
    type: "addToFolder",
    title: "폴더에 추가",
    buttonName: "추가하기",
  },
};

export const WHOLE_BUTTON = {
  id: 1,
  created_at: "2023-06-04T20:59:39.293024+00:00",
  name: "전체",
  user_id: 1,
  favorite: true,
  link: {
    count: 0,
  },
};

export const STICKY_PATH = ["/shared"];

export const SHARE_MODAL_BUTTON: ShareModalButtonType[] = [
  {
    tag: "kakao",
    description: "카카오톡",
    img: kakaoImg,
  },
  {
    tag: "facebook",
    description: "페이스북",
    img: facebookImg,
  },
  {
    tag: "link",
    description: "링크 복사",
    img: linkImg,
  },
];

export const MEDIA_LINK: MediaLink[] = [
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

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getData } from "@/lib/api";
import TopNavBar from "./TopNavBar";
import AddLinkBar from "./AddLinkBar";
import UserProfile from "./UserProfile";
//types
import { ProfileData, FolderData } from "../types/commonTypes";

function HeaderFrame() {
  const { pathname } = useRouter();
  const [profileData, setProfileData] = useState<ProfileData | {}>({});
  const [folderData, setFolderData] = useState<FolderData | {}>({});

  const getProfileData = async (options: { path: string }) => {
    try {
      const newProfile = await getData(options);
      setProfileData(newProfile);
    } catch (err) {
      console.error(err);
      setProfileData({});
    }
  };

  const getFolderProfileData = async (options: { path: string }) => {
    try {
      const newFolder = await getData(options);
      const { folder } = newFolder;
      setFolderData(folder);
    } catch (err) {
      console.error(err);
      setFolderData({});
    }
  };

  useEffect(() => {
    getProfileData({ path: "user" });
    getFolderProfileData({ path: "folder" });
  }, []);

  return (
    <>
      <TopNavBar
        profileData={profileData}
        isSticky={pathname === "/shared"} //TODO: ['/shared', ...] 다른 페이지가 왔을때도 적용이 되게 끔 배열 상수를 만들어서 적용하기
      />
      {pathname === "/folder" && <AddLinkBar isAtBottom={false} />}
      {pathname === "/shared" && <UserProfile folderData={folderData} />}
    </>
  );
}

export default HeaderFrame;

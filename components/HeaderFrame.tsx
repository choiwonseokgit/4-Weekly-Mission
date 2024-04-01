import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getData } from "@/lib/api";
import { STICKY_PATH } from "@/lib/const";
import AddLinkBar from "./AddLinkBar";
import TopNavBar from "./TopNavBar";
import UserProfile from "./UserProfile";
import { ProfileData, FolderData } from "../types/commonTypes";

function HeaderFrame() {
  const { pathname } = useRouter();
  const [profileData, setProfileData] = useState<ProfileData | {}>({});
  const [folderData, setFolderData] = useState<FolderData | {}>({});

  const getProfileData = async (path: string) => {
    try {
      const newProfile = await getData(path);
      setProfileData(newProfile);
    } catch (err) {
      console.error(err);
      setProfileData({});
    }
  };

  const getFolderProfileData = async (path: string) => {
    try {
      const newFolder = await getData(path);
      const { folder } = newFolder;
      setFolderData(folder);
    } catch (err) {
      console.error(err);
      setFolderData({});
    }
  };

  useEffect(() => {
    getProfileData("user");
    getFolderProfileData("folder");
  }, []);

  return (
    <>
      <TopNavBar
        profileData={profileData}
        isSticky={STICKY_PATH.includes(pathname)}
      />
      {pathname === "/folder" && <AddLinkBar isAtBottom={false} />}
      {pathname === "/shared" && <UserProfile folderData={folderData} />}
    </>
  );
}

export default HeaderFrame;

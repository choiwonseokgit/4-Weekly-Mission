import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getData } from "@/lib/api";
import TopNavBar from "./TopNavBar";
import AddLinkBar from "./AddLinkBar";
import UserProfile from "./UserProfile";
import { STICKY_PATH } from "@/lib/const";
//types
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

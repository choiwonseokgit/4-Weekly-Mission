import { useEffect, useState, useRef } from "react";
import AddLinkBar from "@/components/AddLinkBar";
import CardBox from "@/components/CardBox";
import EmptyFolder from "@/components/EmptyFolder";
import FolderListBar from "@/components/FolderListBar";
import SearchBar from "@/components/SearchBar";
import { getFolderListData, getFolderLinksData } from "@/lib/api";
import useIntersectionObserver from "@/src/hooks/useIntersectionObserver";
import { useSearchBar } from "@/src/hooks/useSearchBar";
import { FolderList, LinksData } from "@/types/commonTypes";

function Folder() {
  const [folderList, setFolderList] = useState<FolderList[]>([]);
  const [linksData, setLinksData] = useState<LinksData[]>([]);
  const [searchVal, handleChange, filterdData, handleClickClose] = useSearchBar(
    "",
    linksData
  );

  const targetRef = useRef<HTMLDivElement>(null);
  const [observe, isScrolled] = useIntersectionObserver();

  const getFolderList = async () => {
    try {
      const folderListData = await getFolderListData();
      const { data } = folderListData;
      setFolderList(data);
    } catch (err) {
      console.error(err);
      setFolderList([]);
    }
  };

  const getLinks = async (folderId: number) => {
    try {
      const linksData = await getFolderLinksData(folderId);
      const { data } = linksData;
      setLinksData(data);
    } catch (err) {
      console.error(err);
      setLinksData([]);
    }
  };

  useEffect(() => {
    getFolderList();
    getLinks(1);
  }, []);

  useEffect(() => {
    observe(targetRef.current as HTMLDivElement);
  }, [observe]);

  return (
    <>
      <section>
        <div ref={targetRef}></div>
        <SearchBar
          searchVal={searchVal}
          onChange={handleChange}
          handleClickClose={handleClickClose}
        />
        <div className={searchVal}>
          {searchVal && (
            <div className="searchDiv">
              <span className="searchVal">{searchVal}</span>
              으로 검색한 결과입니다.
            </div>
          )}
        </div>
        <FolderListBar folderList={folderList} onClick={getLinks} />
        {linksData?.length ? (
          <CardBox linksData={filterdData} />
        ) : (
          <EmptyFolder />
        )}
      </section>
      {!isScrolled && <AddLinkBar isAtBottom={true} />}
    </>
  );
}

export default Folder;

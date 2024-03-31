import { useEffect, useState } from "react";
import { getData } from "@/lib/api";
import CardBox from "@/components/CardBox";
import SearchBar from "@/components/SearchBar";
import { useSearchBar } from "@/src/hooks/useSearchBar";
//types
import { Link } from "@/types/commonTypes";

function Shared() {
  const [linksData, setLinksData] = useState<Link[]>([]);
  const [searchVal, handleChange, filterdData, handleClickClose] = useSearchBar(
    "",
    linksData
  );

  const getFolderLinkData = async (path: string) => {
    try {
      const newFolder = await getData(path);
      const { folder } = newFolder;
      const { links } = folder;
      setLinksData(links);
    } catch (err) {
      console.error(err);
      setLinksData([]);
    }
  };

  useEffect(() => {
    getFolderLinkData("folder");
  }, []);

  return (
    <section>
      <SearchBar
        searchVal={searchVal}
        onChange={handleChange}
        handleClickClose={handleClickClose}
      />
      <CardBox linksData={filterdData} />
    </section>
  );
}

export default Shared;

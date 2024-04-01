import CardBox from "@/components/CardBox";
import SearchBar from "@/components/SearchBar";
import { getData } from "@/lib/api";
import { useSearchBar } from "@/src/hooks/useSearchBar";
import { Link } from "@/types/commonTypes";

export async function getStaticProps() {
  const newFolder = await getData("folder");
  const { folder } = newFolder;
  const { links } = folder;

  return {
    props: {
      links,
    },
  };
}

function Shared({ links }: { links: Link[] }) {
  const [searchVal, handleChange, filterdData, handleClickClose] = useSearchBar(
    "",
    links
  );

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

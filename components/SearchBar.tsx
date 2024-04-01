import Image from "next/image";
import { ChangeEvent } from "react";
import Close from "@/public/close.svg";
import Search from "@/public/Search.svg";
import styles from "./SearchBar.module.css";

interface Props {
  searchVal: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClickClose: () => void;
}

function SearchBar({ searchVal, onChange, handleClickClose }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <Image src={Search} alt="Search" />
        <input
          value={searchVal}
          onChange={onChange}
          className={styles.input}
          type="text"
          placeholder="링크를 검색해 보세요"
        />
      </div>
      <Image
        className={styles.close}
        onClick={handleClickClose}
        src={Close}
        alt="Close"
      />
    </div>
  );
}

export default SearchBar;

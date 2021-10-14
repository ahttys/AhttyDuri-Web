import { KakaoMap } from "components";
import { useState } from "react";
import * as S from "./style";

const SearchInput = () => {
  const [input, setInput] = useState<string>("");
  const [place, setPlace] = useState<any>("");

  const onChange = (e: any) => {
    setInput(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    setPlace(input);
    setInput("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <S.StyledInput onChange={onChange} />
        <button type="submit">검색</button>
      </form>
      <KakaoMap searchPlace={place} />
    </>
  );
};

export default SearchInput;

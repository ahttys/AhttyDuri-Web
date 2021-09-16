import * as S from "./style";
import PuffLoader from "react-spinners/PuffLoader";

const Loading = ({ ...props }) => {
  return (
    <S.LoadingWrapper {...props}>
      <PuffLoader color="#FDD540" />
    </S.LoadingWrapper>
  );
};

export default Loading;

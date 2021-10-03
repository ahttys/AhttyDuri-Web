import * as S from "./style";

interface IProps {
  children: React.ReactNode;
}

const Container = ({ children }: IProps) => {
  return (
    <S.Frame>
      <S.Contents>{children}</S.Contents>
    </S.Frame>
  );
};

export default Container;

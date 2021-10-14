import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import secondSection from "../../../assets/img/secondSection.jpg";
import * as S from "./style";

const Landing = () => {
  return (
    <>
      <S.FixedHeader />

      <ReactFullpage
        navigation={true}
        scrollOverflow={true}
        render={({ fullpageApi }) => {
          return (
            <S.FullpageWrapper>
              <S.FirstSection className="section">
                <S.Content direction="column">
                  <S.FlexBox>
                    <S.Line />
                    <h5>나는 떠나고 싶다.. 어딘가로</h5>
                  </S.FlexBox>
                  <h3>반복되는 일상에서</h3>
                  <h3>참신하고</h3>
                  <h3>새로운 여행으로</h3>
                  <S.SubInfo color="white">밑으로 내려보세요 ↓</S.SubInfo>
                </S.Content>
              </S.FirstSection>

              <S.SecondSection className="section">
                <S.Content direction="row">
                  <S.Half>
                    <S.FlexBox>
                      <S.Line />
                      <h5>평소에 가보지 못했던 곳까지 .. </h5>
                    </S.FlexBox>
                    <h3>한반도 구석구석을</h3>
                    <h3>아우를 수 있는</h3>

                    <h4>아띠두리와 함께라면</h4>
                    <h4>대한민국의 숨겨진 보석들을 발견할 수 있습니다.</h4>
                  </S.Half>
                  <S.Half>
                    <S.SecondImageWrapper>
                      <S.SecondSectionImage src={secondSection} />
                    </S.SecondImageWrapper>
                  </S.Half>
                </S.Content>
              </S.SecondSection>
              <div className="section">
                <h3>Section3</h3>
                {/* <button onClick={() => fullpageApi.moveTo(2)}>Move top</button> */}
              </div>
            </S.FullpageWrapper>
          );
        }}
      />
    </>
  );
};

export default Landing;

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import * as S from "./style";

const Landing = () => {
  return (
    <>
      <S.FixedHeader />
      <ReactFullpage
        anchors={["firstPage", "secondPage", "thirdPage"]}
        scrollOverflow={true}
        navigation={true}
        render={({ fullpageApi }) => {
          return (
            <S.FullpageWrapper>
              <S.FirstSection className="section">
                <S.FlexBox>
                  <h5>나는 떠나고 싶다.. 어딘가로</h5>
                </S.FlexBox>

                <h3>반복되는 일상에서</h3>
                <h3>참신하고</h3>
                <h3>새로운 여행으로</h3>
              </S.FirstSection>

              <div className="section">
                <h3>Slide 2.1</h3>
              </div>
              <div className="section">
                <h3>Section 3</h3>
                <button onClick={() => fullpageApi.moveTo(2)}>Move top</button>
              </div>
            </S.FullpageWrapper>
          );
        }}
      />
    </>
  );
};

export default Landing;

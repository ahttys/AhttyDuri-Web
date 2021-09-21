import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import * as S from "./style";

const Landing = () => {
  return (
    <>
      <S.FixedHeader />
      <ReactFullpage
        scrollOverflow={true}
        render={({ fullpageApi }) => {
          return (
            <S.FullpageWrapper>
              <S.FirstSection className="section">
                <h3>Section 1asdddddddd</h3>
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

import { useEffect, useRef, useState } from "react";
import * as S from "./style";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const KakaoMap = () => {
  const container = useRef<HTMLDivElement | null>(null); //지도를 담을 영역의 DOM 레퍼런스
  const [kakaoMap, setKakaoMap] = useState(null);

  useEffect(() => {
    const center = new kakao.maps.LatLng(37.50802, 127.062835);
    const options = {
      center,
      level: 3,
    };
    const map = new kakao.maps.Map(container.current, options);

    setKakaoMap(map);
  }, [container]);

  return (
    <S.Box>
      <S.MapContainer ref={container} />
    </S.Box>
  );
};

export default KakaoMap;

import { useEffect, useRef } from "react";
import * as S from "./style";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;
// 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

const KakaoMap = ({ searchPlace }: any) => {
  const container = useRef<HTMLDivElement | null>(null); //지도를 담을 영역의 DOM 레퍼런스
  //const [kakaoMap, setKakaoMap] = useState(null);

  useEffect(() => {
    const center = new kakao.maps.LatLng(37.50802, 127.062835);
    const options = {
      center,
      level: 3, // 확대 수준
    };
    const map = new kakao.maps.Map(container.current, options);

    // 장소 검색 객체를 생성합니다
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    function displayMarker(place: any) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }

    // 주소로 좌표를 검색합니다
    // 주소-좌표 변환 객체를 생성합니다
    // var geocoder = new kakao.maps.services.Geocoder();

    // // 주소로 좌표를 검색합니다
    // geocoder.addressSearch(
    //   "서울시 노원구 월계동 383-19 801호",
    //   function (result: any, status: any) {
    //     // 정상적으로 검색이 완료됐으면
    //     if (status === kakao.maps.services.Status.OK) {
    //       var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

    //       // 결과값으로 받은 위치를 마커로 표시합니다
    //       var marker = new kakao.maps.Marker({
    //         map: map,
    //         position: coords,
    //       });

    //       // 인포윈도우로 장소에 대한 설명을 표시합니다
    //       var infowindow = new kakao.maps.InfoWindow({
    //         content:
    //           '<div style="width:150px;text-align:center;padding:6px 0;">우리집</div>',
    //       });
    //       infowindow.open(map, marker);

    //       // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
    //       map.setCenter(coords);
    //     }
    //   }
    // );

    //   setKakaoMap(map);
  }, [searchPlace]);

  return (
    <S.Box>
      <S.MapContainer ref={container} />
    </S.Box>
  );
};

export default KakaoMap;

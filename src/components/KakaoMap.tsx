
import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  keyword: string;
}

const KakaoMap: React.FC<Props> = ({ keyword }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false&libraries=services';
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(34.9506, 127.4872),
          level: 4,
        };
        const map = new window.kakao.maps.Map(container, options);
        const ps = new window.kakao.maps.services.Places();

        if (keyword) {
          ps.keywordSearch(keyword, (data: any[], status: string) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const bounds = new window.kakao.maps.LatLngBounds();
              data.forEach((place) => {
                const marker = new window.kakao.maps.Marker({
                  map,
                  position: new window.kakao.maps.LatLng(place.y, place.x),
                });
                bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
              });
              map.setBounds(bounds);
            }
          });
        }
      });
    };

    document.head.appendChild(script);
  }, [keyword]);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default KakaoMap;

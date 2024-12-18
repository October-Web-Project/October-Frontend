"use client";

import { PropsWithChildren, useEffect, useRef } from "react";

import useKakaoMapLoad from "../hooks/useKakaoMapLoad";

type KakaoMapOptions = kakao.maps.MapOptions;

interface KakaoMapProps extends Omit<KakaoMapOptions, "center"> {
  center: {
    lat: number;
    lng: number;
  };
}

export default function KakaoMap({
  children,
  center,
  ...mapOptions
}: PropsWithChildren<KakaoMapProps>) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { isLoaded } = useKakaoMapLoad();

  useEffect(() => {
    if (!mapRef.current || !isLoaded) return;

    const options = {
      ...mapOptions,
      center: new kakao.maps.LatLng(center.lat, center.lng),
    };

    new kakao.maps.Map(mapRef.current, options);
  }, [center, isLoaded, mapOptions]);

  return (
    <div ref={mapRef} className="w-[100%] min-h-screen">
      {children}
    </div>
  );
}

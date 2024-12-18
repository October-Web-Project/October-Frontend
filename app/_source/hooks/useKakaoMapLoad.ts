"use client";

import { useEffect, useState } from "react";

const KAKAO_MAP_CONFIG = {
  url: "//dapi.kakao.com/v2/maps/sdk.js",
  appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_KEY,
  libraries: ["services", "clusterer"].join(","),
};

export default function useKakaoMapLoad() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let scriptElement: HTMLScriptElement | null = null;

    scriptElement = document.createElement("script");
    scriptElement.src =
      `${KAKAO_MAP_CONFIG.url}?` +
      `appkey=${KAKAO_MAP_CONFIG.appkey}&` +
      `libraries=${KAKAO_MAP_CONFIG.libraries}&` +
      `autoload=false`;
    scriptElement.type = "text/javascript";
    scriptElement.async = true;

    scriptElement.onload = () => {
      window.kakao.maps.load(() => {
        setIsLoaded(true);
      });
    };

    document.head.appendChild(scriptElement);

    return () => {
      if (scriptElement && document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement);
      }
    };
  }, []);

  return { isLoaded };
}

"use client";

import { useEffect, useState } from "react";

import { ENV } from "@/constants/env";

const KAKAO_MAP_CONFIG = {
  url: "//dapi.kakao.com/v2/maps/sdk.js",
  appkey: ENV.KAKAO_CLIENT_ID,
  libraries: ["services", "clusterer"].join(","),
};

export default function useKakaoMapLoad() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let scriptElement: HTMLScriptElement | null = null;

    const params = new URLSearchParams({
      appkey: KAKAO_MAP_CONFIG.appkey,
      libraries: KAKAO_MAP_CONFIG.libraries,
      autoload: "false",
    });

    scriptElement = document.createElement("script");
    scriptElement.src = `${KAKAO_MAP_CONFIG.url}?${decodeURIComponent(params.toString())}`;
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

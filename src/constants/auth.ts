import { AuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

import { ENV } from "@/constants/env";

export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: ENV.KAKAO_CLIENT_ID,
      clientSecret: ENV.KAKAO_CLIENT_SECRET,
      authorization: `${ENV.API_URL}/oauth2/authorization/kakao`,
    }),
    NaverProvider({
      clientId: ENV.NAVER_CLIENT_ID,
      clientSecret: ENV.NAVER_CLIENT_SECRET,
      authorization: `${ENV.API_URL}/oauth2/authorization/naver`,
    }),
  ],
  secret: ENV.NEXT_AUTH_SECRET,
};

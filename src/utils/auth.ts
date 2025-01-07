import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

import { ENV } from "@/constants/env";

const getAuthorizationLink = (provider: "kakao" | "naver") => {
  return `${ENV.API_URL}/oauth2/authorization/${provider}`;
};

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    KakaoProvider({
      clientId: ENV.KAKAO_CLIENT_ID,
      clientSecret: ENV.KAKAO_CLIENT_SECRET,
      authorization: getAuthorizationLink("kakao"),
    }),
    NaverProvider({
      clientId: ENV.NAVER_CLIENT_ID,
      clientSecret: ENV.NAVER_CLIENT_SECRET,
      authorization: getAuthorizationLink("naver"),
    }),
  ],
  secret: ENV.NEXT_AUTH_SECRET,
});

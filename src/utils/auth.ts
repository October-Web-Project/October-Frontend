import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

import { ENV } from "@/constants/env";

const getRedirectUri = (provider: "kakao" | "naver") => {
  return `${ENV.NEXTAUTH_URL}/api/auth/callback/${provider}`;
};

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    KakaoProvider({
      clientId: ENV.KAKAO_CLIENT_ID,
      clientSecret: ENV.KAKAO_CLIENT_SECRET,
      authorization: {
        url: "https://kauth.kakao.com/oauth/authorize",
        params: {
          response_type: "code",
          client_id: ENV.KAKAO_CLIENT_ID,
          redirect_uri: getRedirectUri("kakao"),
        },
      },
    }),
    NaverProvider({
      clientId: ENV.NAVER_CLIENT_ID,
      clientSecret: ENV.NAVER_CLIENT_SECRET,
      authorization: {
        url: "https://nid.naver.com/oauth2.0/authorize",
        params: {
          response_type: "code",
          client_id: ENV.NAVER_CLIENT_ID,
          redirect_uri: getRedirectUri("naver"),
        },
      },
    }),
  ],
  secret: ENV.NEXT_AUTH_SECRET,
});

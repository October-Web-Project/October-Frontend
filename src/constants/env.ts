export const ENV = {
  KAKAO_CLIENT_ID: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID as string,
  KAKAO_CLIENT_SECRET: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET as string,

  NAVER_CLIENT_ID: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID as string,
  NAVER_CLIENT_SECRET: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET as string,

  API_URL: process.env.NEXT_PUBLIC_API_URL as string,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL as string,
  NEXT_AUTH_SECRET: process.env.NEXTAUTH_SECRET as string,
} as const;

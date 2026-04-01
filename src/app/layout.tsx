import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '열매맵 - 영적 성장 프로파일',
  description: '양육 대상자의 영적 성장 프로파일을 분석하고 맞춤형 양육 과정을 제안합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

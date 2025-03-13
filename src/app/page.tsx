"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* 헤더 영역 */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">天 재무 시스템</h1>
        <p className="text-gray-500 text-sm mt-2">
          제조업체의 재무보고서 검토 및 승인 시스템 | ESG 자동 리포트 생성
        </p>
      </header>

      {/* 버튼 패널 */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">시스템에 로그인하세요</h2>

        {/* 로그인 페이지 이동 버튼 */}
        <button
          onClick={() => router.push("/login")}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition-all mb-2"
        >
          로그인
        </button>

        {/* 회원가입 페이지 이동 버튼 */}
        <button
          onClick={() => router.push("/signup")}
          className="w-full border border-black text-black py-2 rounded-lg hover:bg-gray-200 transition-all"
        >
          회원가입
        </button>
      </div>

      {/* 푸터 */}
      <footer className="text-center text-sm text-gray-500 mt-8">
        © 2024 天 재무 시스템. All rights reserved.
      </footer>
    </div>
  );
}
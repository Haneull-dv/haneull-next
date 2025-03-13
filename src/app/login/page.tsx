import Image from "next/image";
export default function Home() {
  return (
      <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        {/* :작은_파란색_다이아몬드: 제목 변경 */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          天 재무시스템
        </h2>
        <div className="flex justify-center gap-4 mb-6">
          <span className="font-bold text-black border-b-2 border-black pb-1">
            SIGN IN
          </span>
          <span className="text-gray-400 cursor-pointer hover:text-gray-600">
            CREATE ACCOUNT
          </span>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 font-semibold text-sm">
            Account ID
          </label>
          <input
            type="text"
            name="accountId"
            placeholder="Enter your ID"
            className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 font-semibold text-sm">
            Account Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>
        <div className="border-t border-gray-300 my-4"></div>
        <button
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-all duration-200"
        >
          SIGN IN
        </button>
        <button
          className="w-full mt-3 py-2 border border-gray-800 text-black hover:bg-gray-100 transition-all duration-200"
        >
          JOIN US
        </button>
        {/* :작은_파란색_다이아몬드: Forgot ID / Password 버튼을 JOIN US 아래로 배치 */}
        <div className="flex justify-center mt-4 text-gray-500 text-sm gap-6">
          <span className="cursor-pointer hover:underline">Forgot ID?</span>
          <span className="cursor-pointer hover:underline">Forgot Password?</span>
        </div>
      </div>
    </div>
      </>
  );
}
import confettiImage from "assets/images/Miscellaneous/confetti.svg";
import ReportMeter from "./components/ReportMeter";
export default function ResultPage() {
  return (
    <>
      <main className="bg-[#B19EF3]  h-svh max-h-svh ">
        <img src={confettiImage} alt="Confetti Image" />
        <div className="bottom-0 bg-white absolute items-center flex flex-col w-full  min-h-[34rem] px-4 py-6 rounded-t-3xl">
          <p className="text-2xl font-semibold mb-6">Your Result</p>
          <div className="mb-12">
            <ReportMeter />
          </div>
          <div className="bg-green-50 flex items-center w-full py-6 px-4 mb-4">
            <div className="size-4 bg-green-500 rounded-full mr-4"></div>
            <span className="text-lg font-semibold mr-4">3</span>
            <span className="text-gray-800 font-medium">Correct</span>
          </div>
          <div className="bg-red-50 flex items-center w-full py-6 px-4">
            <div className="size-4 bg-red-500 rounded-full mr-4"></div>
            <span className="text-lg font-semibold mr-4">2</span>
            <span className="text-gray-800 font-medium">Incorrect</span>
          </div>
          <button
            type="submit"
            className="w-10/12 fixed bottom-6 bg-red-500 py-3 text-lg px-4 font-semibold rounded-3xl text-white">
            <span>Start Again</span>
          </button>
        </div>
      </main>
    </>
  );
}

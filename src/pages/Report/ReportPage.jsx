import confettiImage from "assets/images/Miscellaneous/confetti.svg";
import ReportMeter from "./components/ReportMeter";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "services/api";
export default function ResultPage() {
  /*
  '/report' : 'https://dummyjson.com/c/9281-255a-4484-9f20
  */
  const navigate = useNavigate();
  const [reportData, setReportData] = useState({ percentage: 0, correct: 0, incorrect: 0 });
  const getReportData = () => {
    api
      .get("/c/9281-255a-4484-9f20")
      .then((res) => {
        setReportData(res.data.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  useEffect(() => {
    getReportData();
  }, []);
  return (
    <>
      <main className="bg-[#B19EF3]  h-svh max-h-svh ">
        <img src={confettiImage} alt="Confetti" />
        <div className="bottom-0 bg-white absolute items-center flex flex-col w-full  min-h-[34rem] px-4 py-6 rounded-t-3xl">
          <p className="text-2xl font-semibold mb-6">Your Result</p>
          <div className="mb-12">
            <ReportMeter percentage={reportData.percentage} />
          </div>
          <div className="bg-green-50 flex items-center w-full py-6 px-4 mb-4">
            <div className="size-4 bg-green-500 rounded-full mr-4"></div>
            <span className="text-lg font-semibold mr-4"> {reportData.correct} </span>
            <span className="text-gray-800 font-medium">Correct</span>
          </div>
          <div className="bg-red-50 flex items-center w-full py-6 px-4">
            <div className="size-4 bg-red-500 rounded-full mr-4"></div>
            <span className="text-lg font-semibold mr-4"> {reportData.incorrect} </span>
            <span className="text-gray-800 font-medium">Incorrect</span>
          </div>
          <button
            type="submit"
            className="w-10/12 fixed bottom-6 bg-red-500 py-3 text-lg px-4 font-semibold rounded-3xl text-white"
            onClick={() => navigate("/")}>
            <span>Start Again</span>
          </button>
        </div>
      </main>
    </>
  );
}

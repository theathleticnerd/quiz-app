import QuestionCard from "./components/QuestionCard";
import confettiImage from "assets/images/Miscellaneous/confetti.svg";
import api from "services/api";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import rightArrowIcon from "assets/Icons/rightArrow.svg";
import BottomButton from "components/BottomButton";
/*
'/questions/list' : "https://dummyjson.com/c/b1cb-e82e-480e-834b"
'/question/submit' : "https://dummyjson.com/c/00b8-6978-4596-a372"
*/
export default function QuestionPage() {
  const [questionList, setQuestionList] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(-1);
  const [optionsData, setOptionsData] = useState([]);
  const [timeStart, setTimeStart] = useState(null); // Tracks start time for a question
  const [responses, setResponses] = useState([]);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const navigate = useNavigate();
  const getQuestionList = () => {
    api.get("/c/b1cb-e82e-480e-834b").then((res) => {
      setQuestionList(res.data.questions);
      setQuestionIndex(0);
    });
  };
  useEffect(() => {
    if (questionList.length && questionIndex < 4) {
      setTimeStart(Date.now());
      setOptionsData(questionList[questionIndex].options);
    } else if (questionIndex === 5) {
      navigate("/report");
    }
  }, [questionIndex]);
  const submitAnswer = async (event) => {
    setIsButtonLoading(true);
    event.preventDefault();
    const timeEnd = Date.now();
    const timeSpent = (timeEnd - timeStart) / 1000; // Time in seconds
    const arr = optionsData.filter((item) => item.checked).map((item) => item.id);
    const payload = {
      questionId: questionList[questionIndex].id,
      selectedOptions: arr,
      timeSpent: timeSpent
    };
    await api
      .post("/c/00b8-6978-4596-a372", payload)
      .then((res) => {
        if (res.data.success) {
          // Move to the next question
          setResponses([...responses, payload]);
          setQuestionIndex(questionIndex + 1);
          setIsButtonLoading(false);
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  useEffect(getQuestionList, []);
  const selectedOptions = useMemo(() => {
    // Use filter to exclude unchecked items
    return optionsData.filter((item) => item.checked).map((item) => item.id);
  }, [optionsData]);
  return (
    <>
      <main className="bg-[#B19EF3]  h-svh max-h-svh ">
        <img src={confettiImage} alt="Confetti Image" />
        <div className="bottom-0 bg-white absolute flex flex-col w-full pb-6 h-[34rem] rounded-t-3xl">
          <div className="relative">
            <div className="bg-white size-32 rounded-full absolute  flex  items-center justify-center left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="border-8  size-28 rounded-full flex items-center justify-center">
                <p className="flex items-baseline">
                  <span className="text-5xl font-extrabold italic text-gray-800">
                    {questionIndex + 1}
                  </span>
                  <span className="text-lg font-extrabold italic text-gray-400">/5</span>
                </p>
              </div>
            </div>
          </div>
          <div className="h-full max-h-full">
            <QuestionCard
              key={questionIndex}
              question={questionList?.[questionIndex]?.question}
              codeSnippet={questionList?.[questionIndex]?.codeSnippet}
              imageURL={questionList?.[questionIndex]?.imageURL}
              optionsData={optionsData}
              setOptionsData={setOptionsData}
            />
            <BottomButton
              onClick={submitAnswer}
              text="Next"
              disabled={selectedOptions.length === 0}
              rightIcon={rightArrowIcon}
              isLoading={isButtonLoading}
            />
          </div>
        </div>
      </main>
    </>
  );
}

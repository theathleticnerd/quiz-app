import QuestionCard from "./components/QuestionCard";
import confettiImage from "assets/images/Miscellaneous/confetti.svg";
import { useEffect, useState } from "react";
/*
'/questions/list' : "https://dummyjson.com/c/b1cb-e82e-480e-834b"
*/
export default function QuestionPage() {
  const questionData = [
    {
      id: "q1",
      question: "What is React primarily used for?",
      options: [
        { id: "q1-o1", text: "Developing mobile applications" },
        { id: "q1-o2", text: "Creating user interfaces for web applications" },
        { id: "q1-o3", text: "Managing databases" },
        { id: "q1-o4", text: "Building backend servers" }
      ]
    },
    {
      id: "q2",
      question: "Which of the following is NOT a feature of React?",
      options: [
        { id: "q2-o1", text: "Virtual DOM" },
        { id: "q2-o2", text: "Server-side rendering" },
        { id: "q2-o3", text: "Two-way data binding" },
        { id: "q2-o4", text: "Reusable components" }
      ]
    },
    {
      id: "q3",
      question: "What is the correct way to create a functional component in React?",
      options: [
        { id: "q3-o1", text: "class Component extends React.Component {}" },
        { id: "q3-o2", text: "function Component() { return <div>Hello</div>; }" },
        { id: "q3-o3", text: "const Component = () => { <div>Hello</div>; }" },
        { id: "q3-o4", text: "React.createComponent(function Component() {})" }
      ]
    },
    {
      id: "q4",
      question: "What is the purpose of React’s `useState` hook?",
      options: [
        { id: "q4-o1", text: "To manage lifecycle methods" },
        { id: "q4-o2", text: "To handle HTTP requests" },
        { id: "q4-o3", text: "To declare state variables in functional components" },
        { id: "q4-o4", text: "To create global variables" }
      ]
    },
    {
      id: "q5",
      question: "Which of the following statements about JSX is true?",
      options: [
        { id: "q5-o1", text: "JSX is required to write React components." },
        { id: "q5-o2", text: "JSX is a syntax extension for JavaScript." },
        { id: "q5-o3", text: "JSX elements must be wrapped in a `<div>` tag." },
        { id: "q5-o4", text: "JSX directly manipulates the DOM." }
      ]
    },
    {
      id: "q6",
      question: "How does React achieve performance optimization?",
      options: [
        { id: "q6-o1", text: "Using a traditional DOM structure" },
        { id: "q6-o2", text: "By relying on server rendering only" },
        { id: "q6-o3", text: "Through the Virtual DOM and reconciliation" },
        { id: "q6-o4", text: "Using only functional components" }
      ]
    },
    {
      id: "q7",
      question: "What is the default behavior of `useEffect` in React?",
      options: [
        { id: "q7-o1", text: "It runs after every render by default." },
        { id: "q7-o2", text: "It only runs on component mount." },
        { id: "q7-o3", text: "It runs before rendering." },
        { id: "q7-o4", text: "It never re-runs unless explicitly instructed." }
      ]
    },
    {
      id: "q8",
      question: "How can you pass data from a parent to a child component in React?",
      options: [
        { id: "q8-o1", text: "Using `state`" },
        { id: "q8-o2", text: "Using `props`" },
        { id: "q8-o3", text: "Using `context`" },
        { id: "q8-o4", text: "Using `this`" }
      ]
    },
    {
      id: "q9",
      question: "Which of the following methods is used to update the state in a class component?",
      options: [
        { id: "q9-o1", text: "this.setState()" },
        { id: "q9-o2", text: "this.updateState()" },
        { id: "q9-o3", text: "this.modifyState()" },
        { id: "q9-o4", text: "this.changeState()" }
      ]
    },
    {
      id: "q10",
      question: "What will be the output of the following code?",
      codeSnippet:
        "function App() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Click Me</button>\n      <p>{count}</p>\n    </div>\n  );\n}",
      options: [
        { id: "q10-o1", text: "The count will not change on button click." },
        { id: "q10-o2", text: "The count will increase by 1 on each button click." },
        { id: "q10-o3", text: "The count will decrease by 1 on each button click." },
        { id: "q10-o4", text: "It will throw an error." }
      ]
    }
  ];
  const answerData = {
    q1: "q1-o2",
    q2: "q2-o3"
  };
  const [questionNumber, setQuestionNumber] = useState(0);
  // const [selectedOptions, setSelectedOptions] = useState([]);
  const [optionsData, setOptionsData] = useState([]);
  const [askedData, setAskedData] = useState([]);
  const getQuestion = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    setQuestionNumber(randomNumber);
    const obj = questionData[randomNumber];
    setAskedData([...askedData, obj]);
    setOptionsData(questionData[randomNumber].options);
  };
  // useEffect(getQuestion, [answeredData]);
  const submitAnswer = (event) => {
    event.preventDefault();
    const arr = optionsData.filter((item) => item.checked).map((item) => item.id);
    const payload = {
      [questionData[questionNumber].id]: arr
    };
    console.log(payload);
  };
  return (
    <>
      <main className="bg-[#B19EF3]  h-svh max-h-svh ">
        <img src={confettiImage} alt="Confetti Image" />
        <div className="bottom-0 bg-white absolute flex flex-col w-full  h-[34rem] rounded-t-3xl">
          <div className="relative">
            <div className="bg-white size-32 rounded-full absolute  flex  items-center justify-center left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="border-8  size-28 rounded-full flex items-center justify-center">
                <p className="flex items-baseline">
                  <span className="text-4xl font-bold">{askedData.length}</span>
                  <span className="text-lg font-semibold text-gray-400">/5</span>
                </p>
              </div>
            </div>
          </div>
          <QuestionCard
            question={questionData[questionNumber].question}
            optionsData={optionsData}
            setOptionsData={setOptionsData}
          />
          <button
            type="submit"
            className="w-full bg-red-500 py-3 text-xl px-4 font-medium rounded-3xl text-white flex justify-between"
            onClick={submitAnswer}>
            <span></span>
            <span>Next</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </main>
    </>
  );
}

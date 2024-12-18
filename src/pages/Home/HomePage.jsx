import logoLight from "assets/images/logo/logoLight.svg";
import BottomButton from "components/BottomButton";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <main className="bg-gradient-to-t from-[#B19EF3] from-10%  h-screen py-8 px-4 flex flex-col justify-between">
        <img src={logoLight} alt="Logo" className="w-52 mx-auto" />
        <button
          className="bg-white size-60 mx-auto block rounded-full shadow-lg text-red-500 text-5xl font-bold"
          onClick={() => navigate("/question")}>
          Quiz
        </button>
        <span></span>
        <span></span>
        <BottomButton
          text="Start"
          onClick={() => {
            navigate("/question");
          }}
        />
      </main>
    </>
  );
}

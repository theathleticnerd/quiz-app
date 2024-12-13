import logoLight from "assets/images/logo/logoLight.svg";
export default function HomePage() {
  return (
    <>
      <main className="bg-gradient-to-t from-[#B19EF3] from-10%  h-screen py-8 px-4 flex flex-col justify-between">
        <img src={logoLight} alt="Logo" className="w-52 mx-auto" />
        <button className="bg-white size-60 mx-auto block rounded-full shadow-lg text-red-500 text-5xl font-bold">
          Quiz
        </button>
        <button className="w-full bg-red-500 py-3 text-2xl font-semibold rounded-3xl text-white">
          Start
        </button>
      </main>
    </>
  );
}

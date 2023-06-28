import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectGlobalEmail } from "../app/slices/globalSlices";
import illustration3 from "../assets/images/icon-success.svg";
export const Thanks = () => {
  const email = useAppSelector(selectGlobalEmail);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-dark-slate-grey">
      <div className="sm:rounded-3xl flex flex-col h-full sm:h-auto pl-4 pr-10 sm:px-8 w-full sm:w-2/6 bg-white">
        <header className=" flex flex-col items-start pt-28 sm:pt-10  pb-10 gap-10 justify-end ">
          <img src={illustration3} alt="illustration3" />
        </header>
        <main className="flex flex-col flex-grow justify-start gap-10">
          <h1 className="text-4xl sm:text-5xl font-bold w-full text-dark-slate-grey">
            Thanks for subscribing!
          </h1>
          <p className="text-dark-slate-grey">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span> . Please open it and
            click the button inside to confirm your subscription
          </p>
        </main>
        <footer className="py-8">
          <button
            onClick={handleClick}
            className=" active:bg-tomato text-white bg-dark-slate-grey rounded-md py-4 font-bold w-full active:shadow-2xl"
          >
            Dissmiss message
          </button>
        </footer>
      </div>
    </div>
  );
};

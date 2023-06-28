import illustration from "../assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import illustration2 from "../assets/images/icon-list.svg";
import { useSubscribeForm } from "../hooks/useFormData/dataForm";
import { initialSubscribeValues } from "../hooks/useFormData/formProps";
import { useEmailValidation } from "../hooks/useInputValidation/useEmailValidation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { setGlobalEmail } from "../app/slices/globalSlices";
export const Home = () => {
  const [error, setError] = useState(false);
  const list = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a succes",
    "And much more!",
  ];
  const { form, handleChange, handleSubmit } = useSubscribeForm(
    initialSubscribeValues
  );
  const email = useEmailValidation(form.email);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (!email) {
      setError(true);
    } else {
      setError(false);
      dispatch(setGlobalEmail(form.email));
      navigate("/mssg");
    }
  };
  return (
    // <div className="flex bg-dark-slate-grey justify-center h-screen w-full ">
    <div className=" bg-dark-slate-grey h-screen w-full flex justify-stretch sm:items-center sm:justify-center">
      <div className="flex flex-col h-full md:h-auto md:flex-row-reverse bg-white md:items-center md:rounded-2xl md:p-5">
        <header className="w-full">
          <img
            src={illustration}
            alt="illustration"
            className="w-full sm:hidden"
          />
          <img
            src={illustrationDesktop}
            alt="illustration"
            className="w-full hidden md:block"
          />
        </header>
        <div className="flex flex-col flex-grow w-full items-center gap-8">
          <main className="flex flex-col justify-between gap-6 w-[86%]">
            <h1 className="text-[40px] sm:text-[50px] font-bold text-charcoal-grey ">
              Stay updated!
            </h1>
            <p className="text-dark-slate-grey text-justify ">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <section className="flex flex-col gap-4">
              {list.map((item) => (
                <div key={item} className="flex flex-row gap-4 items-start w-full  ">
                  <img src={illustration2} />{" "}
                  <p className="text-justify w-full ">{item}</p>
                </div>
              ))}
            </section>
          </main>
          <footer className="w-[86%]">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="flex justify-between">
                <p className="font-bold pb-2">Email address</p>
                <p
                  style={{ display: error ? "block" : "none" }}
                  className="text-red-600"
                >
                  Valid Email required
                </p>
              </div>
              <input
                style={{
                  border: "solid",
                  borderWidth: 2,
                  borderColor: error ? "red" : "",
                  backgroundColor: error ? "#fee2e2" : "",
                }}
                className="p-4 rounded-lg mb-4 border-2"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="email@company.com"
              />
              <button
                onClick={handleClick}
                
                className="text-white bg-dark-slate-grey rounded-md py-4 my-4 font-bold active:bg-tomato active:shadow-2xl"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </footer>
        </div>
      </div>
    </div>
  );
};

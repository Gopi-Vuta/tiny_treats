import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";

export const NameEditor = ({ setUserName, setSpeed }) => {
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUserName(event.target.value);
      setSpeed(0.3);
      navigate("/");
    }
  };
  //render the modal JSX in the portal div.
  return (
    <div className="fixed top-0 left-0 w-full min-h-full flex z-10 bg-white justify-center items-center">
      <m.div
        initial={{ scale: 1 }}
        animate={{ y: 2 }}
        exit={{ y: 0 }}
        transition={{ duration: 3 }}
        className="flex bg-white w-96 h-96 z-50 rounded-full shadow-2xl justify-center items-center flex-col"
      >
        <div className="flex items-center flex-col gap-5">
          <h2 className="text-black font-normal text-xl">Enter a Name</h2>
          <div>
            <input
              defaultValue=""
              autoFocus
              placeholder="Eg: Rishi"
              maxLength="10"
              type="text"
              onKeyDown={handleKeyDown}
              className="
            bg-grey-700
             border 
             border-blue-500 
             text-white 
             text-base
             rounded-lg 
             focus:ring-green-500 
             focus:border-green-500 
             block 
             w-full 
             p-2.5 
             dark:bg-gray-700 
             dark:border-gray-600 
             dark:placeholder-gray-400 
             dark:text-white 
             dark:focus:ring-blue-500 
             dark:focus:border-blue-500 
             text-center"
            />
            <label className="block text-center text-sm text-grey-600">
              Press Enter(⏎) to continue
            </label>
          </div>
        </div>
      </m.div>
    </div>
  );
};

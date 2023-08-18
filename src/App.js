import { useState } from "react";
import { PreloaderModal } from "./components/PreloaderModal";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { NameEditor } from "./components/NameEditor";
import About from "./components/About";
function App() {
  const [showModal, setShowModal] = useState(true);
  const [userName, setUserName] = useState(null);
  const [speed, setSpeed] = useState(0);
  // const [homePath, setHomePath] = useState("/change-name");
  // const [nameChangePagePath, setNameChangePagePath] = useState("/");
  return (
    <>
      <Header />

      <AnimatePresence initial={false} mode="popLayout">
        {showModal && (
          <PreloaderModal
            key="preloaderModal"
            setShowModal={setShowModal}
            setUserName={setUserName}
            setSpeed={setSpeed}
          />
        )}
        <Routes>
          <Route
            exact
            path={"/"}
            element={<Home userName={userName} speed={speed} />}
          />
          <Route
            path={"/change-name"}
            element={
              <NameEditor setUserName={setUserName} setSpeed={setSpeed} />
            }
          />
          <Route path={"/about"} element={<About />} />
        </Routes>
      </AnimatePresence>
    </>

    // {/* <AnimatePresence initial={false}>
    //   {showModal ? (
    //     <PreloaderModal
    //       setShowModal={setShowModal}
    //       setUserName={setUserName}
    //       setSpeed={setSpeed}
    //     />
    //   ) : null}
    // </AnimatePresence> */}
  );
}

export default App;

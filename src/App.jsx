import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Blog from "./pages/Blog/Blog";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Achievements from "./pages/Achievements/Achievements";
import Settings from "./pages/Settings/Settings";
import Statistics from "./pages/Statistics/Statistics";
import { createContext, useEffect, useState } from "react";
import { setName } from "./redux/slices/nameSlice";

export const AppContext = createContext(0);

function App() {
  const [timeDontVape, setTimeDontVape] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isRunning")) {
      setIsRunning(localStorage.getItem("isRunning"));
    } else {
      setIsRunning(false);
    }
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          timeDontVape,
          setTimeDontVape,
          isRunning,
          setIsRunning,
        }}
      >
        <Header />
        <Routes>
          <Route path="" element={<Main />}>
            <Route path="" element={<Statistics />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Blog from "./pages/Blog/Blog";
import Achievements from "./pages/Achievements/Achievements";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Map from "./pages/Map/Map";
import Settings from "./pages/Settings/Settings";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(0);

function App() {
  const [timeDontVape, setTimeDontVape] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    if (localStorage.getItem("isRunning")) {
      setIsRunning(localStorage.getItem("isRunning"));
    } else {
      setIsRunning(false);
    }
  }, []);
  const formatTime = (time) => {
    const seconds = time % 60;
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor((time / 60 / 60) % 24);
    const days = Math.floor(time / 60 / 60 / 24);
    if (minutes === 0 && hours === 0 && days === 0) {
      return(`${seconds} сек`);
    }
    if (hours === 0 && days === 0 && minutes !== 0) {
      return(`${minutes} мин ${seconds} сек`);
    }
    if (days === 0 && hours >= 2 && minutes !== 0) {
      return(`${hours} час ${minutes} мин`);
    }
    if (days === 0 && hours !== 0 && minutes !== 0) {
      return(`${hours} ч ${minutes} мин ${seconds} сек`);
    }
    if (days >= 30 && hours !== 0 && minutes !== 0) {
      return(`${days} д`);
    }
    if (days >= 7 && hours !== 0 && minutes !== 0) {
      return(`${days} д ${hours} ч`);
    }
    if (days !== 0 && hours !== 0 && minutes !== 0) {
      return(`${days} д ${hours} ч ${minutes} мин`);
    }
    
  }

  return (
    <>
   
      <AppContext.Provider
        value={{
          timeDontVape,
          setTimeDontVape,
          isRunning,
          setIsRunning,
          name,
          setName,
          formatTime
        }}
      >
        <Header />
        <Routes>
          <Route path="" element={<Main />}>
            <Route path="" element={<Map />} />
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

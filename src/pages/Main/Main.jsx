import { Outlet } from "react-router-dom";
import Hello from "../../components/Hello/Hello";
import Navigation from "../../components/Navigation/Navigation";
import StartButton from "../../components/StartButton/StartButton";
import ISmokedButton from "../../components/ISmokedButton/ISmokedButton";
import IVapeWindow from "../../components/IVapeWindow/IVapeWindow";
import styles from "./Main.module.scss";
import { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../../App";
import CircularProgressChart from "../../components/CircularProgressChart/CircularProgressChart";
import { steps } from "../../data";

export default function Main() {
  const { timeDontVape, setTimeDontVape, isRunning, setIsRunning, formatTime } =
    useContext(AppContext);
  const intervalIdRef = useRef(null);
  const [stateIVapeWindow, setStateIVapeWindow] = useState(false);

  const calculateTimeDontVape = () => {
    setInterval(() => {
      intervalIdRef.current = localStorage.getItem("DateStopSmoke");
      setTimeDontVape(
        Math.round((new Date().getTime() - intervalIdRef.current) / 1000)
      );
    }, 1000);
  };
  useEffect(() => {
    calculateTimeDontVape();
  }, []);

  const handleStart = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
    if (localStorage.getItem("DateStopSmoke")) {
      intervalIdRef.current = localStorage.getItem("DateStopSmoke");
    }
    if (localStorage.getItem("DateStopSmoke") === null) {
      intervalIdRef.current = new Date().getTime();
    }
    localStorage.setItem("DateStopSmoke", intervalIdRef.current);
    if (isRunning) {
      return;
    } else {
      setIsRunning(true);
      localStorage.setItem("isRunning", true);
      calculateTimeDontVape();
    }
  };

  const handleRestart = () => {
    setStateIVapeWindow(true);
    setTimeDontVape(0);
    formatTime(timeDontVape);
    intervalIdRef.current = new Date().getTime();
    localStorage.setItem("DateStopSmoke", intervalIdRef.current);
  };

  useEffect(() => {
    formatTime(timeDontVape);
    interestDontVape(timeDontVape * 1000);
  }, [timeDontVape]);

  const [counter, setCounter] = useState(35.02);
  const maxValue = 100;
  const partOfTheInterest = 100/(steps.length-1)
  
  


  const interestDontVape = (timeDontVape) => {
    if (((timeDontVape / steps[steps.length-1].time)*100)<100){
      setCounter((timeDontVape / steps[steps.length-1].time)*100)
    }
    else{
      setCounter(100)
    }
  };

  return (
    <main className={styles.main}>
      <Hello />
      {stateIVapeWindow && (
        <IVapeWindow
          stateIVapeWindow={stateIVapeWindow}
          setStateIVapeWindow={setStateIVapeWindow}
        />
      )}

      {isRunning === false ? (
        <StartButton handleStart={handleStart} />
      ) : (
        <>
          <ISmokedButton handleRestart={handleRestart} />
          <h1 className={styles.main__timer}>{formatTime(timeDontVape)}</h1>
        </>
      )}
      {isRunning === false ? (
        <></>
      ) : (
        <CircularProgressChart value={counter} maxValue={maxValue} />
      )}
      <Navigation />
      <Outlet />
    </main>
  );
}

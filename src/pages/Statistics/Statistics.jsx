import { Outlet } from "react-router-dom";
import Hello from "../../components/Hello/Hello";
import StartButton from "../../components/StartButton/StartButton";
import IVapedButton from "../../components/IVapedButton/IVapedButton";
import IVapeWindow from "../../components/IVapeWindow/IVapeWindow";
import styles from "./Statistics.module.scss";
import { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../../App";
import CircularProgressChart from "../../components/CircularProgressChart/CircularProgressChart";
import { steps } from "../../data";

export default function Statistics() {
  const { timeDontVape, setTimeDontVape, isRunning, setIsRunning, formatTime } =
    useContext(AppContext);
  const intervalIdRef = useRef(null);
  const [stateIVapeWindow, setStateIVapeWindow] = useState(false);

  const calculateTimeDontVape = () => {
    intervalIdRef.current = setInterval(() => {
      const startTime = localStorage.getItem("DateStopSmoke");
      setTimeDontVape(
        Math.round((new Date().getTime() - startTime) / 1000)
      );
    }, 1000);
  };

  useEffect(() => {
    if (isRunning) {
      calculateTimeDontVape();
    }
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    if (isRunning) {
      return;
    }
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
    const startTime = localStorage.getItem("DateStopSmoke");
    if (!startTime) {
      localStorage.setItem("DateStopSmoke", new Date().getTime());
    }
    setIsRunning(true);
    localStorage.setItem("isRunning", true);
    calculateTimeDontVape();
  };

  const handleRestart = () => {
    if (!isRunning) {
      return;
    }
    setStateIVapeWindow(true);
    setTimeDontVape(0);
    formatTime(timeDontVape);
    localStorage.setItem("DateStopSmoke", new Date().getTime());
  };

  useEffect(() => {
    formatTime(timeDontVape);
    interestDontVape(timeDontVape * 1000);
    interestCurrentStep(timeDontVape * 1000);
  }, [timeDontVape]);

  const [fullProgress, setFullProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [titleCurrentStep, setTitleCurrentStep] = useState("");

  const interestCurrentStep = (timeDontVape) => {
    let previousStepTime = null;
    let currentStepTime = null;

    for (let i = 1; i < steps.length; i++) {
      const a = () => {
        previousStepTime = timeDontVape - steps[i - 1].time;
        currentStepTime = steps[i].time - steps[i - 1].time;
        setTitleCurrentStep(steps[i].title);
      };

      if (steps[i].time > timeDontVape) {
        a();
        break;
      }
    }

    if ((previousStepTime / currentStepTime) * 100 < 100) {
      setCurrentStep((previousStepTime / currentStepTime) * 100);
    } else {
      setCurrentStep(100);
    }
  };

  const interestDontVape = (timeDontVape) => {
    if ((timeDontVape / steps[steps.length - 1].time) * 100 < 100) {
      setFullProgress((timeDontVape / steps[steps.length - 1].time) * 100);
    } else {
      setFullProgress(100);
    }
  };

  return (
    <>
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
          <IVapedButton handleRestart={handleRestart} />
          <h1 className={styles.statistics__timer}>
            Не курю: {formatTime(timeDontVape)}
          </h1>
        </>
      )}

      {isRunning === false ? (
        <></>
      ) : (
        <div className={styles.statistics}>
          <div className={styles.statistics__block}>
            <h2 className={styles.statistics__title}>Текущая цель ({titleCurrentStep})</h2>
            <p className={styles.statistics__p}>Прогресс вашей текущей цели</p>
            <div className={styles.statistics__chart}>
              <CircularProgressChart value={currentStep} maxValue={100} />
            </div>
          </div>
          <div className={styles.statistics__block}>
            <h2 className={styles.statistics__title}>Полный прогресс</h2>
            <p className={styles.statistics__p}>Общий прогресс в оздоровлении вашего организма</p>
            <div className={styles.statistics__chart}>
              <CircularProgressChart value={fullProgress} maxValue={100} />
            </div>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
}

import React, { useEffect, useState } from "react";
import styles from "./countdown.module.css";

function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const inputDate = "1 Jan 2024";
  useEffect(
    function countdown() {
      const changingDate = new Date(inputDate);
      const currentDate = new Date();
      const totalSeconds = (changingDate - currentDate) / 1000;

      setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
      setHours(Math.floor(totalSeconds / 3600) % 24);
      setMinute(Math.floor(totalSeconds / 60) % 60);
      setSecond(Math.floor(totalSeconds % 60));
    },
    []
    // [setInterval(Countdown, 1000)]
  );

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.countdownValues}>
        <div className={styles.countdownValue}>
          <span>days</span>
          <p className={styles.bigText}>{days}</p>
        </div>
        <div className={styles.countdownValue}>
          <span>hours</span>
          <p className={styles.bigText}>{hours}</p>
        </div>
        <div className={styles.countdownValue}>
          <span>minutes</span>
          <p className={styles.bigText}>{minute}</p>
        </div>
        <div className={styles.countdownValue}>
          <span>second</span>
          <p className={styles.bigText}>{second}</p>
        </div>
      </div>
    </div>
  );
}

export default Countdown;

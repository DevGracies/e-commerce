import React, { useEffect, useState, useRef } from "react";
import styles from "./countdown.module.css";

function Countdown() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");

  let interval = useRef();

  const countdown = () => {
    const countdownDate = new Date("August 1, 2024 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const duration = countdownDate - now;

      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((duration % (1000 * 60)) / 1000);
      if (duration < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinute(minutes);
        setSecond(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    countdown();
    return () => {
      clearInterval(interval.current);
    };
  });

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

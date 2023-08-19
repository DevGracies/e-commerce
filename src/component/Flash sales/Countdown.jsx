import React, { useEffect, useState } from 'react'
import styles from "./countdown.module.css"

function Countdown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [currentDate, setCurrentDate] = useState(inputDate)

    const  inputDate  = "1 Jan 2024"
    useEffect(countdown()
//  setInterval(countdown, 1000)
    )
    function countdown() {
         const changingDate = new Date(inputDate);
        const currentDate = new Date();
        const totalSeconds = (changingDate - currentDate) / 1000; 

        setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)))
        setHours(Math.floor(totalSeconds / 3600) % 24)
        setMinute(Math.floor(totalSeconds / 60) % 60)
        setSecond(Math.floor(totalSeconds % 60))

    }
    //  setInterval(countdown, 1000)
     setInterval(countdown, 1000)

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
  return (
      <div className={styles.countdownContainer}>
          <div className={styles.countdownValues}>
              <div className={styles.countdownValue}>
                  <p className={styles.bigText}>
                      {days}
                  </p>
                  <span>days</span>
              </div>
              <div className={styles.countdownValue}>
                  <p className={styles.bigText}>
                      {hours}
                  </p>
                  <span>hours</span>
              </div>
              <div className={styles.countdownValue}>
                  <p className={styles.bigText}>
                      {minute}
                  </p>
                  <span>minutes</span>
              </div>
              <div className={styles.countdownValue}>
                  <p className={styles.bigText}>
                      {second}
                  </p>
                  <span>second</span>
              </div>
          </div>
          <div className={styles.countdownInputButton}>
              you can declare this on the javascript side 
          </div>
    </div>
  )
}

export default Countdown
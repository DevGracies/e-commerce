import React from "react";
import style from "./Pic.module.css";
import woman from "../images/woman.jpg";
import speaker from "../images/speaker.jpg";
import psgamestation from "../images/psgamestation.png";
import perfume from "../images/perfume.png";
import LastArrival from "./LastArrival";

function NewArrival() {
  return (
    <>
      <section className="flex justify-center items-center">
        <div className={`${style.gameFrame} rounded`}>
          <div className="bg-black m-3 text-white">
            <img src={psgamestation} alt="" className={style.game} />
          </div>
          <div className=" absolute bottom-4 m-6 text-white">
            <h2 className="text-bolder text-3xl">PlayStation 5</h2>
            <p>
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <button className=" border-b-2 border-white">Shop Now</button>
          </div>
        </div>

        <div className={style.all}>
          <div className={`${style.womanFrame} rounded`}>
            <div className="bg-black m-3 text-white ">
              <img src={woman} alt="woman" className={style.woman} />
            </div>
            <div className=" bottom-0 m-2 absolute text-white">
              <h2 className="text-bolder text-2xl">Women’s Collections</h2>
              <p>Featured woman collections that give you another vibe.</p>
              <button className=" border-b-2 border-white">Shop Now</button>
            </div>
          </div>
          <div className="flex">
            <div className={`${style.two} rounded bg-black text-white`}>
              <img src={speaker} alt="" className={style.pic} />
              <div className=" bottom-0 m-2 absolute text-white">
                <h2 className="text-bolder text-2xl">Speakers</h2>
                <p>Amazon wireless speakers</p>
                <button className=" border-b-2 border-white">Shop Now</button>
              </div>
            </div>
            <div className={`${style.two} bg-black text-white rounded`}>
              <img src={perfume} alt="" className={style.pic} />
              <div className=" bottom-0 m-2 absolute text-white">
                <h2 className="text-bolder text-2xl">Perfume</h2>
                <p>GUCCI INTENSE OUD EDP</p>
                <button className=" border-b-2 border-white">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LastArrival />
    </>
  );
}

export default NewArrival;

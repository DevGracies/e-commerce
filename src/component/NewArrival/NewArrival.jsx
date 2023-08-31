import React from "react";
import woman from "../images/woman.jpg";
import speaker from "../images/speaker.jpg";
import psgamestation from "../images/psgamestation.png";
import perfume from "../images/perfume.png";
import LastArrival from "./LastArrival";

function NewArrival() {
  return (
    <>
      <section className="flex justify-center">
        <div className="relative h-96 rounded">
          <div className="bg-black max-h-max m-3 text-white ">
            <img src={psgamestation} alt="" />
          </div>
          <div className=" absolute bottom-0 m-6 text-white">
            <h2 className="text-bolder 3xlb">PlayStation 5</h2>
            <p>
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <button className="">Shop Now</button>
          </div>
        </div>

        <div>
          <div className="relative h-1/2 w-full flex justify-between rounded bg-black">
            <div className=" bottom-0 mt-20 m-2  text-white">
              <h2 className="text-bolder 3xlb">Women’s Collections</h2>
              <p className="flex">
                Featured woman collections that
                <br />
                give you another vibe.
              </p>
              <button className="">Shop Now</button>
            </div>
            <div className="bg-black h-max m-3 text-white ">
              <img src={woman} alt="" />
            </div>
          </div>
          <div className="flex m-5">
            <div className="bg-black h-max m-3 text-white">
              <img src={speaker} alt="" />
              <div>
                <h2 className="text-bolder 3xlb">Speakers</h2>
                <p>Amazon wireless speakers</p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="bg-black h-max m-3 text-white">
              <img src={perfume} alt="" />
              <div>
                <h2 className="text-bolder 3xlb">Perfume</h2>
                <p>GUCCI INTENSE OUD EDP</p>
                <button>Shop Now</button>
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

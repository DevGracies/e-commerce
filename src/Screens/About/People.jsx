import React from "react";
import Services from "../component/images/man.png";
import Service1 from "../component/images/lady.png";
import Service2 from "../component/images/man2.png";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const database = [
  {
    id: 1,
    title: "Tom Cruise ",
    img: Service1,
    service: "Founder & Chairman",
  },
  {
    id: 2,
    title: " Emma Watson",
    img: Service2,
    service: " Managing Director",
  },
  {
    id: 3,
    title: "Will Smith",
    img: Services,
    service: "Product Designer",
  },
];
export function Product({ data }) {
  const { title, img, service } = data;
  return (
    <div className=" text-center grid place-items-center self-center justify-items-center justify-center p-7">
      <div className=" mb-4">
        <img src={img} alt="" />
      </div>
      <h1 className=" text-xl font-medium">{title}</h1>
      <h2>{service}</h2>
      <p className="flex">
        <FaLinkedin className="pl-3 text-3xl" />
        <FaInstagram className="pl-3 text-3xl" />
        <FaTwitter className="pl-3 text-3xl" />
      </p>
    </div>
  );
}

function People() {
  return (
    <div className="flex justify-center p-5 m-5">
      {database &&
        database.map((datas) => {
          return <Product key={datas.id} data={datas} />;
        })}
    </div>
  );
}

export default People;

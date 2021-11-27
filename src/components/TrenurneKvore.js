import axios from "axios";
import React, { useEffect, useState } from "react";
import { getYesterday, Ikone, Kodovi } from "../util";

const SVGComp = ({ children, fill, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill={fill}
    className={className}
  >
    {children}
  </svg>
);
const gore = (
  <path
    xmlns="http://www.w3.org/2000/svg"
    d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"
  />
);
const dole = (
  <path
    xmlns="http://www.w3.org/2000/svg"
    d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6h-6z"
  />
);
const srednje = (
  <path xmlns="http://www.w3.org/2000/svg" d="M22 12l-4-4v3H3v2h15v3l4-4z" />
);
function TrenurneKvore() {
  const [niz, setNiz] = useState([]);

  useEffect(() => {
    console.log("Alo");
    jednom();
  }, []);

  const jednom = async () => {
    let t = [];
    for (const kod of Kodovi) {
      if (kod === "RSD") continue;
      const danas = await axios.get(`conversion?from=${kod}&to=RSD&amount=1`);
      const danasValuta = danas.data["result"];

      const juceDatum = getYesterday(true).toISOString().slice(0, 10);

      const juce = await axios.get(
        `conversion?from=RSD&to=${kod}&amount=1&date=${juceDatum}`
      );
      const juceValuta = juce.data["result"];

      const rast = danasValuta > juceValuta;
      const ista = danasValuta == juceValuta;
      const boja = ["text-green-700", "text-gray-700", "text-red-700"];
      const b = ["green", "gray", "red"];
      const ikonica = [gore, srednje, dole];

      const index = rast ? 0 : ista ? 1 : 2;

      t.push(
        <div className="flex p-4 bg-white border-primery border-2 rounded-xl items-center justify-between">
          <div className="shadow-lg">
            <img src={Ikone[kod]} alt="" className="w-8 h-8 " />
          </div>
          <span>
            1 <b>{kod}</b> = {danasValuta.toFixed(2)} <b>RSD</b>
          </span>
          <div>
            <SVGComp className=" w-12 h-12" fill={b[index]}>
              {ikonica[index]}
            </SVGComp>
          </div>
        </div>
      );
    }
    setNiz(t);
  };
  return niz;
}

export default TrenurneKvore;

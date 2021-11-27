import axios from "axios";
import { useEffect, useState } from "react";
import { getYesterday, Kodovi } from "../util";

const SVGComp = ({ children, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill={fill}
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
const dore = (
  <path
    xmlns="http://www.w3.org/2000/svg"
    d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6h-6z"
  />
);

function Juce() {
  const [niz, setNiz] = useState([]);

  useEffect(() => {
    console.log("Alo");
    uporediSaJuce();
  }, []);

  const uporediSaJuce = async () => {
    let t = [];
    for (const kod of Kodovi) {
      if (kod === "RSD") continue;
      const danas = await axios.get(`conversion?from=RSD&to=${kod}&amount=1`);

      const juceDatum = getYesterday(true).toISOString().slice(0, 10);

      const juce = await axios.get(
        `conversion?from=RSD&to=${kod}&amount=1&date=${juceDatum}`
      );

      const danasValuta = danas.data["result"];
      const juceValuta = juce.data["result"];

      const rast = danasValuta > juceValuta;
      const ista = danasValuta == juceValuta;

      const boja = rast
        ? "text-green-700"
        : ista
        ? "text-gray-700"
        : "text-red-700";
      const procenat = (danasValuta / juceValuta) * 100 - 100;

      t.push(
        <>
          <div className={`${boja}`}>
            <span>
              <SVGComp> {gore}</SVGComp>
            </span>
            |
            <div>
              <span>{procenat.toFixed(3)}% </span>
            </div>
          </div>
        </>
      );
    }
    setNiz(t);
  };
  return niz;
}

export default Juce;

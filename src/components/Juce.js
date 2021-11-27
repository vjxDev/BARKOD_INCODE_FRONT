import axios from "axios";
import { useEffect, useState } from "react";
import { getYesterday, Kodovi } from "../util";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
  >
    {props.children}
  </svg>
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
            <span>{kod}</span> |
            <div>
              {" "}
              <span>{procenat.toFixed(3)}% </span>{" "}
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

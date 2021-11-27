import axios from "axios";
import { useEffect, useState } from "react";
import Juce from "../components/Juce";
import { KodUString } from "../util";

const Opcije = () => {
  let niz = [];

  for (const oznaka in KodUString) {
    if (Object.hasOwnProperty.call(KodUString, oznaka)) {
      const element = KodUString[oznaka];
      niz.push(
        <>
          <option value={oznaka}>
            {oznaka} - {element[0]}
          </option>
        </>
      );
    }
  }
  return niz;
};

function HomePage() {
  const [konIz, setKonIz] = useState("EUR");
  const [konU, setKonU] = useState("RSD");
  const [kolicina, setKolicina] = useState(1);

  const [rezultat, setRezultat] = useState("");

  const [vremeKonverzije, setVremeKonverzije] = useState();

  const podesiIzU = (iz, u) => {
    setKonIz(iz);
    setKonU(u);
  };

  const rotiraj = () => {
    podesiIzU(konU, konIz);
    const temo = kolicina;
    setKolicina(rezultat);
    setRezultat(temo);
  };

  useEffect(() => {
    pozoviServer();
  }, [konIz, konU]);

  const pozoviServer = async (time) => {
    if (time) await new Promise((resolve) => setTimeout(resolve, time));

    const rez = await axios.get(
      `conversion?from=${konIz}&to=${konU}&amount=${kolicina}`
    );
    setRezultat(rez.data["result"].toFixed(2));
    console.log(rez.data);
    setVremeKonverzije(new Date(rez.data["info"]["timestamp"] * 1000));
  };

  return (
    <div className="container grid mx-auto gap-8 relative ">
      <div className="bg-primery absolute h-[20wh] w-screen"></div>
      <div className="grid p-8 gap-8 bg-white border-primery border-2 rounded-xl">
        {/* Konverzija */}
        <div className="flex flex-col sm:flex-row gap-4 w-full items-end ">
          <label className=" input-text">
            <span className="text-gray-700">Količina:</span>
            <input
              type="text"
              value={kolicina}
              onChange={(e) => {
                setKolicina(e.target.value);
              }}
              className="form-input mt-1 block w-full"
              placeholder="1.00"
            />
          </label>
          <label className=" input-text">
            <span className="text-gray-700">Konverzija iz:</span>
            <select
              className="form-select mt-1 block w-full"
              value={konIz}
              onChange={(e) => {
                const novoIz = e.target.value;
                if (novoIz === konU) {
                  rotiraj();
                } else {
                  setKonIz(novoIz);
                }
              }}
            >
              <Opcije />
            </select>
          </label>
          <button
            onClick={rotiraj}
            className="grid items-center justify-center h-12 w-full sm:w-auto rounded-full  bg-primery text-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 mx-2"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
            </svg>
          </button>
          <label className=" input-text">
            <span className="text-gray-700">Konverzija u:</span>
            <select
              className="form-select mt-1 block w-full"
              value={konU}
              onChange={(e) => {
                const novoU = e.target.value;
                if (novoU === konIz) {
                  rotiraj();
                } else {
                  setKonU(novoU);
                }
              }}
            >
              <Opcije />
            </select>
          </label>
        </div>
        {/* Rzultat */}

        <div className="flex gap-4 flex-col-reverse sm:flex-row justify-between sm:items-end  ">
          <div className="grid gap-1">
            <span className="text-lg">
              {kolicina} {KodUString[konIz][0]} = <br />
            </span>
            <span className=" text-4xl text-primery font-semibold">
              {!rezultat && "..."} {rezultat} {KodUString[konU][1]}
            </span>
            <span className="text-gray-500">
              {vremeKonverzije != null && (
                <>Vreme konverzije: {vremeKonverzije.getMilliseconds()}</>
              )}
            </span>
          </div>
          <button className="btn" onClick={pozoviServer}>
            Izvrši konverzija
          </button>
        </div>
      </div>
      <div className="grid p-8 gap-8 bg-white border-primery border-2 rounded-xl">
        <Juce />
      </div>
    </div>
  );
}

export default HomePage;

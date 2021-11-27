import { useRef, useState } from "react";

function Konverzija() {
  const [konIz, setKonIz] = useState("RSD");
  const [konU, setKonU] = useState("EUR");

  const ref = useRef();

  const rotiraj = () => {
    const temp = konIz;
    setKonIz(konU);
    setKonU(temp);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full items-end ">
      <label className=" input-text">
        <span class="text-gray-700">Količina:</span>
        <input
          type="text"
          multiple
          class="form-input mt-1 block w-full"
          placeholder="1.00"
        />
      </label>
      <label className=" input-text">
        <span class="text-gray-700">Konverzija iz:</span>
        <select class="form-select mt-1 block w-full">
          <option>RSD</option>
          <option>EUR</option>
          <option>USD</option>
          <option>JPY</option>
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
        <span class="text-gray-700">Konverzija u:</span>
        <select class="form-select mt-1 block w-full">
          <option>RSD</option>
          <option>EUR</option>
          <option>USD</option>
          <option>JPY</option>
        </select>
      </label>
    </div>
  );
}

export default Konverzija;

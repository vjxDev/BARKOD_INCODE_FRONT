import Konverzija from "../components/Konverzija";

function HomePage() {
  return (
    <div className="container mx-auto">
      <div className="grid p-8 gap-8 bg-white border-primery border-2 rounded-xl">
        {/* Konverzija */}
        <Konverzija></Konverzija>
        {/* Rzultat */}

        <div className="flex gap-4 flex-col-reverse sm:flex-row justify-between sm:items-end  ">
          <div className="grid gap-1">
            <span className="text-lg">
              1.00 Evro = <br />
            </span>
            <span className=" text-4xl text-primery font-semibold">
              117.563 Srpskih dinara
            </span>
          </div>
          <button className="btn">Izvrši konverzija </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

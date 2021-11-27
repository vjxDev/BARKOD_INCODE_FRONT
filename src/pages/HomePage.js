function HomePage() {
  return (
    <div className="container mx-auto">
      <div className="grid p-8 gap-4 bg-white border-primery border-2 rounded-3xl">
        {/* forul */}
        <div className="flex flex-row gap-2 w-full">
          <label className="grid w-full">
            <span class="text-gray-700">Količina:</span>
            <input
              type="text"
              multiple
              class="form-input mt-1 block w-full"
              placeholder="1.00"
            />
          </label>
          <label className="grid w-full">
            <span class="text-gray-700">Konverzija iz:</span>
            <input
              type="text"
              multiple
              class="form-input mt-1 block w-full"
              placeholder="john@example.com"
            />
          </label>
          <button className="w-16 h-16 rounded-full bg-gray-600">Rotate</button>
          <label className="grid w-full">
            <span class="text-gray-700">Konverzija u:</span>
            <input
              type="text"
              multiple
              class="form-input mt-1 block w-full"
              placeholder="john@example.com"
            />
          </label>
        </div>
        {/* Rzultat */}
        <div className="flex flex-row justify-between">
          <div>
            <span>1.00 Evro</span>
            <br />
            <span className=""> 117.563 Srpskih dinara</span>
          </div>
          <button className="btn">Izvrši konverzija </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

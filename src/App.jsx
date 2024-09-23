import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import PokimonData from "./PokimonData";
function App() {
  const [name, setName] = useState([]);
  const [search, setSearch] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=500");
      const data = await res.json();

      const pokimonData = data.results.map(async (pokiData) => {
        const res = await fetch(pokiData.url);
        const data = await res.json();
        return data;
      });

      const allPokimonData = await Promise.all(pokimonData);
      setName(allPokimonData);
      setLoader(false);
    };

    fetchdata();
  }, []);

  const searchPokiData = name.filter((newPokidata) =>
    newPokidata.name.includes(search)
  );
  console.log(name);

  if (loader) {
    return (
      <div class="progress-loader">
        <div class="progress"></div>
      </div>
    );
  }

  return (
    <div className="app  h-full">
      <div className="header">
        <h1 className="text-7xl font-extrabold text-gray-200  text-center p-6 lg:text-8xl">
          Expolre your new Pokemon
        </h1>
      </div>

      <div className="my-12 flex justify-center items-center">
        <form action="" className="w-[80vw] p-2 lg:w-[30vw]">
          <div className="form-control my-6">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              required=""
              placeholder="Enter your pokemon....."
              className="input input-alt"
            />
            <span className="input-border input-border-alt"></span>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {searchPokiData.map((currentPoki) => (
          <PokimonData key={currentPoki.id} allPokiData={currentPoki} />
        ))}
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "../src/pokimonData.css";
const PokimonData = ({ allPokiData }) => {
  return (
    <div className="mx-auto p-4">
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <img
                src={allPokiData.sprites.other.dream_world.front_default}
                alt=""
                className="w-[55vw] lg:w-[15vw]"
              />
              <h1 className="text-3xl font-extrabold text-center">
                {allPokiData.name}
              </h1>
            </div>
          </div>
          <div className="front">
            <div className="statsCard space-y-4 m-2 rounded-lg p-2">
              <div className="text-md font-semibold  flex justify-between my-2">
                <p className="text-teal-300">Ability:</p>
                <p className="underline">
                  {allPokiData.abilities.map((ability) => ability.ability.name)}
                </p>
              </div>
              <div className="text-md font-semibold  flex justify-between my-2">
                <p className="text-green-400">Type:</p>
                <p className="underline">
                  {allPokiData.types.map((type) => type.type.name)}
                </p>
              </div>
              <div className="text-md font-semibold  flex justify-between my-2">
                <p className="text-teal-300">Height:</p>
                <p className="text-xl">
                  {allPokiData.height}
                </p>
              </div>
              <div className="text-md font-semibold  flex justify-between my-2">
                <p className="text-green-400">Weight:</p>
                <p className="text-xl">
                  {allPokiData.weight}
                </p>
              </div>
            </div>
            <div className="experience text-9xl text-yellow-100 text-center my-6 font-extrabold">
                    <p>{allPokiData.base_experience}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokimonData;

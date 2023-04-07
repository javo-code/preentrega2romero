import { useEffect, useState } from "react";

const MyFetch = () => {
  const [data] = useState("");

    const responseToJSON = (response) => response.json();

  const updateData = (realResponse) => {
    console.log(realResponse);
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then(responseToJSON)
      .then(updateData);
  }, []);

  const displayAbility = (ability) => {
  
}

  return <div>{data.ability.map(displayAbility)}</div>; 
};

export default MyFetch;

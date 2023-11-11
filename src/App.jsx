import { useEffect, useState } from "react";
import Characters from "./components/modules/Characters";
import Hero from "./components/modules/Hero";

export function App() {
  const heroData = {
    title: 'The Cocktail DB',
    image: 'https://s3-eu-west-1.amazonaws.com/verema/images/valoraciones/0011/0991/coctel.jpg?1353314930'
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s');
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Hero data={heroData} />
      <Characters data={data.drinks} />
    </>
  );
}
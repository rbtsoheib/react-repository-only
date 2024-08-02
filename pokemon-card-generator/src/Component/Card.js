import './Card.css';
import { useEffect, useState } from "react";

function Card() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  const handleButtonClick = () => {
    setShowData(!showData);
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) =>
        setData(
          data.results.map((result) => ({
            id: result.url.match(/\/([0-9]*)\/$/)[1],
            name: result.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              result.url.match(/\/([0-9]*)\/$/)[1]
            }.png`
          }))
        )
      );
  }, []);

  return (
    <div>
      {data.map((result) => (
        <div className="Card" key={result.id}>
          <div className='affichage'>
            <img src={result.image} alt={result.name}></img>
          </div>
          <div className='writter'>
            <h5>#{result.id}</h5>
            <h2>{result.name}</h2>
          </div>
          <div className='btn'>
            <button onClick={handleButtonClick}>
              {showData ? "Hide" : "View more"}
            </button>
            {showData && (
              <div className='more-info'>
                <h6>exp: ...</h6>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

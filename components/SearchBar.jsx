import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import { useRouter } from 'next/router';
import App from './Reviewer';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();
  const [businesses, setBusinesses] = useState([]);
  const [showReviewer, setShowReviewer] = useState(false); // Nuevo estado para controlar la visibilidad de Reviewer

  // useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('http://localhost:3001/busqueda', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setBusinesses(data);
        } else {
          console.log('Respuesta de red OK pero respuesta de HTTP no OK');
        }
      } catch (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      }
    }
    // }, []);
    
    fetchBusinesses();
    // fetch


  const handleNegocio = async (e) => {
    e.preventDefault();
    const negocio = e.target.querySelector("#nombreNegocio").value;
    const response = fetch('http://localhost:3001/negocio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        negocio,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Todo bien');
        } else {
          console.log('Respuesta de red OK pero respuesta de HTTP no OK');
        }
      })
      .catch((error) => {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      })
  };


console.log(businesses);
const getSuggestions = (inputValue) => {
  const filteredBusinesses = businesses.filter((businesses) =>
    businesses.nombreNegocio.toLowerCase().includes(inputValue.toLowerCase())
  );
  setSuggestions(filteredBusinesses);
};

const onSuggestionsFetchRequested = ({ value }) => {
  getSuggestions(value);
};

const onSuggestionsClearRequested = () => {
  setSuggestions([]);
};

const onSuggestionSelected = (event, { suggestion }) => {
  console.log('Seleccionado:', suggestion);
  console.log(suggestion);
  setBusinesses(suggestion);

  setShowReviewer(true);
};

const renderSuggestion = (suggestion) => (
  <div>{suggestion.nombreNegocio}</div>
);

const handleSearchButtonClick = () => {
  setShowReviewer(true);
  console.log(businesses)
};

return (
  <form onSubmit={handleNegocio}>
    <div className="randm">
      {showReviewer ? (
        <App handleReturnToSearch={() => setShowReviewer(false)} businesses={businesses} />
      ) : (
        <div className='general'>
          <div className='imgticafuera'>
            <img className='imgticadentro' src="/assets/img/criTIC.png" width="40%" />
          </div>
          <div className='serchybuton'>
            <div className='searchdiv'>
            <img  className="imagenpositiion" src="/assets/img/lupa.png" width="30" height="25" />
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                onSuggestionSelected={onSuggestionSelected}
                getSuggestionValue={(suggestion) => suggestion.nombreNegocio}
                renderSuggestion={renderSuggestion}
                inputProps={{
                  placeholder: 'Encontra tu negocio',
                  value,
                  name: 'nombreNegocio',
                  onChange: (_, { newValue }) => setValue(newValue),
                }}
              />
            </div>
            <div className="buttonserch">
              <button onClick={handleSearchButtonClick}>Buscar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  </form>
);
};


export default SearchBar;
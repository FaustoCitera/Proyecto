import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import { useRouter } from 'next/router';
import Reviewer from './Reviewer'; 

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();
  const [businesses, setBusinesses] = useState([]);
  const [showReviewer, setShowReviewer] = useState(false); // Nuevo estado para controlar la visibilidad de Reviewer

  useEffect(() => {
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
    };

    fetchBusinesses();
  }, []); 

  const getSuggestions = (inputValue) => {
    const filteredBusinesses = businesses.filter((business) =>
      business.name.toLowerCase().includes(inputValue.toLowerCase())
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
    setShowReviewer(true);
  };

  const renderSuggestion = (suggestion) => (
    <div>{suggestion.name}</div>
  );

  const handleSearchButtonClick = () => {
    setShowReviewer(true);
  };

  return (
    <div className="randm">
      {showReviewer ? (
        <Reviewer handleReturnToSearch={() => setShowReviewer(false)} />
      ) : (
        <div className='general'>
          <div className='imgticafuera'>
          <img className='imgticadentro' src="/assets/img/criTIC.png" width="40%" />
          </div>
          <div className='serchybuton'>
          <div className='searchdiv'>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              onSuggestionSelected={onSuggestionSelected}
              getSuggestionValue={(suggestion) => suggestion.name}
              renderSuggestion={renderSuggestion}
              inputProps={{
                placeholder: 'Encontra tu negocio',
                value,
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
  );
};

export default SearchBar;

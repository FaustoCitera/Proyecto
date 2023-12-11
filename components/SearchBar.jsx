import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const businesses = [
    { id: 1, name: 'McDonalds' },
    { id: 2, name: 'Galidon' },
    { id: 3, name: 'Betos Lomitos' },
    // Agrega más negocios aquí
  ];

  /*const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/negocios.') 
      .then(response => response.json())
      .then(data => setBusinesses(data))
      .catch(error => console.error('Error fetching businesses:', error));
  }, []);*/

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
  };

  const renderSuggestion = (suggestion) => (
    <div>{suggestion.name}</div>
  );

  const inputProps = {
    placeholder: 'Encontra tu negocio',
    value,
    onChange: (_, { newValue }) => {
      setValue(newValue);
    },
  };

  const redirectToAnotherPage = () => {
    // Redirige a otra página cuando se hace clic en el botón
    router.push('/Review');
  };

  return (
<div className="randm">    
<div className='general'>
    <div className='searchdiv'>
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={(suggestion) => suggestion.name}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      </div>

      {/* Agrega un botón de redirección */}
      <div className="buttonserch">
      <button onClick={redirectToAnotherPage}>Buscar</button>
      </div>
      </div>
      </div>
  );
};

export default SearchBar;
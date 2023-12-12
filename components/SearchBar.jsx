import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const businesses = [
    fetch('http://localhost:3001/busqueda', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  ];

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
    placeholder: '‎ Encontra tu negocio',
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
<img src="/assets/img/criTIC.png" width="40%"/> 
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
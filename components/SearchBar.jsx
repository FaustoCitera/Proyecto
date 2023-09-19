// components/SearchBar.js

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
    placeholder: 'Buscar negocios',
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
    <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={(suggestion) => suggestion.name}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      {/* Agrega un botón de redirección */}
      <button onClick={redirectToAnotherPage}>Ir a otra página</button>
    </div>
  );
};

export default SearchBar;
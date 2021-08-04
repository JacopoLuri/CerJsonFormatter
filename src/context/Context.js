import React, { useState } from 'react';

export const Context = React.createContext();

const Provider = ({ children }) => {
  const [cers, setCers] = useState(null);
  const [formattedCers, setFormattedCers] = useState(null);
  const [objD, setObjD] = useState(null);
  const [objR, setObjR] = useState(null);

  const getCers = input => setCers(input.match(/.{1,6}/g));

  const formatter = array => {
    let formatted = array.map(el => ({
      cer: el,
      selectedD: [
        objD?.firstD,
        objD?.secondD,
        objD?.thirdD,
      ].filter(Boolean),
      selectedR: [
        objR?.firstR,
        objR?.secondR,
        objR?.thirdR,
      ].filter(Boolean)
    }));
    setFormattedCers(formatted);
  };

  return (
    <Context.Provider
      value={{
        cers,
        setCers,
        getCers,
        formatter,
        objD,
        setObjD,
        objR,
        setObjR,
        formattedCers,
        setFormattedCers
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;

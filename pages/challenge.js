'use client';

import React, { useState } from 'react';
import '../styles/chalenge.css';

const Challenge = () => {
  const [circulo, usaCirculo] = useState([]);
  const [refazer, usaRefazer] = useState([]);
  const handleClick = (event) => {
    console.log(event);
    const novoPonto = {
      clientX: event.clientX,
      clientY: event.clientY,
    };
    console.log(novoPonto);
    usaCirculo((prev) => [...prev, novoPonto]);
    usaRefazer([]);
  };
  const handleDesfazer = (event) => {
    event.stopPropagation();
    console.log('desfazer');

    const ultimoItem = circulo[circulo.length - 1];
    usaRefazer((prev) => [...prev, ultimoItem]);

    usaCirculo((prev) => {
      const newArray = [...prev].slice(0, -1);
      return newArray;
    });
  };
  const handleRefazer = (event) => {
    event.stopPropagation();
    console.log('Refazer');

    const itemRestaurado = refazer[refazer.length - 1];

    usaRefazer((prev) => {
      const newArray = [...prev].slice(0, -1);
      return newArray;
    });
    usaCirculo((prev) => [...prev, itemRestaurado]);
  };
  return (
    <div className="body" onClick={handleClick}>
      <button type="button" onClick={handleDesfazer}>Desfazer</button>
      <button type="button" onClick={handleRefazer}>Refazer</button>
      {circulo.map((item, index) => (
        <span key={index} className="dot" style={{ left: item.clientX, top: item.clientY }} />
      ))}
    </div>
  );
};

export default Challenge;

import React, { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';
import buttonDice from '../images/icon-dice.svg';
import pattern from '../images/pattern-divider-desktop.svg';
import mobilePattern from '../images/pattern-divider-mobile.svg';
const AdviceApi = () => {
  const [advice, setAdvice] = useState([{}]);
  const fetchData = () => {
    Axios.get('https://api.adviceslip.com/advice').then((res) => setAdvice(res.data.slip));
  };

  useEffect(() => {
    Axios.get('https://api.adviceslip.com/advice').then((res) => setAdvice(res.data.slip));
  }, []);
  return (
    <section className="advice-section">
      <p>Advice #{advice.id}</p>
      <q>{advice.advice}</q>
      <div className="pattern">
        <img className="only-desktop" src={pattern} alt="" />
        <img className="only-mobile" src={mobilePattern} alt="" />
      </div>
      <div className="button">
        <button onClick={fetchData}>
          <img src={buttonDice} alt="button-dice" />
        </button>
      </div>
    </section>
  );
};

export default AdviceApi;

import React from 'react';
import './Calculator.css';
import InputText from './InputText';

const Calculator = () => (
  <section className="calculator_container">
    <form action="">
      <div>
        <InputText />
      </div>

      <article className="calcButtons_container">
        <div className="buttons">
          <input type="button" value="AC" />
          <input type="button" value="+/-" />
          <input type="button" value="%" />
          <input className="operators" type="button" value="&divide;" />
        </div>
        <div className="buttons">
          <input type="button" value="7" />
          <input type="button" value="8" />
          <input type="button" value="9" />
          <input className="operators" type="button" value="&times;" />
        </div>
        <div className="buttons">
          <input type="button" value="4" />
          <input type="button" value="5" />
          <input type="button" value="6" />
          <input className="operators" type="button" value="&minus;" />
        </div>
        <div className="buttons">
          <input type="button" value="1" />
          <input type="button" value="2" />
          <input type="button" value="3" />
          <input className="operators" type="button" value="&#43;" />
        </div>
        <div className="buttonsLast">
          <input type="button" value="0" />
          <input type="button" value="&#46;" />
          <input className="operators" type="button" value="=" />
        </div>
      </article>
    </form>
  </section>
);

export default Calculator;

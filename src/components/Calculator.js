import React from 'react';
import './Calculator.css';
import InputText from './InputText';
import InputButton from './InputButton';

const Calculator = () => (
  <section className="calculator_container">
    <form action="">
      <div>
        <InputText />
      </div>

      <article className="calcButtons_container">
        <div className="buttons">
          <InputButton value="AC" />
          <InputButton value="+/-" />
          <InputButton value="%" />
          <InputButton className="operators" value="&divide;" />
        </div>
        <div className="buttons">
          <InputButton value="7" />
          <InputButton value="8" />
          <InputButton value="9" />
          <InputButton className="operators" value="&times;" />
        </div>
        <div className="buttons">
          <InputButton value="4" />
          <InputButton value="5" />
          <InputButton value="6" />
          <InputButton className="operators" type="button" value="&minus;" />
        </div>
        <div className="buttons">
          <InputButton value="1" />
          <InputButton value="2" />
          <InputButton value="3" />
          <InputButton className="operators" type="button" value="&#43;" />
        </div>
        <div className="buttonsLast">
          <InputButton value="0" />
          <InputButton value="&#46;" />
          <InputButton className="operators" type="button" value="=" />
        </div>
      </article>
    </form>
  </section>
);

export default Calculator;

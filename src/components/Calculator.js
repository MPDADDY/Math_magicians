import './Calculator.css';
import { useState } from 'react';
import InputText from './InputText';
import InputButton from './InputButton';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    // Use the calculate function to update calculatorData
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };
  return (
    <section className="calculator_container">
      <form action="">
        <div>
          <InputText className="inputText" value={calculatorData.next || calculatorData.total || '0'} />
        </div>

        <article className="calcButtons_container">
          <div className="buttons">
            <InputButton value="AC" onClick={() => handleButtonClick('AC')} />
            <InputButton value="+/-" onClick={() => handleButtonClick('+/-')} />
            <InputButton value="%" onClick={() => handleButtonClick('%')} />
            <InputButton className="operators" value="&divide;" onClick={() => handleButtonClick('÷')} />
          </div>
          <div className="buttons">
            <InputButton value="7" onClick={() => handleButtonClick('7')} />
            <InputButton value="8" onClick={() => handleButtonClick('8')} />
            <InputButton value="9" onClick={() => handleButtonClick('9')} />
            <InputButton className="operators" value="&times;" onClick={ () => handleButtonClick('x')} />
          </div>
          <div className="buttons">
            <InputButton value="4" onClick={() => handleButtonClick('4')} />
            <InputButton value="5" onClick={() => handleButtonClick('5')} />
            <InputButton value="6" onClick={() => handleButtonClick('6')} />
            <InputButton className="operators" type="button" value="&minus;" onClick={() => handleButtonClick('-')} />
          </div>
          <div className="buttons">
            <InputButton value="1" onClick={() => handleButtonClick('1')} />
            <InputButton value="2" onClick={() => handleButtonClick('2')} />
            <InputButton value="3" onClick={() => handleButtonClick('3')} />
            <InputButton className="operators" type="button" value="&#43;" onClick={() => handleButtonClick('+')} />
          </div>
          <div className="buttonsLast">
            <InputButton value="0" onClick={() => handleButtonClick('0')} />
            <InputButton value="&#46;" onClick={() => handleButtonClick('.')} />
            <InputButton className="operators" type="button" value="=" onClick={() => handleButtonClick('=')} />
          </div>
        </article>
      </form>
    </section>
  );
};

export default Calculator;

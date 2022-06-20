import React from "react";
import "./advice.css";

import DiceIcon from "../../images/icon-dice.svg";
import PatterDivider from "../../images/pattern-divider-desktop.svg";

interface AdviceProps {
  advice: string;
  number: number;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Advice: React.FC<AdviceProps> = ({
  advice,
  number,
  onClick,
}): JSX.Element => {
  return (
    <div className="advice-container">
      <p className="advice-number">Advice #{number}</p>
      <h2 className="advice">"{advice}"</h2>
      <img src={PatterDivider} alt="patter icon" className="patter-icon" />
      <div className="dice-container">
        <img
          src={DiceIcon}
          alt="dice icon"
          onClick={onClick}
          className="dice-icon"
        />
      </div>
    </div>
  );
};

export default Advice;

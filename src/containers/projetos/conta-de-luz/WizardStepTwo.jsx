import React, { useState } from "react";
import "./styles.css";

export default function WizardStepTwo({ onNext }) {
  const [consumo, setConsumo] = useState("");

  const handleChange = (e) => {
    setConsumo(e.target.value);
  };

  const handleNext = () => {
    if (consumo.trim() !== "") {
      onNext(consumo);
    } else {
      alert("Por favor, informe o consumo em KW/h.");
    }
  };

  return (
    <div className="conta-page">
      <h1>Calculadora de Conta de Luz</h1>
      <div className="wizard-step">
        <h2 className="wizard-question">
          Quantos KW/h foram consumidos, mainha?
        </h2>
        <input
          type="number"
          className="wizard-input"
          placeholder="Digite o consumo em KW/h"
          value={consumo}
          onChange={handleChange}
        />
        <button className="wizard-button" onClick={handleNext}>
          Próximo
        </button>
      </div>
    </div>
  );
}

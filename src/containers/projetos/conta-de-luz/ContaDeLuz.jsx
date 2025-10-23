import React, { useState } from "react";
import "./styles.css";

export default function ContaDeLuz({ onNext }) {
  const [valorConta, setValorConta] = useState("");

  const handleChange = (e) => {
    setValorConta(e.target.value);
  };

  const handleNext = () => {
    if (valorConta.trim() !== "") {
      onNext(valorConta);
    } else {
      alert("Por favor, informe o valor da conta de luz.");
    }
  };

  return (
    <div className="conta-page">
      <h1>Calculadora de Conta de Luz</h1>
      <div className="wizard-step">
        <h2 className="wizard-question">
          Mainha, pode me falar quanto deu a conta de luz?
        </h2>
        <input
          type="number"
          className="wizard-input"
          placeholder="Digite o valor em R$"
          value={valorConta}
          onChange={handleChange}
        />
        <button className="wizard-button" onClick={handleNext}>
          Próximo
        </button>
      </div>
    </div>
  );
}
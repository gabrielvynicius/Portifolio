import React, { useState } from "react";
import "./styles.css";

export default function Wizard() {
  const [step, setStep] = useState(1);
  const [valorConta, setValorConta] = useState("");
  const [consumo, setConsumo] = useState("");
  const [valorMultimetroAntigo, setValorMultimetroAntigo] = useState("");
  const [valorMultimetroAtual, setValorMultimetroAtual] = useState("");
  const [input, setInput] = useState("");

  const handleNext = () => {
    if (input.trim() === "") {
      alert("Por favor, preencha o campo.");
      return;
    }

    switch (step) {
      case 1:
        setValorConta(input);
        break;
      case 2:
        setConsumo(input);
        break;
      case 3:
        setValorMultimetroAntigo(input);
        break;
      case 4:
        setValorMultimetroAtual(input);
        break;
      default:
        break;
    }

    setInput("");
    setStep(step + 1);
  };

  const getQuestion = () => {
    switch (step) {
      case 1:
        return "Mainha, pode me falar quanto deu a conta de luz?";
      case 2:
        return "Quantos KW/h foram consumidos, mainha?";
      case 3:
        return "Qual foi o valor do último multímetro?";
      case 4:
        return "Qual é o valor do multímetro atual?";
      default:
        return "";
    }
  };

  // Cálculos matemáticos
  const valorPorKwh =
    consumo !== "0" ? (parseFloat(valorConta) / parseFloat(consumo)).toFixed(5) : "0.00000";

  const diferencaMultimetros = (
    parseFloat(valorMultimetroAtual) - parseFloat(valorMultimetroAntigo)
  ).toFixed(2);

  const consumoMary =
    consumo !== "0" ? parseFloat(diferencaMultimetros).toFixed(2) : "0.00";

  const consumoAluguel =
    consumo !== "0" ? (parseFloat(consumo) - parseFloat(consumoMary)).toFixed(2) : "0.00";

  const valorMary =
    consumoMary !== "0"
      ? (parseFloat(consumoMary) * parseFloat(valorPorKwh)).toFixed(2)
      : "0.00";

  const valorRafael =
    consumoAluguel !== "0"
      ? (parseFloat(consumoAluguel) * parseFloat(valorPorKwh)).toFixed(2)
      : "0.00";

  return (
    <div className="conta-page">
      <h1>Calculadora de Conta de Luz</h1>

      {step <= 4 ? (
        <div className="wizard-step">
          <h2 className="wizard-question">{getQuestion()}</h2>
          <input
            type="number"
            className="wizard-input"
            placeholder="Digite o valor"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleNext();
              }
            }}
          />

          <div className="wizard-buttons">
            {step > 1 && (
              <button
                className="wizard-button voltar-button"
                onClick={() => {
                  setStep(step - 1);

                  // Mantém o valor anterior no input
                  switch (step - 1) {
                    case 1:
                      setInput(valorConta);
                      break;
                    case 2:
                      setInput(consumo);
                      break;
                    case 3:
                      setInput(valorMultimetroAntigo);
                      break;
                    case 4:
                      setInput(valorMultimetroAtual);
                      break;
                    default:
                      setInput("");
                      break;
                  }
                }}
              >
                Voltar
              </button>
            )}

            <button className="wizard-button" onClick={handleNext}>
              Próximo
            </button>
          </div>
        </div>
      ) : (
        <div className="wizard-step">
          <h2 className="wizard-question">Resumo</h2>

          {/* Seção 1 - Cálculo da Conta */}
          <div className="resumo-section resumo-principal">
            <h3>Cálculo da Conta de Luz</h3>
            <p><strong>Valor da conta de luz:</strong> R$ {valorConta}</p>
            <p><strong>Quantidade de KW/h consumido:</strong> {consumo}</p>
            <p><strong>Valor do último multímetro:</strong> {valorMultimetroAntigo}</p>
            <p><strong>Valor do multímetro atual:</strong> {valorMultimetroAtual}</p>
            <p><strong>Valor do KW/h:</strong> R$ {valorPorKwh}</p>
          </div>

          {/* Seção 2 - Divisão */}
          <div className="resumo-divisao">
            <h3>Divisão do Consumo</h3>

            <div className="resumo-boxes">
              <div className="resumo-box resumo-mary">
                <h4>Mary</h4>
                <p><strong>KW/h:</strong> {consumoMary}</p>
                <p><strong>Valor a pagar:</strong> R$ {valorMary}</p>
              </div>

              <div className="resumo-box resumo-aluguel">
                <h4>Aluguel</h4>
                <p><strong>KW/h:</strong> {consumoAluguel}</p>
                <p><strong>Valor a pagar:</strong> R$ {valorRafael}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

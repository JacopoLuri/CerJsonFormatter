import { useContext, useEffect, useRef } from "react";
import { Context } from "./context/Context";

const App = () => {
  const context = useContext(Context);
  const {
    cers,
    getCers,
    formatter,
    objD,
    setObjD,
    objR,
    setObjR,
    formattedCers,
    setFormattedCers,
  } = context;

  const textAreaRef = useRef(null);

  useEffect(
    () => setFormattedCers(false),
    [cers, objD, objR, setFormattedCers]
  );

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
  }

  return (
    <main style={{ padding: "50px" }}>
      <h1>CER JSON Formatter v1.0</h1>
      <p>
        Inserisci i codici CER in un file excel, uno per ogni riga, non mettere
        virgole o virgolette.
        <br />
        Quindi copiali qui sotto.
        <br />
        Saranno automaticamente formattati in questo modo:
        010101\n020103\n040503\n etc.
        <br />
        Se vuoi inserirli manualmente inserisci tutti i numeri attaccati senza
        lasciare spazi: 010101020202030303 etc.
        <br />
        In entrambi i casi ASSICURATI che ogni CER sia composto da esattamente
        da 6 cifre!
      </p>
      <textarea
        placeholder="Codici CER"
        style={{ width: "30vw", height: "20vh" }}
        onChange={(e) => getCers(e.target.value)}
      />
      <br />
      <label for="D">
        Scegli una destinazione D da applicare a tutti i CER:
      </label>
      <select
        name="D"
        onChange={(e) => setObjD({ ...objD, firstD: e.target.value })}
      >
        <option value="" />
        <option value="D1">D1</option>
        <option value="D2">D2</option>
        <option value="D3">D3</option>
        <option value="D4">D4</option>
        <option value="D5">D5</option>
        <option value="D6">D6</option>
        <option value="D7">D7</option>
        <option value="D8">D8</option>
        <option value="D9">D9</option>
        <option value="D10">D10</option>
        <option value="D11">D11</option>
        <option value="D12">D12</option>
        <option value="D13">D13</option>
        <option value="D14">D14</option>
        <option value="D15">D15</option>
      </select>
      <br />
      <label for="D">Scegli la seconda destinazione D, se presente:</label>
      <select
        name="D"
        onChange={(e) => setObjD({ ...objD, secondD: e.target.value })}
      >
        <option value="" />
        <option value="D1">D1</option>
        <option value="D2">D2</option>
        <option value="D3">D3</option>
        <option value="D4">D4</option>
        <option value="D5">D5</option>
        <option value="D6">D6</option>
        <option value="D7">D7</option>
        <option value="D8">D8</option>
        <option value="D9">D9</option>
        <option value="D10">D10</option>
        <option value="D11">D11</option>
        <option value="D12">D12</option>
        <option value="D13">D13</option>
        <option value="D14">D14</option>
        <option value="D15">D15</option>
      </select>
      <br />
      <label for="D">Scegli la terza destinazione D, se presente:</label>
      <select
        name="D"
        onChange={(e) => setObjD({ ...objD, thirdD: e.target.value })}
      >
        <option value="" />
        <option value="D1">D1</option>
        <option value="D2">D2</option>
        <option value="D3">D3</option>
        <option value="D4">D4</option>
        <option value="D5">D5</option>
        <option value="D6">D6</option>
        <option value="D7">D7</option>
        <option value="D8">D8</option>
        <option value="D9">D9</option>
        <option value="D10">D10</option>
        <option value="D11">D11</option>
        <option value="D12">D12</option>
        <option value="D13">D13</option>
        <option value="D14">D14</option>
        <option value="D15">D15</option>
      </select>
      <br />
      <br />
      <label for="R">
        Scegli una destinazione R da applicare a tutti i CER:
      </label>
      <select
        name="R"
        onChange={(e) => setObjR({ ...objR, firstR: e.target.value })}
      >
        <option value="" />
        <option value="R1">R1</option>
        <option value="R2">R2</option>
        <option value="R3">R3</option>
        <option value="R4">R4</option>
        <option value="R5">R5</option>
        <option value="R6">R6</option>
        <option value="R7">R7</option>
        <option value="R8">R8</option>
        <option value="R9">R9</option>
        <option value="R10">R10</option>
        <option value="R11">R11</option>
        <option value="R12">R12</option>
        <option value="R13">R13</option>
      </select>
      <br />
      <label for="R">Scegli la seconda destinazione R, se presente:</label>
      <select
        name="R"
        onChange={(e) => setObjR({ ...objR, secondR: e.target.value })}
      >
        <option value="" />
        <option value="R1">R1</option>
        <option value="R2">R2</option>
        <option value="R3">R3</option>
        <option value="R4">R4</option>
        <option value="R5">R5</option>
        <option value="R6">R6</option>
        <option value="R7">R7</option>
        <option value="R8">R8</option>
        <option value="R9">R9</option>
        <option value="R10">R10</option>
        <option value="R11">R11</option>
        <option value="R12">R12</option>
        <option value="R13">R13</option>
      </select>
      <br />
      <label for="R">Scegli la terza destinazione R, se presente:</label>
      <select
        name="R"
        onChange={(e) => setObjR({ ...objR, thirdR: e.target.value })}
      >
        <option value="" />
        <option value="R1">R1</option>
        <option value="R2">R2</option>
        <option value="R3">R3</option>
        <option value="R4">R4</option>
        <option value="R5">R5</option>
        <option value="R6">R6</option>
        <option value="R7">R7</option>
        <option value="R8">R8</option>
        <option value="R9">R9</option>
        <option value="R10">R10</option>
        <option value="R11">R11</option>
        <option value="R12">R12</option>
        <option value="R13">R13</option>
      </select>
      <br />
      <br />
      <button onClick={() => cers && formatter(cers)}>Formatta!</button>
      <br />
      <br />
      <br />
      {formattedCers && (
        <>
          <button
            onClick={() => {
              copyToClipboard();
              alert("Testo copiato correttamente!");
            }}
          >
            Copia
          </button>
          <button onClick={() => window.location.reload()}>Reset</button>
          <br />
          <br />
          <pre>
            <textarea
              ref={textAreaRef}
              style={{ width: "50vw", height: "90vh" }}
              // value={JSON.stringify(formattedCers, undefined, 2)}
            >
              {JSON.stringify(formattedCers, undefined, 2)}
            </textarea>
          </pre>
        </>
      )}
    </main>
  );
};

export default App;

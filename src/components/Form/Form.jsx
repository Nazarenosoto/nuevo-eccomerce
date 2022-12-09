import "./Style.css";

function Formulario() {
  return (
    <div>
      <br />
      <h1 id="title">Contactanos</h1>
      <p id="description">Gracias por su interes</p>
      <form id="survey-form">
        <label id="name-label">
          Nombre
          <br />
          <input id="name" type="text" placeholder="Su nombre" required />
        </label>
        <br />
        <label id="email-label">
          Email
          <br />
          <input id="email" type="email" placeholder="Su mail" required />
        </label>
        <br />
        <label id="number-label">
          Edad
          <br />
          <input
            id="number"
            type="number"
            min={10}
            max={99}
            className="form-control"
            placeholder="Edad"
            required
          />
        </label>
        <br />
        <br />
        <label>
          Nos recomendarias?
          <br />
          <input type="radio" name="indoor-outdoor" defaultValue="Definitely" />
          Definitivamente
        </label>
        <br />
        <input type="radio" name="indoor-outdoor" defaultValue="Maybe" />
        Quizas
        <br />
        <input type="radio" name="indoor-outdoor" defaultValue="Not sure" />
        No estoy segurx
        <br />
        <br />
        <label>Sugerencias?</label>
        <br />
        <textarea
          id="comments"
          className="input-textarea"
          name="comment"
          placeholder="Escriba aqui..."
          spellCheck="false"
          defaultValue={""}
        />
        <button id="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;

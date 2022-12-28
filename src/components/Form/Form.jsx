import "./Style.css";

function Formulario() {
  return (
    <div className="cajaForm">
      <p id="description">Thank you for taking the time! 😄 </p>
      <form id="survey-form" className="containerForm">
        <label id="name-label" className="name_label" >
          <p className="pp">Your Name</p>
          <input id="name" type="text" required />
        </label>
        <label id="email-label" className="email_label">
          <p className="pp">Your Email </p>
          <input id="email" type="email" required />
        </label>
        <label id="number-label" className="your_age">
          <p className="pp">Your Age</p>
          <input
            id="number"
            type="number"
            min={15}
            max={90}
            className="form-control"
            placeholder="Edad"
            required
          />
        </label>
        <label>where we can improve?</label>
        <textarea
          id="comments"
          className="input-textarea"
          name="comment"
          placeholder="Escriba aqui..."
          spellCheck="false"
          defaultValue={""}
        />
        <button id="submit" className="submitbtn">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;

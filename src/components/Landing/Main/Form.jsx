import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

function Form() {
  const [active, setActive] = useState(false);
  return (
    <div className={`form ${active ? "active" : ""}`}>
      <div className="form_trigger">
        <span></span>
        <button onClick={() => setActive(!active)}>
          <GoArrowLeft className={`icon-1 ${active ? "active" : ""}`} />
          <p>reservation</p>
        </button>
      </div>
      <div className="form_input">
        <span></span>
        <form>
          <div>
            <label>name</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
          <div>
            <label>Event Date</label>
            <input type="date" />
            <p>-</p>
            <input type="date" />
          </div>
          <div>
            <label>Contact</label>
            <input type="date" />
          </div>
          <div>
            <button>send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;

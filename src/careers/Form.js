import React from "react";
import "./careers.scss";
function Form() {
  return (
    <div className="container">
      <div className="form">
        <h1>Apply Now</h1>
        <form action="">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="Last name" />
          <input type="email" placeholder="email id" />
          <input type="number" placeholder="Mobile No" />
        </form>
        <textarea
          cols={150}
          rows={10}
          placeholder="Why do you thing you are good fit for Ether?"
        ></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Form;

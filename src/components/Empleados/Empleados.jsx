import React from "react";
import "./empleados.css";

const Empleados = ({ nombre, email, companyAddress }) => {
  return (
    <div id="empleados">
      <div className="glow-box">
        <div className="header">{!nombre ? "Name not available" : nombre}</div>
        <div className="content">{!email ? "email not available" : email}</div>
        <div className="content">
          {!companyAddress ? "Company not available" : companyAddress}
        </div>
      </div>
    </div>
  );
};

export default Empleados;

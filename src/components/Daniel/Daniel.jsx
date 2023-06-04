import React, { useState, useEffect } from "react";
import Empleados from "../Empleados/";
import "./daniel.css";

const Daniel = () => {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState();
  const [empleados, setEmpleados] = useState([]);

  function counterFunction() {
    setCounter(counter + 1);
  }

  function subCounterFunction() {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  }

  function displayName() {
    alert(name);
  }

  function handleChangeName(e) {
    // console.log("TARGET VALUE", e.target.value);
    setName(e.target.value);
  }

  function saveName(e) {
    setSavedName(name);
    // console.log("Saved name", savedName);
  }

  //   console.log("NAME", name);

  function displaySavedName() {
    alert(savedName);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((response) => setEmpleados(response))
    );
  }, []);

  const renderEmployees = empleados.map((empleado, i) => {
    return (
      <div key={i}>
        <Empleados
          nombre={empleado.name}
          email={empleado.email}
          companyAddress={empleado.company.name}
        />
      </div>
    );
  });

  return (
    <>
      <div style={{ textAlign: "center" }} id="daniel-component">
        <div
          style={{ border: "1px solid blue", padding: "2em", margin: "2em" }}
        >
          <h1>{counter}</h1>
          <button onClick={counterFunction}>Add</button>
          <button onClick={subCounterFunction}>Substract</button>
        </div>

        <div
          style={{ border: "1px solid blue", padding: "2em", margin: "2em" }}
        >
          <input
            type="text"
            placeholder="Su nombre aquí"
            value={name}
            onChange={handleChangeName}
          />
          <button onClick={displayName}>Display Name</button>
          <button onClick={saveName}>Save Name</button>
          <button onClick={displaySavedName}>Show saved name</button>
        </div>
        <div style={{ border: "1px solid blue", padding: "2em" }}>
          {renderEmployees}
        </div>
      </div>
    </>
  );
};

export default Daniel;

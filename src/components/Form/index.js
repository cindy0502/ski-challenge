import React, { useState } from "react";
import "./style.css";

import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

function Form() {
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedSkiType, setSelectedSkiType] = useState("");
  const [heightInput, setHeightInput] = useState("");
  const [result, setResult] = useState("");
  const skiLength = parseInt(heightInput) + 10;

  const handleSelectedAge = (e) => {
    setSelectedAge(e.target.value);
  };

  const handleSelectedSkiType = (e) => {
    setSelectedSkiType(e.target.value);
  };

  const handleInput = (e) => {
    const re = /^[0-9\b]+$/;
    if (setHeightInput(e.target.value) === "" || re.test(e.target.value)) {
      console.log(parseInt(heightInput));
    } else {
      alert("not valid");
    }
  };

  const onClickBtn = (e) => {
    if (selectedAge === "ageGroup_1") {
      alert("0-4 år, " + (parseInt(heightInput) + 0) + "cm");
    }
    if (selectedAge === "ageGroup_2") {
      alert("5-8 år, " + (parseInt(heightInput) + 10) + "cm");
    }
    if (selectedAge === "ageGroup_3" && selectedSkiType === "formType_1") {
      if (parseInt(heightInput) + 10 > 207) {
        alert("Din längd finns inte tillgänglig i klassisk skida");
      } else {
        alert(
          "Din rekommenderade skid längd är : " +
            (parseInt(heightInput) + 10) +
            "cm, Klassisk "
        );
      }
    }

    if (selectedAge === "ageGroup_3" && selectedSkiType === "formType_2") {
      alert(
        "Din rekommenderade skid längd är : " +
          (parseInt(heightInput) + 15) +
          "cm, Fristil "
      );
    } else {
      return (
        <div style={{ backgroundColor: "blue" }}>
          <h1>"fill in all textfield"</h1>
        </div>
      );
    }
  };

  return (
    <div className="form">
      <form>
        <div className="form__heightInput">
          <input
            placeholder="Ange längd"
            name="height"
            type="text"
            onChange={handleInput}
            value={heightInput}
          />
        </div>

        <div className="form__ageInput">
          <select
            className="form__ageSelect"
            name="ageGroup"
            onChange={handleSelectedAge}
            value={selectedAge}
          >
            <option className="form__ageText" value="">
              Ange ålder
            </option>
            <option value="ageGroup_1">0-4 år</option>
            <option value="ageGroup_2">5-8 år</option>
            <option value="ageGroup_3">9+ år</option>
          </select>
        </div>
        <div className="form__skiTypeInput">
          <select
            className="form__skiTypeSelect"
            name="skiType"
            onChange={handleSelectedSkiType}
            value={selectedSkiType}
          >
            <option className="form__skiText" value="">
              Typ av skida
            </option>
            <option value="formType_1">Klassisk</option>
            <option value="formType_2">Fristil</option>
          </select>
        </div>
        <button className="form__button" onClick={onClickBtn}>
          Beräkna
        </button>
      </form>
      <h1>{console.log({ result })}</h1>
      {/* <h1>Din rekommenderade skid längd är : {skiLength}cm. Klassisk</h1> */}
    </div>
  );
}

export default Form;

import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";

const PESELvalidation = {
  max: 11,
};

const numberIDvalidation = {
  maxLength: 15,
};

const Step2 = ({ setForm, formData, navigation }) => {
  const { PESEL, brithDate, IDcard, numbrID } = formData;
  const [value, setValue] = useState(false); //pod wybór dowód/paszport
  const { previous, next } = navigation;
  const [valuePESEL, setValuePESEL] = useState(false); //pod spr PESEL
  const { register, handleSubmit } = useForm();

  const tmpPesel = React.createRef();

  function DateWithPesel() {
    let pesel = tmpPesel.current;

    console.log("tmp presel ==== " + JSON.stringify(pesel));
    let year = parseInt(pesel.substring(0, 2), 10);
    let month = parseInt(pesel.substring(2, 4), 10) - 1;
    let day = parseInt(pesel.substring(4, 6), 10);

    if (month > 80) {
      year = year + 1800;
      month = month - 80;
    } else if (month > 60) {
      year = year + 2200;
      month = month - 60;
    } else if (month > 40) {
      year = year + 2100;
      month = month - 40;
    } else if (month > 20) {
      year = year + 2000;
      month = month - 20;
    } else {
      year += 1900;
    }
    let BirthDate = new Date();
    BirthDate.setFullYear(day, month, year);

    let weight = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];
    let sum = 0;
    for (let i = 0; i < weight.length; i++) {
      sum += parseInt(pesel.substring(i, i + 1), 10) * weight[i];
    }
    sum = sum % 10;
    let Valid = sum === parseInt(pesel.substring(10, 11), 10);

    return { date: BirthDate, valid: Valid };
  }

  return (
    <form>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h4">Krok 2</Typography>
        </Grid>
        <br></br>

        <div className="Step2">
          <div>
            <label> PESEL: </label>
            <input
              type="text"
              placeholder="PESEL"
              value={PESEL}
              {...PESELvalidation}
              ref={register(DateWithPesel)}
              onChange={setForm}
            />
          </div>
          <br></br>
          <div>
            <label> Data urodzenia:</label>
            <label> {valuePESEL ? "Niepoprawny PESEL" : brithDate}</label>
          </div>
          <br></br>
          <div>
            <label> Typ dokumentu tożsamości: </label>
            <select name="choiseID" onChange={() => setValue(!value)}>
              <option>Dowód osobisty</option>
              <option>Paszport</option>
            </select>
          </div>
          <br></br>
          <div>
            <label>
              {" "}
              {value ? "Numer paszportu" : "Numer dowodu osobistego"}
              <input
                type="text"
                placeholder="Numer dokumentu torżsamości"
                name="numbrID"
                {...numberIDvalidation}
                ref={numberIDvalidation}
                onChange={setForm}
              />
            </label>
          </div>
          <br></br>

          <button variant="contained" type="submit" onClick={previous}>
            Krok 1
          </button>

          <button
            variant="contained"
            color="primary"
            type="submit"
            onClick={next}
          >
            Krok 3
          </button>
        </div>
      </Grid>
    </form>
  );
};

export default Step2;

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

  const { register, handleSubmit, errors } = useForm();
  const handleOnSubmit = (data) => console.log(data);
  const [birthDate, setBirthDate] = useState("");

  const DateWithPesel = (pesel) => {
    let year = parseInt(pesel.substring(0, 2), 10);
    let month = parseInt(pesel.substring(2, 4), 10);
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
    month = month.toString();
    if (month.length < 2) {
      month = "0" + month;
    }

    let BirthDate = `${day}-${month}-${year}`;
    setBirthDate(BirthDate);
  };

  const handleBirthDate = (e) => {
    const pesel = e.target.value;

    const regex = /^[0-9]{11}$/;

    if (!regex.test(pesel)) setBirthDate("");
    else {
      if (parseInt(pesel.substring(4, 6)) < 31) {
        if (parseInt(pesel.substring(2, 3)) % 2 === 0) {
          DateWithPesel(pesel);
        } else if (parseInt(pesel.substring(3, 4)) <= 2) {
          DateWithPesel(pesel);
        }
      }
    }
  };


  return (
    <form onSubmit={(e) => handleSubmit( birthDate, handleOnSubmit)}>
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
              {...PESELvalidation}
              ref={register(DateWithPesel)}
              onChange={(e) => {
                handleBirthDate(e);
                setForm(e);
              }}
            />
          </div>
          <br></br>
          <div>
            <label> Data urodzenia:</label>
            <input type="text" name="birthDate" value={birthDate} disabled />
          </div>
          <br></br>
          <div>
            <label> Typ dokumentu tożsamości: </label>
            <select 
              name="IDcard" 
              onChange={(e) => {setValue(!value); setForm(e);}} >
              <option value="dowód">Dowód osobisty</option>
              <option value="paszport">Paszport</option>
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

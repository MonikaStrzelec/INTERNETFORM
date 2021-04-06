import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useForm } from 'react-hook-form';

const firstNameValidation = {
  required: true,
  minLength: 2,
  maxLength: {
    value: 50,
    message: "Imię może mieć maksymalnie 50 znakó",
  },
};

const nameValidation = {
  required: true,
  maxLength: 60,
};

const telephonNumberValidation = {
  min: 9,
  max: 9,
  pattern: "\\d{3} \\d{3} \\d{3}",
};

const emailValidation = {
  pattern: /^\S+@\S+$/i,
};

const Step1 = ({ setForm, formData, navigation, startTime }) => {
  const { firstName, name, numberPhone, email } = formData;
  const { next } = navigation;

  const { register, handleSubmit, errors} = useForm()
  const handleOnSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h4">Krok 1</Typography>
        </Grid>
        <br></br>

        <div className="Step1">
          <div>
            <label> Imię: 
            <input type="text" 
            placeholder="Imię" 
            name="firstName" 
            {...firstNameValidation}
            ref={register(firstNameValidation)} 
            onChange={setForm}/>
            </label>
          </div>
          <br></br>
          <div>
            <label> Nazwisko: 
            <input
              type="text"
              {...nameValidation}
              placeholder="Nazwisko"
              name="name"
              ref={register(nameValidation)}
              onChange={setForm}
            /></label>
          </div>
          <br></br>
          <div>
            <label> Numer telefonu: 
            <input
              type="tel"
              {...telephonNumberValidation}
              placeholder="Numer telefonu"
              name="numberPhone"
              ref={register(telephonNumberValidation)}
              onChange={setForm}
            /></label>
          </div>
          <br></br>
          <div>
            <label> E-mail: 
            <input
              type="email"
              {...emailValidation}
              placeholder="Email"
              name="email"
              ref={register(emailValidation)}
              onChange={setForm}
            /></label>
          </div>
          <br></br>
          <br></br>
          <button
            variant="contained"
            color="primary"
            type="submit"
            onClick={next}
          >
            Krok 2
          </button>
        </div>
      </Grid>
    </form>
  );
};

export default Step1;

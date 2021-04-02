import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Step3 = ({ setForm, formData, navigation, props, startTime }) => {

  

  var secondBetweenTwoDate = Math.abs((new Date().getTime() - startTime) / 1000);
  console.log("START TIME ====== " + JSON.stringify(secondBetweenTwoDate));
  const {
    firstName,
    name,
    numberPhone,
    email,
    PESEL,
    brithDate,
    IDcard,
    numbrID,
  } = formData;

  return (
    <form>
      <Grid container direction="column" justify="flex-end" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4">Krok 3</Typography>
        </Grid>

        <div className="Step2">
          <div className="form">
            <h3>Twoje dane z formularza to:</h3>
            Imię: {`${firstName}`},
            <br></br>
            <br></br>
            Nazwisko: {`${name}`},
            <br></br>
            <br></br>
            Numer telefonu: {`${numberPhone}`},
            <br></br>
            <br></br>
            Adres e-mail: {`${email}`},
            <br></br>
            <br></br>
          </div>

          <div>
            PESEL: {`${PESEL}`},
            <br />
            <br></br>
            Data urodzin: {` ${brithDate}`},
            <br />
            <br></br>
            Typ dokumentu torżsamości to: {`${IDcard}`},
            <br />
            <br></br>
            Numer dokumentu torżsamości: {`${numbrID}`}
            <br></br>
            <br></br>
          </div>
          <br></br>

          <Typography variant="h6">
            Wypełnienie formularza zajęło ci:
          </Typography>
          <div>{` `},</div>
        </div>
      </Grid>
    </form>
  );
};

export default Step3;

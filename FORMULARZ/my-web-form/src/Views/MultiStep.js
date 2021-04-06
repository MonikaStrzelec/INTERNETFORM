import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Step1 from "./Forms/Step1";
import Step2 from "./Forms/Step2";
import Step3 from "./Forms/Step3";


const steps = [
  { id: "step1" },
  { id: "step2" },
  { id: "step3" }
];

const defaultData = {
    firstName: "Monika", 
    name: "Strzelec", 
    numberPhone: "793 652 269", 
    email: "monikaagata1990@wp.pl", 
    PESEL: "", 
    brithDate: "", 
    IDcard: "dowód osobity", 
    numbrID: ""
};

const MultiStep = () => {

  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  const startTime = new Date().getTime();

  const props = { formData, setForm, navigation, startTime };


  switch (id) {
    case "step1":
      return <Step1 {...props} />;
    case "step2":
      return <Step2 {...props} />;
    case "step3":
      return <Step3 {...props} />;
    default:
      return null;
  }

};

export default MultiStep;

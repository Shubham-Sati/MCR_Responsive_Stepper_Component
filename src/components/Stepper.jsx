// It will accept a list of components
// based on the size of the list
// it will generate steps

import React, { useState } from "react";
import "./Stepper.css";

const Stepper = ({ list }) => {
  const stepsCount = list.length;
  const steps = [];
  const [currentStep, setCurrentStep] = useState(0);

  for (let i = 0; i < stepsCount; i++) {
    steps.push(
      <div
        key={i}
        onClick={() => handelChangeStep(i)}
        className={`steps ${currentStep >= i ? "active" : ""}`}
      >
        {i + 1}
      </div>
    );
  }

  //   for list of "n" items we will be having "n - 1" lines between "n" items
  const progressLineWidth = (100 / (list.length - 1)) * currentStep;

  const handelChangeStep = (i) => {
    if (currentStep + 1 === i) {
      onNext();
    }
    if (currentStep - 1 === i) {
      onPrev();
    }
  };

  const onPrev = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onNext = () => {
    if (currentStep !== list.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <section className="stepper">
      <div className="steps-container">
        <div className="steps-wrapper">{steps}</div>
        <div
          className="progress-line"
          style={{ width: `${progressLineWidth}%` }}
        ></div>
      </div>
      {/* If we need to create the next and prev button in the component do as below*/}
      {/* in below we need to pass the function onNext and onPrev in the component */}
      {/* But we can do it like this */}
      {/* To this react provide us a method which clone the component and can send the props also */}
      {/* first parameter is the component to be cloned and second is the props need to be send */}

      {/* <div className="main-page">
        {React.cloneElement(list[currentStep], { onPrev, onNext })}
      </div> */}

      <div className="main-page">{list[currentStep]}</div>
      <div className="navigation-buttons">
        <button
          onClick={onPrev}
          className={`naviButton ${currentStep === 0 ? "blur" : ""}`}
        >
          Prev
        </button>
        <button
          onClick={onNext}
          className={`naviButton ${
            currentStep === list.length - 1 ? "blur" : ""
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Stepper;

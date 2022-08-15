import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "expect";
import tryConvert from "../../app/index.js";

Given("I have a temperature of {float}° {units}", function (temp2Convert, _) {
  this.temp2Convert = temp2Convert;
});

When("I convert it to degrees {units}", function (units) {
  this.convertedTemp = tryConvert(this.temp2Convert, units);
});

Then("I see {float}° {units}", function (expectedTemp, _) {
  const expectHelper = () => {
    expect(this.convertedTemp).toBe(expectedTemp.toString());
  };

  expectHelper();
});

Given("I have {float} input", function (temp2Convert) {
  this.temp2Convert = temp2Convert.toString;
});

Then("I see a blank {string}", function (expectedTemp) {
  const expectHelper = () => {
    expect(this.convertedTemp).toBe(expectedTemp.toString(""));
  };

  expectHelper();
});

// Then("I see a blank string ", function (expectedTemp, _) {
//   const expectHelper = () => {
//     expect(this.convertedTemp).toBe(expectedTemp.toString());
//   };

//   expectHelper();
// });

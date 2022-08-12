import { defineParameterType } from "@cucumber/cucumber";

defineParameterType({
  name: "units",
  regexp: /C|F|Celsius|Fahrenheit/,
  transformer(name) {
    return name.startsWith("C") ? "toCelsius" : "toFahrenheit";
  },
});

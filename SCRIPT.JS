document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
  
    window.append = function (value) {
      display.value += value;
    };
  
    window.clearDisplay = function () {
      display.value = "";
    };
  
    window.backspace = function () {
      display.value = display.value.slice(0, -1);
    };
  
    window.calculate = function () {
      try {
        const result = eval(display.value);
        display.value = result;
      } catch (error) {
        display.value = "Error";
      }
    };
  });
  
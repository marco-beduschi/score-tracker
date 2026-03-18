addEventListener("DOMContentLoaded", (_event) => {
  document.querySelectorAll(".number-stepper").forEach((numberStepper) => {
    numberStepper.scroll({
      top: 999999, // Extremely high value so that it always scrolls to the top.
      behavior: "smooth"
    });
  });
});


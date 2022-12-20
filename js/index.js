//NavBar Functionallity
const nav = document.querySelector(".nav");
const navWeight = document.querySelector(".nav_weight");
const navBMI = document.querySelector(".nav_bmi");
const navLang = document.querySelector(".nav_lang");
const contWeight = document.querySelector(".hw__container");
const contBMI = document.querySelector(".bmi__container");
const contLang = document.querySelector(".lang__container");

navWeight.addEventListener("click", function () {
  contWeight.scrollIntoView({ behavior: "smooth" });
});

navBMI.addEventListener("click", function () {
  contBMI.scrollIntoView({ behavior: "smooth" });
});

navLang.addEventListener("click", function () {
  contLang.scrollIntoView({ behavior: "smooth" });
});

//HealthyWeight Functionallity
const container = document.querySelector(".hw__container");
const weight = document.querySelector(".hw__container__content--kg__input");
const height = document.querySelector(".hw__container__content--hg__input");
const btnResult = document.querySelector(".hw__container__content--btn");
const cstmError = document.querySelector(".hw__container__content--error");
const placeHolder = document.querySelector(
  ".hw__container__content--result-place"
);
const goodResult = document.querySelector(
  ".hw__container__content--result-good"
);
const badResult = document.querySelector(".hw__container__content--result-bad");
const bmiResult = document.querySelector(".hw__container__content--result-bmi");

btnResult.addEventListener("click", function () {
  if (weight.value <= 0 || height.value <= 0) {
    cstmError.classList.remove("hidden");
  } else if (container.classList.contains("metric")) {
    parseFloat(weight);
    parseFloat(height);

    let fixH = height.value * height.value;
    fixH.toFixed(2);
    let w = weight.value;

    let result = w / fixH;

    if (result >= 18.5 && result <= 24.9) {
      if (!badResult.classList.contains("hidden")) {
        badResult.classList.add("hidden");
        bmiResult.classList.add("hidden");
      }
      placeHolder.classList.add("hidden");
      goodResult.classList.remove("hidden");
      if (nav.classList.contains("en")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `YOUR BMI IS ${parseInt(result)}`;
      } else if (nav.classList.contains("es")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `TU IMC ES ${parseInt(result)}`;
      }
      bmiResult.classList.remove("hidden");
      cstmError.classList.add("hidden");
    } else if (result < 16) {
      if (!goodResult.classList.contains("hidden")) {
        goodResult.classList.add("hidden");
        bmiResult.classList.add("hidden");
      }
      placeHolder.classList.add("hidden");
      badResult.classList.remove("hidden");
      cstmError.classList.add("hidden");
      if (nav.classList.contains("en")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `YOUR BMI IS ${parseInt(
          result
        )} (SEVERE THINNESS)`;
      } else if (nav.classList.contains("es")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `TU IMC ES ${parseInt(result)} (DELGADEZ SEVERA)`;
      }
    } else if (result < 18.5) {
      if (!goodResult.classList.contains("hidden")) {
        goodResult.classList.add("hidden");
        bmiResult.classList.add("hidden");
      }
      placeHolder.classList.add("hidden");
      badResult.classList.remove("hidden");
      cstmError.classList.add("hidden");
      if (nav.classList.contains("en")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `YOUR BMI IS ${parseInt(result)} (THINNESS)`;
      } else if (nav.classList.contains("es")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `TU IMC ES ${parseInt(result)} (DELGADEZ)`;
      }
    } else if (result >= 25 && result < 30) {
      if (!goodResult.classList.contains("hidden")) {
        goodResult.classList.add("hidden");
        bmiResult.classList.add("hidden");
      }
      placeHolder.classList.add("hidden");
      badResult.classList.remove("hidden");
      cstmError.classList.add("hidden");
      if (nav.classList.contains("en")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `YOUR BMI IS ${parseInt(result)} (OVERWEIGHT)`;
      } else if (nav.classList.contains("es")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `TU IMC ES ${parseInt(result)} (SOBREPESO)`;
      }
    } else if (result >= 30 && result < 35) {
      if (!goodResult.classList.contains("hidden")) {
        goodResult.classList.add("hidden");
        bmiResult.classList.add("hidden");
      }
      placeHolder.classList.add("hidden");
      badResult.classList.remove("hidden");
      cstmError.classList.add("hidden");
      if (nav.classList.contains("en")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `YOUR BMI IS ${parseInt(
          result
        )} (SEVERE OVERWEIGHT)`;
      } else if (nav.classList.contains("es")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `TU IMC ES ${parseInt(
          result
        )} (SOBREPESO SEVERO)`;
      }
    } else if (result >= 35) {
      if (!goodResult.classList.contains("hidden")) {
        goodResult.classList.add("hidden");
        bmiResult.classList.add("hidden");
      }
      placeHolder.classList.add("hidden");
      badResult.classList.remove("hidden");
      cstmError.classList.add("hidden");
      if (nav.classList.contains("en")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `YOUR BMI IS ${parseInt(result)} (OBESITY)`;
      } else if (nav.classList.contains("es")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `TU IMC ES ${parseInt(result)} (OBESIDAD)`;
      }
    }
  } else if (container.classList.contains("imperial")) {
    parseFloat(weight);
    parseFloat(height);

    let mts = height.value / 3.281;
    let fixH = mts.toFixed(2) * mts.toFixed(2);
    fixH.toFixed(2);
    let kg = parseInt(weight.value / 2.205);
    console.log(kg, fixH);
    let result = kg / fixH;

    if (result >= 18.5 && result <= 24.9) {
      if (!badResult.classList.contains("hidden")) {
        badResult.classList.add("hidden");
        bmiResult.classList.add("hidden");
      }
      placeHolder.classList.add("hidden");
      goodResult.classList.remove("hidden");
      if (nav.classList.contains("en")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `YOUR BMI IS ${parseInt(result)}`;
      } else if (nav.classList.contains("es")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `TU IMC ES ${parseInt(result)}`;
      }
      bmiResult.classList.remove("hidden");
      cstmError.classList.add("hidden");
    } else if (result < 16) {
      if (!goodResult.classList.contains("hidden")) {
        goodResult.classList.add("hidden");
        bmiResult.classList.add("hidden");
      }
      placeHolder.classList.add("hidden");
      badResult.classList.remove("hidden");
      cstmError.classList.add("hidden");
      if (nav.classList.contains("en")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `YOUR BMI IS ${parseInt(
          result
        )} (SEVERE THINNESS)`;
      } else if (nav.classList.contains("es")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `TU IMC ES ${parseInt(result)} (DELGADEZ SEVERA)`;
      }
    } else if (result < 18.5) {
      if (!goodResult.classList.contains("hidden")) {
        goodResult.classList.add("hidden");
        bmiResult.classList.add("hidden");
      }
      placeHolder.classList.add("hidden");
      badResult.classList.remove("hidden");
      cstmError.classList.add("hidden");
      if (nav.classList.contains("en")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `YOUR BMI IS ${parseInt(result)} (THINNESS)`;
      } else if (nav.classList.contains("es")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `TU IMC ES ${parseInt(result)} (DELGADEZ)`;
      }
    } else if (result >= 25 && result < 30) {
      if (!goodResult.classList.contains("hidden")) {
        goodResult.classList.add("hidden");
        bmiResult.classList.add("hidden");
      }
      placeHolder.classList.add("hidden");
      badResult.classList.remove("hidden");
      cstmError.classList.add("hidden");
      if (nav.classList.contains("en")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `YOUR BMI IS ${parseInt(result)} (OVERWEIGHT)`;
      } else if (nav.classList.contains("es")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `TU IMC ES ${parseInt(result)} (SOBREPESO)`;
      }
    } else if (result >= 30 && result < 35) {
      if (!goodResult.classList.contains("hidden")) {
        goodResult.classList.add("hidden");
        bmiResult.classList.add("hidden");
      }
      placeHolder.classList.add("hidden");
      badResult.classList.remove("hidden");
      cstmError.classList.add("hidden");
      if (nav.classList.contains("en")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `YOUR BMI IS ${parseInt(
          result
        )} (SEVERE OVERWEIGHT)`;
      } else if (nav.classList.contains("es")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `TU IMC ES ${parseInt(
          result
        )} (SOBREPESO SEVERO)`;
      }
    } else if (result >= 35) {
      if (!goodResult.classList.contains("hidden")) {
        goodResult.classList.add("hidden");
        bmiResult.classList.add("hidden");
      }
      placeHolder.classList.add("hidden");
      badResult.classList.remove("hidden");
      cstmError.classList.add("hidden");
      if (nav.classList.contains("en")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `YOUR BMI IS ${parseInt(result)} (OBESITY)`;
      } else if (nav.classList.contains("es")) {
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = `TU IMC ES ${parseInt(result)} (OBESIDAD)`;
      }
    }
  }

  weight.value = "";
  height.value = "";
});

//Language Functionallity

const btnES = document.querySelector(".lang__container__content--btn_es");
const btnEN = document.querySelector(".lang__container__content--btn_en");
//Weight Calc Section
const hwHead = document.querySelector(".hw__container__content--header");
const hwWeight = document.querySelector(".hw__container__content--kg__text");
const hwHeight = document.querySelector(".hw__container__content--hg__text");
//BMI Section
const bmiHead = document.querySelector(".bmi__container__content--header");
const bmiInfo = document.querySelector(".bmi__container__content--info");
const bmiBtn = document.querySelector(".bmi__container__content--btn");
//Lang Section
const langTitle = document.querySelector(".lang__container__content--title");
const langHeader = document.querySelector(".lang__container__content--header");
const langInfo = document.querySelector(".lang__container__content--info");
const unitHeader = document.querySelector(
  ".lang__container__content--header-two"
);
const unitInfo = document.querySelector(".lang__container__content--info-two");
const mBtn = document.querySelector(".lang__container__content--btn_met");
const iBtn = document.querySelector(".lang__container__content--btn_imp");
//Footer section
const footText = document.querySelector(".footer__content--dev");

btnES.addEventListener("click", function () {
  if (nav.classList.contains("en")) {
    nav.classList.remove("en");
    nav.classList.add("es");
    goodResult.classList.add("hidden");
    badResult.classList.add("hidden");
    bmiResult.classList.add("hidden");
    navWeight.innerHTML = "MI PESO IDEAL";
    navLang.innerHTML = "Ajustes";
    navBMI.innerHTML = "EL IMC";
    hwHead.innerHTML = "El peso ideal";
    hwHeight.innerHTML = "Ingresa tu altura";
    hwWeight.innerHTML = "Ingresa tu peso";
    btnResult.innerHTML = "Ver resultados";
    cstmError.innerHTML = "Debes ingresar tu peso/altura";
    placeHolder.innerHTML = "El resultado se mostrara aqui";
    goodResult.innerHTML = "Tienes un peso ideal";
    badResult.innerHTML = "Tu peso no es saludable";
    bmiHead.innerHTML = "¿Como sabemos tu peso ideal?";
    bmiInfo.innerHTML =
      "Lo hacemos a través del IMC. Estos acrónimos significan índice de masa corporal. Gracias a ella podemos hacer una fórmula que nos diga la grasa corporal total y si una persona tiene un peso saludable. El exceso de grasa corporal está relacionado con un mayor riesgo de algunas enfermedades, incluidas las enfermedades cardíacas y algunos tipos de cáncer.";
    bmiBtn.innerHTML = "Ver mas";
    langTitle.innerHTML = "ajustes";
    langHeader.innerHTML = "¿Quieres cambiar el idioma?";
    langInfo.innerHTML = "Selecciona debajo el idioma a usar";
    unitHeader.innerHTML = "¿Quieres cambiar las unidades?";
    unitInfo.innerHTML = "Selecciona debajo la unidad a usar";
    mBtn.innerHTML = "metrico";
    footText.innerHTML = "Desarrollado por Goorezy";
  }
});

btnEN.addEventListener("click", function () {
  if (nav.classList.contains("es")) {
    nav.classList.remove("es");
    nav.classList.add("en");
    goodResult.classList.add("hidden");
    badResult.classList.add("hidden");
    bmiResult.classList.add("hidden");
    navWeight.innerHTML = "My healthy Weight";
    navLang.innerHTML = "Settings";
    navBMI.innerHTML = "The bmi";
    hwHead.innerHTML = "Healthy weight";
    hwHeight.innerHTML = "Enter your height";
    hwWeight.innerHTML = "Enter your weight";
    btnResult.innerHTML = "show results";
    cstmError.innerHTML = "You must enter your height/weight";
    placeHolder.innerHTML = "The results will be displayed here";
    goodResult.innerHTML = "Your weight is healthy";
    badResult.innerHTML = "Your weight is not healthy";
    bmiHead.innerHTML = "We know your ideal weight";
    bmiInfo.innerHTML =
      "We do it through the BMI. These acronyms stand for body mass index. Thanks to it we can make a formula that tells us the total body fat and if a person has a healthy weight. Excess body fat is linked to an increased risk of some diseases, including heart disease and some types of cancer.";
    bmiBtn.innerHTML = "Learn more here";
    langTitle.innerHTML = "Settings";
    langHeader.innerHTML = "change the language";
    langInfo.innerHTML = "Select down here the language.";
    unitHeader.innerHTML = "change the units";
    unitInfo.innerHTML = "Select down here the units .";
    mBtn.innerHTML = "metric";
    footText.innerHTML = "Developed by Goorezy";
  }
});

mBtn.addEventListener("click", function () {
  container.classList.remove("imperial");
  container.classList.add("metric");
  weight.value = "";
  weight.placeholder = "KG";
  height.value = "";
  height.placeholder = "M";
  goodResult.classList.add("hidden");
  badResult.classList.add("hidden");
  bmiResult.classList.add("hidden");
  placeHolder.classList.remove("hidden");
});

iBtn.addEventListener("click", function () {
  container.classList.remove("metric");
  container.classList.add("imperial");
  weight.value = "";
  weight.placeholder = "LB";
  height.value = "";
  height.placeholder = "FT";
  goodResult.classList.add("hidden");
  badResult.classList.add("hidden");
  bmiResult.classList.add("hidden");
  placeHolder.classList.remove("hidden");
});

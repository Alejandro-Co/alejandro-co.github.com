//identify for innertext change
const dropdow = document.getElementById("myDropdown");

const h2_1 = document.querySelector(".main__title");

const paragraph_1 = document.querySelector(".main__paragraph");

const h3_1 = document.getElementById("h3title1");

const p2 = document.getElementById("p2");

const h3_2 = document.getElementById("h3title2");

const p3 = document.getElementById("p3");

const paragraph_1esp =
  "Creamos una ferula pensada en las situaciones del dia a dia. Buscamos que una persona que sufra sindrome del tunel carpiano, realice sus actividades con la mayor naturalidad posible. La ferula está diseñada pensando en la ergonomia, ofreciendo libertad a la mano de hacer cualquier movimiento u actividad.";

const h2_2esp = "Uso en el hogar";

const h3_21esp = "Utilidad";

const paragraph_21esp = "Te permite realizar actividades del dia a dia.";

const h3_22esp = "Comodidad";

const paragraph_22esp =
  "Su material Flexible facilita las actividades que realices.";

const h2_3esp = "Uso en la oficina";

const h3_31esp = "Comodidad para trabajar";

const paragraph_31esp =
  "Permite descansar el brazo sin generar presion en la muñeca.";

const h3_32esp = "Apariencia llamativa";

const paragraph_32esp = "Su diseño y estetica resalta en tu lugar de trabajo.";

const h2_4esp = "Para descansar";

const h3_41esp = "Dormir sin presión";

const paragraph_41esp =
  "Te permite descansar comodamente sin generar presión, lo puedes usar toda la noche.";

const h3_42esp = "Durabilidad";

const paragraph_42esp =
  "El desgaste de los materiales es minimo dado su composición en TPU.";

/////////////////////////////////////////////

const paragraph_1eng =
  "We created a splint designed for everyday situations. We aim for individuals suffering from carpal tunnel syndrome to carry out their activities as naturally as possible. The splint is designed with ergonomics in mind, providing freedom for the hand to make any movement or activity.";

const h2_2eng = "Home Use";

const h3_21eng = "Utility";

const paragraph_21eng = "Allows you to perform everyday activities.";

const h3_22eng = "Comfort";

const paragraph_22eng =
  "Its flexible material facilitates the activities you engage in.";

const h2_3eng = "Office Use";

const h3_31eng = "Comfortable for work";

const paragraph_31eng =
  "Allows resting the arm without creating pressure on the wrist.";

const h3_32eng = "Striking Appearance";

const paragraph_32eng =
  "Its design and aesthetics stand out in your workplace.";

const h2_4eng = "For Resting";

const h3_41eng = "Sleeping without pressure";

const paragraph_41eng =
  "Allows you to rest comfortably without generating pressure; you can use it all night.";

const h3_42eng = "Durability";

const paragraph_42eng = "Minimal material wear due to its TPU composition.";

// Just identifying for responsive language dropdown menu

let drop = document.querySelector(".dropdown");

const dropbtn = document.querySelector(".dropbtn");

let right_border = drop.getBoundingClientRect().right;

let left_border = drop.getBoundingClientRect().left;

let screen_width = screen.width;

let resta_right = screen_width - right_border;

const dropddown_c = document.querySelector(".dropdown-content");

resta_right = `${resta_right}px`;

let resta_left = screen_width - left_border;

resta_left = `${resta_left}px`;

if (screen_width < 768) {
  dropddown_c.style.right = resta_right;
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//We start with the script for the menu display

const menucontain = document.querySelector(".main__nav");

const container = document.querySelector(".container");

const hamburguer = document.querySelector(".main__hamburguer");

const close = document.querySelector(".main__close");

const logo = document.querySelector(".main__logo");

const list = document.querySelector(".main__menu");

const bodyfilter = document.querySelector(".body__filter");

let styles = getComputedStyle(container);

let height = styles.height;

const strin0 = "block";

const strin1 = "translateY(0)";

const strin1_5 = "translateY(-100%)";

const strin2 = "none";

const strin3 = "flex";

const translate = "translateY(0%)";

const translate2 = "translateY(-500%)";

menucontain.style.setProperty("--navAfterHeight", height);

hamburguer.addEventListener("click", function () {
  menucontain.style.setProperty("--navdisplay", strin0);

  setTimeout(() => {
    hamburguer.style.display = strin2;

    logo.style.display = strin2;

    drop.style.display = strin2;
  }, 10);

  setTimeout(() => {
    list.style.display = strin3;

    close.style.display = strin0;
  }, 11);

  setTimeout(() => {
    menucontain.style.setProperty("--navAftert", strin1);

    bodyfilter.style.height = "100vh";

    list.style.transform = translate;

    close.style.transform = translate;

    bodyfilter.style.opacity = 1;
  }, 150);
});

close.addEventListener("click", Close);

const l1 = document.getElementById("link1");

l1.addEventListener("click", Close);

function Close() {
  menucontain.style.setProperty("--navdisplay", strin2);

  setTimeout(() => {
    hamburguer.style.display = strin0;

    logo.style.display = strin0;

    drop.style.display = strin0;
  }, 320);

  setTimeout(() => {
    list.style.display = strin2;

    close.style.display = strin2;
  }, 300);

  setTimeout(() => {
    menucontain.style.setProperty("--navAftert", strin1_5);

    bodyfilter.style.height = "0vh";

    list.style.transform = translate2;

    close.style.transform = translate2;

    bodyfilter.style.opacity = 0;
  }, 150);
}

bodyfilter.addEventListener("click", Close);

//Navigation Throught Hero Images

const left = document.querySelector("#left");
const right = document.querySelector("#right");

const images = [
  'url("../images/fER1.jpg")',
  'url("../images/COOK.jpg")',
  'url("../images/OFICE2.jpg")',
  'url("../images/DESCANSO.jpg")',
];

const hero = document.querySelector(".main__hero");

let counter = 0;

const func_2 = function event2() {
  const h2_1 = document.querySelector(".main__title");

  const paragraph_1 = document.querySelector(".main__paragraph");

  const h3_1 = document.getElementById("h3title1");

  const p2 = document.getElementById("p2");

  const h3_2 = document.getElementById("h3title2");

  const p3 = document.getElementById("p3");
  const esp = document.getElementById("Esp");
  let obj1 = esp.getAttribute("data-value");
  const eng = document.getElementById("Eng");
  let obj2 = eng.getAttribute("data-value");
  counter--;

  if (counter == 0) {
    left.removeEventListener("click", func_2);
    left.style.opacity = 0.5;
    hero.style.backgroundImage = images[0];
    paragraph_1.style.display = "block";
    h3_1.style.display = "none";
    h3_2.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";

    if (obj1 == "active") {
      h2_1.innerText = "Vertebral";
      paragraph_1.innerHTML = paragraph_1esp;
    } else if (obj2 == "active") {
      h2_1.innerText = "Vertebral";
      paragraph_1.innerHTML = paragraph_1eng;
    }
  } else if (counter == 1) {
    hero.style.backgroundImage = images[1];

    paragraph_1.style.display = "none";

    h3_1.style.display = "block";
    h3_2.style.display = "block";
    p2.style.display = "block";
    p3.style.display = "block";
    h3_1.style.opacity = 1;
    h3_2.style.opacity = 1;
    p2.style.opacity = 1;
    p3.style.opacity = 1;

    if (obj1 == "active") {
      h2_1.innerText = h2_2esp;
      h3_1.innerHTML = h3_21esp;
      h3_2.innerText = h3_22esp;
      p2.innerText = paragraph_21esp;
      p3.innerText = paragraph_22esp;
    } else if (obj2 == "active") {
      h2_1.innerText = h2_2eng;
      h3_1.innerHTML = h3_21eng;
      h3_2.innerText = h3_22eng;
      p2.innerText = paragraph_21eng;
      p3.innerText = paragraph_22eng;
    }
  } else if (counter == 2) {
    hero.style.backgroundImage = images[2];

    if (obj1 == "active") {
      h2_1.innerText = h2_3esp;
      h3_1.innerHTML = h3_31esp;
      h3_2.innerText = h3_32esp;
      p2.innerText = paragraph_31esp;
      p3.innerText = paragraph_32esp;
    } else if (obj2 == "active") {
      h2_1.innerText = h2_3eng;
      h3_1.innerHTML = h3_31eng;
      h3_2.innerText = h3_32eng;
      p2.innerText = paragraph_31eng;
      p3.innerText = paragraph_32eng;
    }
  } else if (counter == 3) {
    hero.style.backgroundImage = images[3];

    if (obj1 == "active") {
      h2_1.innerText = h2_4esp;
      h3_1.innerHTML = h3_41esp;
      h3_2.innerText = h3_42esp;
      p2.innerText = paragraph_41esp;
      p3.innerText = paragraph_42esp;
    } else if (obj2 == "active") {
      h2_1.innerText = h2_4eng;
      h3_1.innerHTML = h3_41eng;
      h3_2.innerText = h3_42eng;
      p2.innerText = paragraph_41eng;
      p3.innerText = paragraph_42eng;
    }
  }

  if (counter > 0 && counter < 3) {
    right.style.opacity = 1;
  }

  if (counter < 3) {
    right.addEventListener("click", func_1);
  }

  console.log(counter);
  return counter;
};

const func_1 = function evento() {
  const h2_1 = document.querySelector(".main__title");

  const paragraph_1 = document.querySelector(".main__paragraph");

  const h3_1 = document.getElementById("h3title1");

  const p2 = document.getElementById("p2");

  const h3_2 = document.getElementById("h3title2");

  const p3 = document.getElementById("p3");
  const esp = document.getElementById("Esp");
  let obj1 = esp.getAttribute("data-value");
  const eng = document.getElementById("Eng");
  let obj2 = eng.getAttribute("data-value");
  counter++;

  if (counter == 0) {
    hero.style.backgroundImage = images[0];
    paragraph_1.style.display = "block";
    h3_1.style.display = "none";
    h3_2.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";

    if (obj1 == "active") {
      h2_1.innerText = "Vertebral";
      paragraph_1.innerHTML = paragraph_1esp;
    } else if (obj2 == "active") {
      paragraph_1.innerHTML = paragraph_1eng;
    }
  } else if (counter == 1) {
    hero.style.backgroundImage = images[1];
    paragraph_1.style.display = "none";

    h3_1.style.display = "block";
    h3_2.style.display = "block";
    p2.style.display = "block";
    p3.style.display = "block";
    h3_1.style.opacity = 1;
    h3_2.style.opacity = 1;
    p2.style.opacity = 1;
    p3.style.opacity = 1;

    if (obj1 == "active") {
      h2_1.innerText = h2_2esp;
      h3_1.innerHTML = h3_21esp;
      h3_2.innerText = h3_22esp;
      p2.innerText = paragraph_21esp;
      p3.innerText = paragraph_22esp;
    } else if (obj2 == "active") {
      h2_1.innerText = h2_2eng;
      h3_1.innerHTML = h3_21eng;
      h3_2.innerText = h3_22eng;
      p2.innerText = paragraph_21eng;
      p3.innerText = paragraph_22eng;
    }
  } else if (counter == 2) {
    hero.style.backgroundImage = images[2];
    if (obj1 == "active") {
      h2_1.innerText = h2_3esp;
      h3_1.innerHTML = h3_31esp;
      h3_2.innerText = h3_32esp;
      p2.innerText = paragraph_31esp;
      p3.innerText = paragraph_32esp;
    } else if (obj2 == "active") {
      h2_1.innerText = h2_3eng;
      h3_1.innerHTML = h3_31eng;
      h3_2.innerText = h3_32eng;
      p2.innerText = paragraph_31eng;
      p3.innerText = paragraph_32eng;
    }
  } else if (counter == 3) {
    right.removeEventListener("click", func_1);
    right.style.opacity = 0.5;
    hero.style.backgroundImage = images[3];
    if (obj1 == "active") {
      h2_1.innerText = h2_4esp;
      h3_1.innerHTML = h3_41esp;
      h3_2.innerText = h3_42esp;
      p2.innerText = paragraph_41esp;
      p3.innerText = paragraph_42esp;
    } else if (obj2 == "active") {
      h2_1.innerText = h2_4eng;
      h3_1.innerHTML = h3_41eng;
      h3_2.innerText = h3_42eng;
      p2.innerText = paragraph_41eng;
      p3.innerText = paragraph_42eng;
    }
  }

  if (counter > 0 && counter < 3) {
    left.style.opacity = 1;
  }

  if (counter > 0) {
    left.addEventListener("click", func_2);
  }

  console.log(counter);
  return counter;
};

right.addEventListener("click", func_1);

left.addEventListener("click", func_2);

//Adjust nav arrows

const main_controls = document.querySelector(".main__controls");

let main__stylesC = getComputedStyle(main_controls);

const main__hero = document.querySelector(".main__hero");

let main__styles = getComputedStyle(main__hero);

let hero_width = main__styles.width;
let hero_height = main__styles.height;

let main_controlsright = main__stylesC.width;

let main_controlstop = main__stylesC.height;

//console.log(main_controlsright);
//console.log(main_controlstop);

if (String(hero_width).length == 5) {
  hero_width = hero_width.slice(0, 3);
} else if (String(hero_width).length == 6) {
  hero_width = hero_width.slice(0, 4);
} else if (String(hero_width).length == 7) {
  hero_width = hero_width.slice(0, 5);
} else if (String(hero_width).length == 8) {
  hero_width = hero_width.slice(0, 6);
} else if (String(hero_width).length == 9) {
  hero_width = hero_width.slice(0, 7);
}

if (String(hero_height).length == 5) {
  hero_height = hero_height.slice(0, 3);
} else if (String(hero_height).length == 6) {
  hero_height = hero_height.slice(0, 4);
} else if (String(hero_height).length == 7) {
  hero_height = hero_height.slice(0, 5);
} else if (String(hero_height).length == 8) {
  hero_height = hero_height.slice(0, 6);
} else if (String(hero_height).length == 9) {
  hero_height = hero_height.slice(0, 7);
}

if (String(main_controlsright).length == 4) {
  main_controlsright = main_controlsright.slice(0, 2);
} else if (String(main_controlsright).length == 5) {
  main_controlsright = main_controlsright.slice(0, 3);
}

if (String(main_controlstop).length == 4) {
  main_controlstop = main_controlstop.slice(0, 2);
} else if (String(main_controlstop).length == 5) {
  main_controlstop = main_controlstop.slice(0, 3);
}

let main_restaw = hero_width - main_controlsright;
let main_restah = hero_height - main_controlstop;

console.log(hero_width);
console.log(hero_height);

console.log(main_restaw);
console.log(main_restah);

main_restaw = `${main_restaw}px`;
main_restah = `${main_restah}px`;

if (screen_width < 768) {
  main_controls.style.left = main_restaw;
  main_controls.style.top = main_restah;
} else {
  main_controls.style.left = `${hero_width}px`;
  main_controls.style.top = main_restah;
}

//We state the language change for every ocassion

const link1 = document.getElementById("link1");

const link2 = document.getElementById("link2");

const link3 = document.getElementById("link3");

const know = document.querySelector(".main__cta");

const attr = document.querySelector(".attribution");

const features = document.getElementById("features");

const title2 = document.getElementById("main__title2");

const str1 =
  "-Material en TPU.<br /> -Adaptación ergonomica y universal al tamaño de la mano.<br /> -Reducción del movimiento sin bloqueo total de la mano.<br /> -Pensado sobre todo para actividades en interiores.<br /> -Pensado para prevenir sintomas y reducir la probabilidad de cirugia de tunel carpiano.<br /> -Diseño abierto para permitir mejor circulación.";

const str2 =
  "-TPU material.<br /> -Ergonomic and universal adaptation to hand size.<br /> -Reduced movement without complete hand blockage.<br /> -Primarily designed for indoor activities.<br /> -Intended to prevent symptoms and reduce the likelihood of carpal tunnel surgery.<br /> -Open design for improved circulation.<br />";

dropdow.addEventListener("click", function (e) {
  const esp = document.getElementById("Esp");
  let obj1 = esp.getAttribute("data-value");
  const eng = document.getElementById("Eng");
  let obj2 = eng.getAttribute("data-value");

  e.preventDefault();

  if (e.target.id != dropdow.id) {
    console.log(e.target.id);

    if (e.target.id == "Esp" && obj1 == "inactive") {
      esp.setAttribute("data-value", "active");
      eng.setAttribute("data-value", "inactive");
      dropbtn.innerText = "Leng";

      link1.innerText = "Principal";
      link2.innerText = "Proceso";
      link3.innerText = "Nosotros";
      know.innerHTML =
        "Saber más" +
        '<img src="images/icon-arrow.svg" alt="arrow" class="main__arrow">';

      attr.innerHTML =
        "Desarrollado por" +
        '<a href="https://www.linkedin.com/in/diego-alejandro-tamayo-celis-8bb168117/">Alejandro Tamayo</a>';
      title2.innerText = "Caracteristicas";
      features.innerHTML = str1;

      if (h2_1.innerText == "Vertebral") {
        h2_1.innerText = "Vertebral";
        paragraph_1.innerHTML = paragraph_1esp;
      } else if (h2_1.innerText == h2_2eng) {
        h2_1.innerText = h2_2esp;
        h3_1.innerHTML = h3_21esp;
        h3_2.innerText = h3_22esp;
        p2.innerText = paragraph_21esp;
        p3.innerText = paragraph_22esp;
      } else if (h2_1.innerText == h2_3eng) {
        h2_1.innerText = h2_3esp;
        h3_1.innerHTML = h3_31esp;
        h3_2.innerText = h3_32esp;
        p2.innerText = paragraph_31esp;
        p3.innerText = paragraph_32esp;
      } else if (h2_1.innerText == h2_4eng) {
        h2_1.innerText = h2_4esp;
        h3_1.innerHTML = h3_41esp;
        h3_2.innerText = h3_42esp;
        p2.innerText = paragraph_41esp;
        p3.innerText = paragraph_42esp;
      }
    } else if (e.target.id == "Eng" && obj2 == "inactive") {
      eng.setAttribute("data-value", "active");
      esp.setAttribute("data-value", "inactive");
      dropbtn.innerText = "Lang";
      link1.innerText = "Main Page";
      link2.innerText = "Process";
      link3.innerText = "About us";
      know.innerHTML =
        "Learn More" +
        '<img src="images/icon-arrow.svg" alt="arrow" class="main__arrow">';

      attr.innerHTML =
        "Developed by" +
        '<a href="https://www.linkedin.com/in/diego-alejandro-tamayo-celis-8bb168117/">Alejandro Tamayo</a>';
      title2.innerText = "Features";
      features.innerHTML = str2;

      if (h2_1.innerText == "Vertebral") {
        h2_1.innerText = "Vertebral";
        paragraph_1.innerHTML = paragraph_1eng;
      } else if (h2_1.innerText == h2_2esp) {
        h2_1.innerText = h2_2eng;
        h3_1.innerHTML = h3_21eng;
        h3_2.innerText = h3_22eng;
        p2.innerText = paragraph_21eng;
        p3.innerText = paragraph_22eng;
      } else if (h2_1.innerText == h2_3esp) {
        h2_1.innerText = h2_3eng;
        h3_1.innerHTML = h3_31eng;
        h3_2.innerText = h3_32eng;
        p2.innerText = paragraph_31eng;
        p3.innerText = paragraph_32eng;
      } else if (h2_1.innerText == h2_4esp) {
        h2_1.innerText = h2_4eng;
        h3_1.innerHTML = h3_41eng;
        h3_2.innerText = h3_42eng;
        p2.innerText = paragraph_41eng;
        p3.innerText = paragraph_42eng;
      }
    }
  }
});

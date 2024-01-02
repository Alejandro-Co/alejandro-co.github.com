//iDENTIFYING FOR INNERTEXT CHANGE

const about_eng =
  "We are a brand dedicated to acknowledging individuals with physical difficulties, grip issues, and hand strength challenges. <br /><br /> Our focus is on promoting freedom, a sense of control, and naturalness in everyday life. <br /><br /> Products that are not just for the user but become a part of them.";

const team_eng = "The Team";

const AleDesc_eng =
  "I participated in the research of various hand-related conditions, collaborating with affected individuals to identify the pathology to address. Additionally, I managed the prototyping process and analyzed design iterations for the splint. I created the final prototype in Rhinoceros 3D and designed and developed the website you are currently navigating.";

const JonDesc_eng =
  "I researched carpal tunnel syndrome through the review of clinical studies, interaction with affected individuals, and consultation with specialists. I contributed to the conceptualization of an ergonomic splint for the treatment of this condition and oversaw the printing process of the design in TPU.";

const about_esp =
  "Somos una marca entregada a reconocer a las personas con dificultades fisicas, de agarre y fuerza en la mano. <br /><br /> Nos enfocamos en promover libertad, sensacion de control y naturalidad en el cotidiano. <br /><br /> Productos que no sean para el usuario, sean parte de él.";

const team_esp = "El equipo";

const AleDesc_esp =
  "Participé en la investigación de diversas enfermedades en las manos, colaborando con personas afectadas para identificar la patología a abordar. Además, me encargué del proceso de prototipado y análisis de las iteraciones de diseño para la férula. Realicé el prototipo final en Rhinoceros 3D y diseñé y desarrollé la página web que estás navegando actualmente.";

const JonDesc_esp =
  "Investigué la patología del túnel carpiano mediante la revisión de estudios clínicos, la interacción con personas afectadas y la consulta a especialistas. Contribuí en la conceptualización de una férula ergonómica para el tratamiento de esta afección y me encargué del proceso de impresión del diseño en TPU.";

const about = document.getElementById("ctct");

const team = document.getElementById("team");

const ale = document.getElementById("Ale_desc");

const jon = document.getElementById("Jon_desc");

//Defining the script for the dropdown menu

let screen_width = screen.width;

let drop = document.querySelector(".dropdown");

const dropbtn = document.querySelector(".dropbtn");

let right_border = drop.getBoundingClientRect().right;

let left_border = drop.getBoundingClientRect().left;

let resta_right = screen_width - right_border;

const dropddown_c = document.querySelector(".dropdown-content");

resta_right = `${resta_right}px`;

let resta_left = screen_width - left_border;

resta_left = `${resta_left}px`;

if (screen_width < 1280) {
  dropddown_c.style.right = resta_right;
}
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

const l3 = document.getElementById("link3");

l3.addEventListener("click", Close);

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

const dropdow = document.getElementById("myDropdown");

const link1 = document.getElementById("link1");

const link2 = document.getElementById("link2");

const link3 = document.getElementById("link3");

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

      about.innerHTML = about_esp;
      team.innerText = team_esp;
      ale.innerText = AleDesc_esp;
      jon.innerText = JonDesc_esp;
    } else if (e.target.id == "Eng" && obj2 == "inactive") {
      eng.setAttribute("data-value", "active");
      esp.setAttribute("data-value", "inactive");
      dropbtn.innerText = "Lang";
      link1.innerText = "Main Page";
      link2.innerText = "Process";
      link3.innerText = "About us";

      about.innerHTML = about_eng;
      team.innerText = team_eng;
      ale.innerText = AleDesc_eng;
      jon.innerText = JonDesc_eng;
    }
  }
});

//prototipe hover

let screen_width = screen.width;

let screen_height = screen.height;

const parent = document.querySelector(".main__about17");

const first = document.getElementById("bi1");

const second = document.getElementById("bi2");

const third = document.getElementById("bi3");

if (screen_width > 768) {
  function restart() {
    parent.style.gridTemplateRows = "1fr 1fr 1fr";
  }

  function change_parent1() {
    parent.style.gridTemplateRows = "5fr 1fr 1fr";
  }

  function change_parent2() {
    parent.style.gridTemplateRows = "1fr 5fr 1fr";
  }

  function change_parent3() {
    parent.style.gridTemplateRows = "1fr 1fr 5fr";
  }

  first.addEventListener("mouseover", change_parent1);

  first.addEventListener("mouseout", restart);

  second.addEventListener("mouseover", change_parent2);

  second.addEventListener("mouseout", restart);

  third.addEventListener("mouseover", change_parent3);

  third.addEventListener("mouseout", restart);
}

console.log(screen_height);

//Identifying for innwertext change

const proy_title_eng = "Project";

const proy_cont_eng =
  "This project is an assignment for the affective technologies course. As a design team, we aim to promote the development of positive human emotions through innovative proposals that use technology to enhance the quality of life and well-being of individuals.<br /> <br />The design focuses on intentionally and meaningfully enriching emotional experiences. We concentrate on two types of pleasure: physio-pleasure, related to sensory enjoyment, and psycho-pleasure, derived from cognitive and emotional relationships.";

const prob_title_eng = "Issue";

const prob_cont_eng =
  "Understanding the existing types of pleasure and how to generate well-being, we decided to address physical limitations, specifically reduced mobility in the hands. This limitation may manifest as issues with strength or movement in the limb.";

const obj_title_eng = "Objective";

const obj_cont_eng =
  "We want individuals with reduced hand mobility to regain a sense of independence and confidence in carrying out daily activities. Additionally, we aspire to ensure that these individuals do not perceive their limitation as something emotionally affecting, aiming for our solution to be actively utilized.";

const inv_title_eng = "Research";

const inv_cont_eng =
  "We consulted with various orthopedic surgeons and physiotherapists, who affirmed that physical limitations in the hands are more common than one might think, but all have treatment and solutions. For this reason, we chose to address carpal tunnel syndrome, which affects a broad range of ages and people.";

const find_title_eng = "Findings";

const find_cont1_eng = "Immobilization is different from limiting movement.";

const find_cont2_eng = "There may be a maximum range of movement of 30°.";

const find_cont3_eng =
  "We aim for a certain restriction in wrist flexion and freedom in wrist extension.";

const proto_title_eng = "Prototypes";

const proto_cont1_eng = "Initial sketches: Ideation processes.";

const proto_cont2_eng =
  "Single-piece prototype: Material search, plastic deformation.";

const proto_cont3_eng = "Final prototype: 3D Render and printing in TPU.";

const prod_title_eng = "Product";

const prod_cont_eng =
  "We sought various aesthetic and functional references to create a splint prototype, drawing inspiration from the movement of the human spine, where there is a certain degree of freedom depending on the motion. Regarding aesthetics, it is purely a matter of personal preference. In this case, a whale tail is incorporated to appeal to a specific audience, all without compromising comfort or functionality.";

/////////

const proy_title_esp = "Proyecto";

const proy_cont_esp =
  "Este proyecto es un encargo para la materia de tecnologías afectivas. Como equipo de diseño, buscamos fomentar el desarrollo de emociones humanas positivas mediante propuestas innovadoras que utilicen tecnología para mejorar la calidad de vida y el bienestar de las personas. <br />  <br /> Este diseño tiene como objetivo enriquecer las experiencias emocionales de manera intencionada y significativa. Nos centramos en dos tipos de placer: el fisio-placer, relacionado con el disfrute a través de los sentidos, y el psico-placer, que surge de relaciones cognitivas y emocionales.";

const prob_title_esp = "Problemática";

const prob_cont_esp =
  "Al comprender los tipos de placer existentes y cómo generar bienestar, decidimos abordar la limitación física, específicamente la movilidad reducida en las manos. Esta limitación puede manifestarse como problemas de fuerza o movimiento en la extremidad.";

const obj_title_esp = "Objetivo";

const obj_cont_esp =
  "Queremos que las personas con movilidad reducida en las manos recuperen un sentido de independencia y seguridad para realizar las actividades diarias. Además, aspiramos a que estas personas no perciban su limitación como algo que afecte emocionalmente, por lo que buscamos que nuestra solución se utilice de manera activa.";

const inv_title_esp = "Investigación";

const inv_cont_esp =
  "Consultamos con diversos traumatólogos y fisioterapeutas, quienes afirmaron que las limitaciones físicas en las manos son más comunes de lo que se piensa, pero todas tienen tratamiento y solución. Por esta razón, optamos por abordar el síndrome del túnel carpiano, que afecta a un amplio rango de edades y personas.";

const find_title_esp = "Hallazgos";

const find_cont1_esp = "Inmovilizar es diferente a limitar el movimiento.";

const find_cont2_esp = "Puede haber un rango máximo de movimiento de 30°.";

const find_cont3_esp =
  "Se busca cierta restricción en la flexión de la muñeca y libertad en la extensión de la muñeca.";

const proto_title_esp = "Prototipos";

const proto_cont1_esp = "Primeros bocetos: Procesos de ideación.";

const proto_cont2_esp =
  "Prototipo de una sola pieza: Búsqueda de materiales, deformación de plástico.";

const proto_cont3_esp = "Prototipo final: Render 3D e Impresión en TPU.";

const prod_title_esp = "Producto";

const prod_cont_esp =
  "Buscamos diferentes referentes tanto estéticos como funcionales para crear un prototipo de férula, basándonos en el movimiento de la columna humana, donde existe cierto grado de libertad según el movimiento. En cuanto a lo estético, es puramente preferencia personal. En este caso, se puede observar una cola de ballena que genera atractivo hacia un público específico, sin sacrificar comodidad ni funcionalidad.";

//we document search for the variables of innertext functions

const proy_title = document.getElementById("Proy");

const proy_cont = document.getElementById("Proyekt");

const prob_title = document.getElementById("Problematiic");

const prob_cont = document.getElementById("Problem");

const obj_title = document.getElementById("obj");

const obj_cont = document.getElementById("objective");

const inv_title = document.getElementById("inv");

const inv_cont = document.getElementById("investigation");

const find_title = document.getElementById("fin");

const find_cont1 = document.getElementById("fin1");

const find_cont2 = document.getElementById("fin2");

const find_cont3 = document.getElementById("fin3");

const proto_title = document.querySelectorAll(".main__gallerydiv-text");

const proto_cont1 = document.getElementById("17-1-title");

const proto_cont2 = document.getElementById("17-2-title");

const proto_cont3 = document.getElementById("17-3-title");

const prod_title = document.getElementById("prod");

const prod_cont = document.getElementById("produkt");

//Defining the script for the dropdown menu

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

const l2 = document.getElementById("link2");

l2.addEventListener("click", Close);

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

link2.addEventListener("click", Close);

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

      proy_title.innerText = proy_title_esp;
      proy_cont.innerHTML = proy_cont_esp;
      prob_title.innerText = prob_title_esp;
      prob_cont.innerText = prob_cont_esp;
      obj_title.innerText = obj_title_esp;
      obj_cont.innerText = obj_cont_esp;
      inv_title.innerText = inv_title_esp;
      inv_cont.innerText = inv_cont_esp;
      find_title.innerText = find_title_esp;
      find_cont1.innerText = find_cont1_esp;
      find_cont2.innerText = find_cont2_esp;
      find_cont3.innerText = find_cont3_esp;
      proto_title.forEach(function (e) {
        e.innerText = proto_title_esp;
      });
      proto_cont1.innerText = proto_cont1_esp;
      proto_cont2.innerText = proto_cont2_esp;
      proto_cont3.innerText = proto_cont3_esp;
      prod_title.innerText = prod_title_esp;
      prod_cont.innerText = prod_cont_esp;
    } else if (e.target.id == "Eng" && obj2 == "inactive") {
      eng.setAttribute("data-value", "active");
      esp.setAttribute("data-value", "inactive");
      dropbtn.innerText = "Lang";
      link1.innerText = "Main Page";
      link2.innerText = "Process";
      link3.innerText = "About us";

      proy_title.innerText = proy_title_eng;
      proy_cont.innerHTML = proy_cont_eng;
      prob_title.innerText = prob_title_eng;
      prob_cont.innerText = prob_cont_eng;
      obj_title.innerText = obj_title_eng;
      obj_cont.innerText = obj_cont_eng;
      inv_title.innerText = inv_title_eng;
      inv_cont.innerText = inv_cont_eng;
      find_title.innerText = find_title_eng;
      find_cont1.innerText = find_cont1_eng;
      find_cont2.innerText = find_cont2_eng;
      find_cont3.innerText = find_cont3_eng;
      proto_title.forEach(function (e) {
        e.innerText = proto_title_eng;
      });
      proto_cont1.innerText = proto_cont1_eng;
      proto_cont2.innerText = proto_cont2_eng;
      proto_cont3.innerText = proto_cont3_eng;
      prod_title.innerText = prod_title_eng;
      prod_cont.innerText = prod_cont_eng;
    }
  }
});

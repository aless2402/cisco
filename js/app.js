/* ==========================
   MODAL FOTO REFERENCIAL
========================== */

const modal =
document.getElementById("photoModal");

const openBtn =
document.getElementById("openPhoto");

const closeBtn =
document.querySelector(".close-modal");

if(openBtn){

openBtn.addEventListener("click", () => {

modal.style.display = "block";

document.body.style.overflow = "hidden";

});

}

if(closeBtn){

closeBtn.addEventListener("click", () => {

modal.style.display = "none";

document.body.style.overflow = "auto";

});

}

window.addEventListener("click", (e) => {

if(e.target === modal){

modal.style.display = "none";

document.body.style.overflow = "auto";

}

});

/* ==========================
   ESC PARA CERRAR MODAL
========================== */

document.addEventListener("keydown", (e) => {

if(e.key === "Escape"){

modal.style.display = "none";

document.body.style.overflow = "auto";

}

});

/* ==========================
   MENU MOBILE
========================== */

const mobileBtn =
document.querySelector(".mobile-btn");

const navMenu =
document.querySelector(".nav-menu");

if(mobileBtn){

mobileBtn.addEventListener("click", () => {

navMenu.classList.toggle("mobile-active");

mobileBtn.classList.toggle("active");

});

}

/* ==========================
   DROPDOWN MARCAS MOBILE
========================== */

const dropdownBtn =
document.querySelector(".dropdown-btn");

const navDropdown =
document.querySelector(".nav-dropdown");

if(dropdownBtn){

dropdownBtn.addEventListener("click", (e) => {

if(window.innerWidth <= 991){

e.preventDefault();

navDropdown.classList.toggle("active");

}

});

}

/* ==========================
   NAVBAR SHADOW SCROLL
========================== */

window.addEventListener("scroll", () => {

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 30){

navbar.classList.add("navbar-scrolled");

}else{

navbar.classList.remove("navbar-scrolled");

}

});

/* ==========================
   ANIMACION BOTONES
========================== */

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(btn => {

btn.addEventListener("mouseenter", () => {

btn.style.transform =
"translateY(-3px)";

});

btn.addEventListener("mouseleave", () => {

btn.style.transform =
"translateY(0px)";

});

});

/* ==========================
   ANIMACION PRODUCT CARD
========================== */

const productImage =
document.querySelector(".product-image");

if(productImage){

productImage.addEventListener("mousemove", (e) => {

const rect =
productImage.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const centerX =
rect.width / 2;

const centerY =
rect.height / 2;

const rotateX =
((y - centerY) / 30) * -1;

const rotateY =
((x - centerX) / 30);

productImage.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.02)`;

});

productImage.addEventListener("mouseleave", () => {

productImage.style.transform =
"perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

});

}

/* ==========================
   SCROLL SUAVE BOTONES
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",
block:"start"

});

}

});

});

/* ==========================
   LAZY LOADING IMAGENES
========================== */

const images =
document.querySelectorAll("img");

images.forEach(img => {

img.loading = "lazy";

});

/* ==========================
   AÑO AUTOMÁTICO FOOTER
========================== */

const copyright =
document.querySelector(".copyright");

if(copyright){

const year =
new Date().getFullYear();

copyright.innerHTML =
`© ${year} DS3 Comunicaciones. Todos los derechos reservados.`;

}


const slider = document.getElementById("relatedSlider");

document.getElementById("nextProduct").addEventListener("click", () => {
    slider.scrollBy({
        left: 350,
        behavior: "smooth"
    });
});

document.getElementById("prevProduct").addEventListener("click", () => {
    slider.scrollBy({
        left: -350,
        behavior: "smooth"
    });
});

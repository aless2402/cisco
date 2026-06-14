/* ==========================================
   LOAD COMPONENTS
========================================== */

document.addEventListener("DOMContentLoaded", async () => {

   await loadComponent(
      "#navbar-container",
      "components/navbar.html"
   );

   await loadComponent(
      "#footer-container",
      "components/footer.html"
   );

   initNavbar();
   initBreadcrumb();
   initPdfMenu();

});

/* ==========================================
   LOAD HTML COMPONENT
========================================== */

async function loadComponent(container, file) {

   const target = document.querySelector(container);

   if (!target) return;

   try {

      const response = await fetch(file);

      if (!response.ok) {
         throw new Error(`Error cargando ${file}`);
      }

      target.innerHTML = await response.text();

   } catch (error) {

      console.error(error);

   }

}

/* ==========================================
   BREADCRUMB
========================================== */

function initBreadcrumb() {

   const productCode =
      document.getElementById("product-code");

   const category =
      document.getElementById("category");

   const brand =
      document.getElementById("brand");

   if (!productCode || !category || !brand) return;

   const fileName =
      window.location.pathname
         .split("/")
         .pop();

   const code =
      fileName.replace(".html", "");

   brand.textContent =
      "AMP NETCONNECT";

   const pdfEs =
      document.getElementById("pdf-es");

   const pdfEn =
      document.getElementById("pdf-en");

   if (pdfEs) {
      pdfEs.href =
         `pdf/${code}-ES.pdf`;
   }

   if (pdfEn) {
      pdfEn.href =
         `pdf/${code}-EN.pdf`;
   }

   switch (code) {

      case "1859218-2":

         category.textContent =
            "Cable UTP Categoría 6A Apantallado";

         productCode.textContent =
            "CAT6-1859218-2";

         break;

      case "1859345-2":

         category.textContent =
            "Cable UTP Categoría 6 LSZH";

         productCode.textContent =
            "CAT6-1859345-2";

         break;

      case "219585-2":

         category.textContent =
            "Cable UTP Categoría 6 LSZH";

         productCode.textContent =
            "CAT6-219585-2";

         break;

      case "6-1427200-4":

         category.textContent =
            "Cable UTP Categoría 6 CMR";

         productCode.textContent =
            "CAT6-6-1427200-4";

         break;

      case "1427254-4":

         category.textContent =
            "Cable UTP Categoría 6 CMR";

         productCode.textContent =
            "CAT6-1427254-4";

         break;

      default:

         category.textContent =
            "Cable de Red";

         productCode.textContent =
            code;

   }

}

/* ==========================================
   PDF MENU
========================================== */

function initPdfMenu() {

   const pdfBtn =
      document.getElementById("pdfBtn");

   const pdfMenu =
      document.getElementById("pdfMenu");

   if (!pdfBtn || !pdfMenu) return;

   pdfBtn.addEventListener("click", (e) => {

      e.preventDefault();

      pdfMenu.classList.toggle(
         "active"
      );

   });

   document.addEventListener("click", (e) => {

      if (
         !pdfBtn.contains(e.target) &&
         !pdfMenu.contains(e.target)
      ) {

         pdfMenu.classList.remove(
            "active"
         );

      }

   });

}

/* ==========================================
   NAVBAR EVENTS
========================================== */

function initNavbar() {

   const mobileBtn =
      document.querySelector(
         ".mobile-btn"
      );

   const navMenu =
      document.querySelector(
         ".nav-menu"
      );

   if (!mobileBtn || !navMenu) return;

   /* MENU MOBILE */

   mobileBtn.addEventListener(
      "click",
      () => {

         navMenu.classList.toggle(
            "mobile-active"
         );

         const icon =
            mobileBtn.querySelector("i");

         if (
            navMenu.classList.contains(
               "mobile-active"
            )
         ) {

            icon.classList.remove(
               "fa-bars"
            );

            icon.classList.add(
               "fa-xmark"
            );

         } else {

            icon.classList.remove(
               "fa-xmark"
            );

            icon.classList.add(
               "fa-bars"
            );

         }

      }
   );

   /* DROPDOWNS */

   const dropdowns =
      document.querySelectorAll(
         ".nav-dropdown"
      );

   dropdowns.forEach(dropdown => {

      const button =
         dropdown.querySelector(
            ".dropdown-btn"
         );

      if (!button) return;

      button.addEventListener(
         "click",
         (e) => {

            if (
               window.innerWidth > 991
            ) return;

            e.preventDefault();

            dropdown.classList.toggle(
               "active"
            );

            dropdowns.forEach(item => {

               if (
                  item !== dropdown
               ) {

                  item.classList.remove(
                     "active"
                  );

               }

            });

         }
      );

   });

   /* CERRAR FUERA */

   document.addEventListener(
      "click",
      (e) => {

         if (
            !navMenu.contains(
               e.target
            ) &&
            !mobileBtn.contains(
               e.target
            )
         ) {

            navMenu.classList.remove(
               "mobile-active"
            );

            const icon =
               mobileBtn.querySelector(
                  "i"
               );

            if (icon) {

               icon.classList.remove(
                  "fa-xmark"
               );

               icon.classList.add(
                  "fa-bars"
               );

            }

            dropdowns.forEach(
               dropdown => {

                  dropdown.classList.remove(
                     "active"
                  );

               }
            );

         }

      }
   );

   /* CERRAR AL HACER CLICK */

   const navLinks =
      document.querySelectorAll(
         ".nav-menu a"
      );

   navLinks.forEach(link => {

      link.addEventListener(
         "click",
         () => {

            if (
               window.innerWidth > 991
            ) return;

            navMenu.classList.remove(
               "mobile-active"
            );

            const icon =
               mobileBtn.querySelector(
                  "i"
               );

            if (icon) {

               icon.classList.remove(
                  "fa-xmark"
               );

               icon.classList.add(
                  "fa-bars"
               );

            }

         }
      );

   });

   /* RESIZE */

   window.addEventListener(
      "resize",
      () => {

         if (
            window.innerWidth > 991
         ) {

            navMenu.classList.remove(
               "mobile-active"
            );

            dropdowns.forEach(
               dropdown => {

                  dropdown.classList.remove(
                     "active"
                  );

               }
            );

         }

      }
   );

}
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

      const html = await response.text();

      target.innerHTML = html;

   } catch (error) {

      console.error(error);

   }

}

/* ==========================================
   NAVBAR EVENTS
========================================== */

function initNavbar() {

   const mobileBtn = document.querySelector(".mobile-btn");
   const navMenu = document.querySelector(".nav-menu");

   if (!mobileBtn || !navMenu) return;

   /* ==========================================
      OPEN / CLOSE MENU
   ========================================== */

   mobileBtn.addEventListener("click", () => {

      navMenu.classList.toggle("mobile-active");

      const icon = mobileBtn.querySelector("i");

      if (navMenu.classList.contains("mobile-active")) {

         icon.classList.remove("fa-bars");
         icon.classList.add("fa-xmark");

      } else {

         icon.classList.remove("fa-xmark");
         icon.classList.add("fa-bars");

      }

   });

   /* ==========================================
      MOBILE DROPDOWNS
   ========================================== */

   const dropdowns =
      document.querySelectorAll(".nav-dropdown");

   dropdowns.forEach(dropdown => {

      const button =
         dropdown.querySelector(".dropdown-btn");

      if (!button) return;

      button.addEventListener("click", (e) => {

         if (window.innerWidth > 991) return;

         e.preventDefault();

         dropdown.classList.toggle("active");

         dropdowns.forEach(item => {

            if (item !== dropdown) {
               item.classList.remove("active");
            }

         });

      });

   });

   /* ==========================================
      CLOSE CLICK OUTSIDE
   ========================================== */

   document.addEventListener("click", (e) => {

      if (
         !navMenu.contains(e.target) &&
         !mobileBtn.contains(e.target)
      ) {

         navMenu.classList.remove("mobile-active");

         const icon =
            mobileBtn.querySelector("i");

         if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

         }

         dropdowns.forEach(dropdown => {

            dropdown.classList.remove("active");

         });

      }

   });

   /* ==========================================
      CLOSE ON LINK CLICK
   ========================================== */

   const navLinks =
      document.querySelectorAll(".nav-menu a");

   navLinks.forEach(link => {

      link.addEventListener("click", () => {

         if (window.innerWidth > 991) return;

         navMenu.classList.remove("mobile-active");

         const icon =
            mobileBtn.querySelector("i");

         if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

         }

      });

   });

   /* ==========================================
      WINDOW RESIZE
   ========================================== */

   window.addEventListener("resize", () => {

      if (window.innerWidth > 991) {

         navMenu.classList.remove("mobile-active");

         dropdowns.forEach(dropdown => {

            dropdown.classList.remove("active");

         });

         const icon =
            mobileBtn.querySelector("i");

         if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

         }

      }

   });

}
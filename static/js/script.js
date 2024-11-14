const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
      
      toggle.addEventListener("click", () =>{
        body.classList.toggle("close");
      });


      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
      });

      document.addEventListener("DOMContentLoaded", function() {
        const sidebar = document.querySelector(".sidebar"),
              toggle = document.querySelector(".toggle");
      
        toggle.addEventListener("click", () => {
          sidebar.classList.toggle("close");
          console.log("Třída `close` přepnuta na sidebaru:", sidebar.classList.contains("close"));
        });
      });
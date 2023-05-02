function linktoHome(){
    window.location.replace("../HomePage/indexHome.html");
  }
  function linktoFAQ(){
    window.location.replace("../FAQPage/indexFAQ.html");
  }
  
function popup(){
    window.location.replace("#popup1");
  }
  
  function linktoProfile(){
    window.location.replace("../ProfilePage/indexProfile.html");
  }
  
  function linktoEditProfile(){
    window.location.replace("../ProfilePage/indexEditProfile.html");
  }
  
  const dropdowns = document.querySelectorAll(".dropdown");
  
  dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(".select");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");
  
    select.addEventListener("click", () => {
      console.log("dropdown activated");
      select.classList.toggle("select-clicked");
      menu.classList.toggle("menu-open");
    });
  
    options.forEach((option) => {
      option.addEventListener("click", () => {
        selected.innerText = option.innerText;
        select.classList.remove("select-clicked");
        menu.classList.remove("menu-open");
  
        options.forEach((option) => {
          option.classList.remove("dragdown-active");
        });
        option.classList.add("dragdown-active");
      });
    });
  });
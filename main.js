const button = document.querySelector(".btn");
const share = document.querySelector(".share-container");


button.addEventListener("click", function () {

  if (button.classList.contains("btn-on")) {
    button.classList.remove("btn-on");
    share.classList.remove("active");
  }
  else {
    button.classList.add("btn-on");
    share.classList.add("active");
  }

});
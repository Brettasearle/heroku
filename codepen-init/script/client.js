function init() {
  const abc = document.querySelector("i");
  abc.addEventListener("click", function () {
    const ul = document.querySelector("ul");
  
    ul.classList.toggle("open");
  
  } )
  
}

window.addEventListener("load", init)




function slideClick() {
    let parrafo = document.getElementsByTagName("p");
    for (let i = parrafo.length - 1; i >= 0; i--) {
      if (parrafo[i].innerHTML.indexOf("provide") >= 0) {
        parrafo[i].parentNode.removeChild(parrafo[i]);
      }
    }
  }
  
  slideClick();



// o más simple:

  function slideClick() {
    let parrafo = document.querySelectorAll("p");
    for (let parraf of parrafo) {
      if (parraf.innerHTML.includes("provide")) {
        parraf.parentNode.removeChild(parraf);
      }
    }
  }
  
  slideClick();
  
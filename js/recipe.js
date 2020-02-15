const printButton = document.querySelector('.button-wrapper');
console.log("AHOY MATEY");
if (printButton !== null && printButton !== undefined) {
  printButton.addEventListener("click", function() {
      console.log("CLICKED");
      printButton.style.display = "none";
      window.print();
      window.onfocus=function(){ printButton.style.display = "block";}
  });
}

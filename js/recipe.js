const printButton = document.querySelector('.printButton');
const recipeImage = document.querySelector('.recipeImage');
if (printButton !== null && printButton !== undefined) {
  printButton.addEventListener("click", function() {
      printButton.style.display = "none";
      recipeImage.style.display = "none";
      window.print();
      window.onfocus=function(){ 
        printButton.style.display = "inline-block";
        recipeImage.style.display = "block";
      }
  });
}

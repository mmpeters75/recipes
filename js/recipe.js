const printButton = document.querySelector('.printButton');
const recipeImage = document.querySelector('.recipeImage');
const recipeImage2 = document.querySelector('.recipeImage2');
if (printButton !== null && printButton !== undefined) {
  printButton.addEventListener("click", function() {
      printButton.style.display = "none";
      recipeImage.style.display = "none";
      if (recipeImage2) {
        recipeImage2.style.display = "none";
      }
      window.print();
      window.onfocus=function(){ 
        printButton.style.display = "inline-block";
        recipeImage.style.display = "block";
        if (recipeImage2) {
          recipeImage2.style.display = "block";
        }
      }
  });
}

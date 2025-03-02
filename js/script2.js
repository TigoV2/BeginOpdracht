const tableHidden = document.getElementById("section");

tableHidden.addEventListener("mouseover", function(){
  tableHidden.classList.add("show");
});

tableHidden.addEventListener("mouseout", function(){
  tableHidden.classList.remove("show");
});
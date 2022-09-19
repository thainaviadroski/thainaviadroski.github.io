function modal() {
  var modal = document.getElementById("modal");

  modal.addEventListener("load", () => {
    modal.showModal();
  });

  var close = document.getElementById("close");
  close.addEventListener("click", () => {
    modal.style.display = 'none';    
  });
}


modal();
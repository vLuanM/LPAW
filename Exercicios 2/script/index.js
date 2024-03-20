// --------------------------  MODAL  -------------------------- 


const button = document.querySelector("#popup"); 
const modal = document.querySelector("dialog");

button.onclick = function () {
    if (modal.open) {
        modal.close();
    } else {
        modal.show();
    }
}

fechar.onclick = function () {
    modal.close();
}



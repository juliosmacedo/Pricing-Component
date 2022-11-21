const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");
let annually = true;

function changeText() {
    if(annually == true) {
        price1.textContent = '$19.99'
        price2.textContent = '$24.99';
        price3.textContent = '$39.99';
        annually = false;
    }

    else if (annually == false) {
        price1.textContent = '$199.99'
        price2.textContent = '$249.99';
        price3.textContent = '$399.99';
        annually = true;
    }
};
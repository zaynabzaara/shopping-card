const addItem = (pHolder, pChange, price) => {
    let qte = document.getElementById(pHolder).innerText;
    // increment item quantite
    document.getElementById(pHolder).innerText = Number(qte) + 1;
    // item total price
    document.getElementById(pChange).innerText = Number(document.getElementById(pHolder).innerText) * Number(price);
    // total price

    document.getElementById("total-price").innerText = Number(document.getElementById("total-price").innerText) + Number(price);
}
const retireItem = (pHolder, pChange, price) => {
    // let totalPrice = 0;
    let qte = document.getElementById(pHolder).innerText;
    // Decrement item quantite
    if (qte > 0)
        document.getElementById(pHolder).innerText = qte - 1;
    else { document.getElementById(pHolder).innerText = 0; }
    // item total price
    let itemTotalPrice = document.getElementById(pChange).innerText = Number(document.getElementById(pHolder).innerText) * Number(price);
    // total price
    if (document.getElementById("total-price").innerText == 0) {
        document.getElementById("total-price").innerText
    } else {
        document.getElementById("total-price").innerText = Number(document.getElementById("total-price").innerText) - Number(price);
    }

}
const fav = (btnNumber) => {
    let favItem = document.getElementById(btnNumber);

    let colors = favItem.getAttribute("fill");

    if (colors == "grey") { favItem.setAttribute("fill", "red") }
    if (colors == "red") { favItem.setAttribute("fill", "grey") }
}
const retire = (itemNumber) => {
    let delItem = document.getElementById(itemNumber);
    delItem.remove();

}

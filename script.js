const allBtn = document.getElementsByClassName("add-button");
console.log(allBtn);

let seatLeft = 40;
let seatNo = 0;
let totalPrice = 0;

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        seatLeft = seatLeft - 1;
        document.getElementById("now-the-seats").innerText = seatLeft;
        
        seatNo = seatNo+1;
        document.getElementById("seat-No").innerText = seatNo;

        totalPrice = totalPrice + 550;
        document.getElementById("totalPrice").innerText = totalPrice;

    })
}

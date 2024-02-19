const allBtn = document.getElementsByClassName("add-button");
console.log(allBtn);


let seatLeft = 40;
let seatNo = 0;
let totalPrice = 0;
let GrandTotal = 0;
const price = 550;
const className = "Economoy";


for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        if (seatLeft > 36) {

            btn.style.backgroundColor = 'lightgreen';
            btn.disabled = true;

            seatLeft = seatLeft - 1;
            document.getElementById("now-the-seats").innerText = seatLeft;

            seatNo = seatNo + 1;
            document.getElementById("seat-No").innerText = seatNo;

            totalPrice = totalPrice + 550;
            document.getElementById("totalPrice").innerText = totalPrice;

            GrandTotal = GrandTotal + 550;
            document.getElementById("GrandTotal").innerText = GrandTotal;

            const seat = e.target.innerText;
            console.log(seat);

            const SelectYourSeat = document.getElementById("SelectYourSeat");
            const li = document.createElement("li");
            const p = document.createElement("p");
            const p2 = document.createElement("p")
            const p3 = document.createElement("p");

            p.innerText = seat;
            p2.innerText = className;
            p3.innerText = price;
            li.appendChild(p);
            li.appendChild(p2);
            li.appendChild(p3);

            SelectYourSeat.appendChild(li);

        }
    })
}
document.getElementById("copupon").addEventListener("click", function (e) {
    console.log("ghrkghkthg");
})





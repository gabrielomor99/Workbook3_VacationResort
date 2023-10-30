"use strict";

window.onload = function () {
    let roomCostSubmitbtn = document.getElementById("roomCost");

    roomCostSubmitbtn.onclick = getRoomRate;

    function getRoomRate() {
        let queenRoomCostEl = 150;
        let kingRoomCostEl = 150;
        let twoBedroomCostEl = 210;
        let roomCostEl = 150;

        let checkInEl = new Date(document.getElementById("checkInDate").value);
        let numberOfNightsEl = document.getElementById("numberOfNights").value;
        let queenEl = document.getElementById("queenType");
        let kingEl = document.getElementById("kingType");
        let twoBedroomTypeEl = document.getElementById("twoBedroomType");
        let seniorDiscountEl = document.getElementById("AAA/SeniorDiscount");
        let militaryDiscountEl = document.getElementById("militaryDiscount");

        if (checkInEl.getMonth() >= 5 && checkInEl.getMonth() <= 7) {
            queenRoomCostEl = 250;
            kingRoomCostEl = 250;
            twoBedroomCostEl = 350;
        }

        let discount = 0; 

        if (queenEl.checked) {
            roomCostEl = queenRoomCostEl;
        } else if (kingEl.checked) {
            roomCostEl = kingRoomCostEl;
        } else if (twoBedroomTypeEl.checked) {
            roomCostEl = twoBedroomCostEl;
        }

         // 10% discount// 
        if (seniorDiscountEl.checked) {
            discount = roomCostEl * 0.1;
        } 
       
           // 20% discount
        else if (militaryDiscountEl.checked) {
            discount = roomCostEl * 0.2; 
        }

        let originalRoomCostEl = document.getElementById("originalRoomCost");
        originalRoomCostEl.innerHTML = (roomCostEl * numberOfNightsEl).toFixed(2);

        let discountEl = document.getElementById("discount");
        discountEl.innerHTML = discount.toFixed(2);

        let discountedRoomCostEl = document.getElementById("discountedRoomCost");
        discountedRoomCostEl.innerHTML = (roomCostEl - discount).toFixed(2);

        let taxEl = document.getElementById("tax");
        taxEl.innerHTML = ((roomCostEl - discount) * 0.12).toFixed(2);

        let totalCostEl = document.getElementById("totalCost");
        totalCostEl.innerHTML = (
            (roomCostEl * numberOfNightsEl - discount) + Number(taxEl.innerHTML)
        ).toFixed(2);
    }

    getRoomRate();
}
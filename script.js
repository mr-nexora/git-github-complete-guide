// Header Order Now Button
function placeOrder() {
    alert("Thank you for choosing The Coffee House! Your order has been placed successfully. We are preparing your delicious coffee now!");
}

//Contact Section Order Button
function coformOrder() {
    let name = document.getElementById("userName").value;

    if(name == "") {
        alert("Please enter your name before placing the order!");
    }
    else {
        alert("Hello " + name + "!  Your order has been placed successfully. Our barista is preparing it now!")
    }
}
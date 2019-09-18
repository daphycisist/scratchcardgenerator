
function generatePin(){
let pin = Math.floor(Math.random()*10e15)
return pin;
}

$(document).ready(function() {
$('.generatePin').click(function(event) {
    event.preventDefault();
    let generatedPin = generatePin();
    let date = new Date();
    let expires = date.setTime(date.getTime()+(90*24*60*60*1000) )
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/pin",
        data: {
            pinNumber: generatedPin,
            expiryDate: expires
        }
    }).done(function() {
        alert('Done');
    });
});
});

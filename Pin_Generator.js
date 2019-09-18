
function generatePin(){
let pin = Math.floor(Math.random()*10e15)
let date = new Date();
let expires = date.setTime(date.getTime()+(90*24*60*60*1000) )
expiry ="";
expiry=""+date.toGMTString();

return {
    "pin":[]

}
}


// let data {
//     "pin": pin,
//     "date": new Date(),
//     "expire": 3
// };

// $.post("http://localhost:3000/Cards", data, function() {

// })
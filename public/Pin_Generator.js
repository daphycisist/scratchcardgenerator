
function generatePin(){
  let pin = Math.floor(Math.random()*10e15)
  return pin;
  }
  
  $(document).ready(function() {
  $('.generatePin').click(function(event) {
      event.preventDefault();
      let generatedPin = generatePin();
      let date = new Date();
      date.setTime(date.getTime()+(90*24*60*60*1000) )
      let expiry= ""; expiry=""+date.toGMTString();
      $.ajax({
          method: "POST",
          url: "http://localhost:3000/pin",
          data: {
              pinNumber: generatedPin,
              expiryDate: expiry
          }
      }).done(function() {
          alert('Done');
      });
  });
  
  $.ajax({
      method: "GET",
      url: "http://localhost:3000/pin",
      success: function(data) {
          for (pin of data) {
              $("#pins").append(
                  `
                      <li>${pin.pinNumber}  ${pin.expiryDate}</li>
                  `
              );
          }
      }
  })
  
  
  
  
  });
  
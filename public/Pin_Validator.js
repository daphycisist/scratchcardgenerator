$(document).ready(function(){
  $('.PinSubmit').click(function(event) {
      event.preventDefault();
      const pinInput = $('#pinInput').val();
      //Check if user input is empty
      if (!pinInput) {
        $('.inputMessage').html('Kindly input your scratch card pin');
          $('pinInput').click(function(){
              alert("Input pin")
          })
        return;
      }
      $.ajax({
        method: 'GET',
        url: `http://localhost:3000/users?email=${pinInput}`,
        data: {
          pinInput,
        },
        beforeSend: function() {
          $('.inputMessage').html('Loading....');
        },
        success: function(response) {
          if (response.length) {
            $('.inputMessage').html('Pin already Used');
          } else {
            //Submit the user data if the user does not exist
            $.ajax({
              method: 'POST',
              url: 'http://localhost:3000/users',
              data: {
                pinInput,
              },
              beforeSend: function() {
                $('.inputMessage').html('Loading....');
              },
              success: function() {
                $('.inputMessage').html('Pin Valid');
              },
            });
          }
        },
        });
        });
        
})


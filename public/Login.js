$(document).ready(function() {
  $('#adminSubmit').click(function(event) {
    event.preventDefault();
    const emailLogin = $('#emailAdmin').val();
    const passwordLogin = $('#passwordAdmin').val();

    if (!passwordLogin || !emailLogin) {
      $('.loginMessage').html('Kindly fill in all fields');
      return;
    }
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/admin?password=${passwordLogin}&email=${emailLogin}`,
      // beforeSend: function() {
      //   $('.loginMessage').html('Loading....');
      // },
      success: function(response) {
        if (response.length) {
          // $('.logi').html('Login sucessful');
          // $('.checkLogin').html('You are logged in');
          localStorage.setItem('passwordLogin', passwordLogin);
          //redirect to home page if the login is successfull
          window.location.assign('register.html');
        } else {
          $('.loginMessage').html('password Incorrect');
        }
      },
    });
  })  
})

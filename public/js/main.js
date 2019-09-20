$(() => {

  var checkvalid = {
    email: false,
    username: false,
    password: false,
    confirmPassword:false,  
  }

  function checkValidation () {
    if (checkvalid.email && checkvalid.username && checkvalid.password && checkvalid.confirmPassword) {
      $('#submit').removeAttr('disabled');
    }else {
      $('#submit').attr('disabled',true);
    } 
  }

  function fadein() {
    $('#errorMessage').fadeIn(1000);
  }

  function fadeout() {
    $('#errorMessage').fadeOut(1000);
  }

  //email
  $('#email').on('input', function () {
    var email = $(this).val();
    let reg1 = new RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);

    if (email.length < 1 || !reg1.test(email)) {
      fadein();
      checkvalid.email = false;
      checkValidation();
    } else {
      fadeout();
      checkvalid.email = true;
      checkValidation();
    }
  })
  //user
  let reg2 = new RegExp(/[a-zA-Z0-9]+$/);
  $('#username').on('input', function () {
    var username = $(this).val();

    if (username.length < 1 || !reg2.test(username)) {
      fadein();
      checkvalid.username = false;
      checkValidation(); 
    } else {
      fadeout();
      checkvalid.username = true;
      checkValidation();
      }
  });
  //password
  $('#password').on('input', function () {
    var password = $('#password').val();
    if (password.length < 8 ||!reg2.test(password)) {
      fadein();
      checkvalid.password = false;
      checkValidation();
    } else {
      fadeout();
      checkvalid.password = true;
      checkValidation();
    }
  });
  //confirmpassword
  $('#confirm-password').on('input', function () {
    var confirmPassword = $('#confirm-password').val();
    var password = $('#password').val();
    if (confirmPassword != password) {
      $('#errorMessage').show().html('<i class="fas fa-exclamation"></i><span>與密碼不相符</span>');
      checkvalid.confirmPassword = false;
      checkValidation();
    } else {
      fadeout();
      checkvalid.confirmPassword = true;
      checkValidation();
      if (!reg2.test(password)) {
        $('#errorMessage').show();
        checkvalid.confirmPassword = false;
        checkValidation();
      } else {
        fadeout();
        checkvalid.confirmPassword = true;
        checkValidation();
      }
    }
  });

});

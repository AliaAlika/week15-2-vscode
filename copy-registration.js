function check(input) {
  let result = input.value;
  if (!isNaN(result) & (input.value.length > 0)) {
    alert("Пожалуйста, вводите буквы, а не цифры!");
  }
}

function checkNumbers(input) {
  if (isNaN(input.value) & (input.value.length > 0)) {
    alert("Пожалуйста, вводите цифры, а не буквы!");
  }
  if ((input.value.length > 0) & (input.value[0] != "8")) {
    alert("Первая цифра должна быть 8");
  }
  if ((input.value.length != 11) & (input.value.length > 0)) {
    alert("В номере телефона должно быть 11 цифр");
  }
}

function checkLogin(input) {
  if ((input.value.length < 6) & (input.value.length > 0)) {
    alert("Логин должен содержать как минимум 6 символов!");
  }
}

function checkPassword(input) {
  if ((input.value.length < 8) & (input.value.length > 0)) {
    alert("Пароль должен содержать как минимум 8 символов!");
  }
}

function confPassword(input1, input2) {
  if ((input1.value != input2.value) & (input2.value != "")) {
    alert("Пароли не совпадают!");
  }
}

function checkSubmit(input) {
  if (input[0].value == "") {
    alert("Пожалуйста, заполните поле " + input[0].id);
  } else if (!isNaN(input[0].value) & (input[0].value.length > 0)) {
    alert("Пожалуйста, вводите буквы, а не цифры!");
  }

  if (input[1].value == "") {
    alert("Пожалуйста, заполните поле " + input[1].id);
  } else if (!isNaN(input[1].value) & (input[1].value.length > 0)) {
    alert("Пожалуйста, вводите буквы, а не цифры!");
  }

  if (input[2].value == "") {
    alert("Пожалуйста, заполните поле " + input[2].id);
  } else if (isNaN(input[2].value) & (input[2].value.length > 0)) {
    alert("Пожалуйста, вводите цифры, а не буквы!");
  }
  if ((input[2].value.length > 0) & (input[2].value[0] != "8")) {
    alert("Первая цифра должна быть 8!");
  }
  if ((input[2].value.length != 11) & (input[2].value.length > 0)) {
    alert("В номере телефона должно быть 11 цифр!");
  }

  if (input[3].value == "") {
    alert("Пожалуйста, заполните поле " + input[3].id);
  } else if ((input[3].value.length < 6) & (input[3].value.length > 0)) {
    alert("Логин должен содержать как минимум 6 символов!");
  }

  if (input[4].value == "") {
    alert("Пожалуйста, заполните поле " + input[4].id);
  }
  if ((input[4].value.length < 8) & (input[4].value.length > 0)) {
    alert("Пароль должен содержать как минимум 8 символов!");
  }

  if (input[5].value == "") {
    alert("Пожалуйста, заполните поле " + input[5].id);
  }
  if ((input[4].value != input[5].value) & (input[5].value != "")) {
    alert("Пароли не совпадают!");
  }
  
}

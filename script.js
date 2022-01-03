const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  // username validation
  if (usernameVal === "") {
    setErrorMsg(username, "Username cannot be blank");
  } else if (usernameVal.length < 3) {
    setErrorMsg(username, "Username should be minimum 3 characters");
  } else {
    setSuccessMsg(username);
  }

  // email validation
  const isEmailVal = (emailVal) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  };

  if (emailVal === "") {
    setErrorMsg(email, "Email cannot be blank");
  } else if (!isEmailVal(emailVal)) {
    setErrorMsg(email, "Not a valid email format");
  } else {
    setSuccessMsg(email);
  }

  // phone validation
  if (phoneVal === "") {
    setErrorMsg(phone, "Phone Number cannot be blank");
  } else if (phoneVal <= 10) {
    setErrorMsg(phone, "Please insert at least 11 or more..");
  } else {
    setSuccessMsg(phone);
  }

  // password validation

  const isPasswordVal = (passwordVal) => {
    var passwordFormat = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,30}$/;
    if (password.value.match(passwordFormat)) {
      return true;
    } else {
      return false;
    }
  };

  if (passwordVal === "") {
    setErrorMsg(password, "Password cannot be blank");
  } else if (!isPasswordVal(passwordVal)) {
    setErrorMsg(
      password,
      "Password must be 8 or more charecter with special symbols"
    );
  } else {
    setSuccessMsg(password);
  }

  // confirm Password

  if (cpasswordVal === "") {
    setErrorMsg(cpassword, "Confirm password cannot be blank");
  } else if (cpasswordVal != passwordVal) {
    setErrorMsg(cpassword, "Password cannot be matched");
  } else {
    setSuccessMsg(cpassword);
  }
  
};
const setErrorMsg = (input, errormsgs) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
};
const setSuccessMsg = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

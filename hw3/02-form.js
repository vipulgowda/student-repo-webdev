// Add your code here
const formBody = document.querySelector("form");

for (let childNode of formBody) {
  if (childNode.type === "reset") {
    childNode.addEventListener("click", function (event) {
      event.preventDefault();
      formReset();
    });
  }
  if (childNode.type === "submit") {
    childNode.addEventListener("click", function (event) {
      event.preventDefault();
      try {
        formSubmit();
      } catch (err) {
        alert(err);
      }
    });
  }
}

class CreateDate {
  constructor(date) {
    const splitDate = date.split("-");
    this.day = parseInt(splitDate[2]);
    this.month = parseInt(splitDate[1]);
    this.year = parseInt(splitDate[0]);
  }

  getFormattedMonth() {
    let month;
    switch (this.month) {
      case 1:
        month = "January";
        break;
      case 2:
        month = "February";
        break;
      case 3:
        month = "March";
        break;
      case 4:
        month = "April";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "June";
        break;
      case 7:
        month = "July";
        break;
      case 8:
        month = "August";
        break;
      case 9:
        month = "September";
        break;
      case 10:
        month = "October";
        break;
      case 11:
        month = "November";
        break;
      case 12:
        month = "December";
        break;
      default:
        break;
    }
    return month;
  }
}

//submission of form
function formSubmit() {
  let name = formBody.name.value;
  let username = formBody.uname.value;
  let email = formBody.email.value;
  let password = formBody.password.value;
  let dataOfBirth = new CreateDate(formBody.date.value);
  let radioButtons = document.querySelectorAll('input[type="radio"]');
  let selectedPronoun = null;
  radioButtons.forEach((btn) => {
    if (btn.checked) {
      selectedPronoun = btn.value;
    }
  });

  //check for missing fields
  if (
    !name ||
    !username ||
    !email ||
    !dataOfBirth ||
    !selectedPronoun ||
    !password
  ) {
    throw `Missing field/s`;
  }

  //Form submission console
  console.group("============ Form Submission ==========");
  console.log(`Name: ${name}`);
  console.log(`Username: ${username}`);
  console.log(`Email: ${email}`);
  console.log(
    `Date of Birth: ${
      dataOfBirth.getFormattedMonth() +
      " " +
      dataOfBirth.day +
      ", " +
      dataOfBirth.year
    }`
  );
  console.log(`Preferred Pronouns: ${selectedPronoun}`);
  console.groupEnd();
}

//reset the form
function formReset() {
  document.getElementById("form-cls").reset();
}

class User {
  constructor(firstName, lastName, date, email, password, confirm_password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.date = date;
    this.email = email;
    this.password = password;
    this.confirm_password = confirm_password;
  }
  
  register() {
    console.log(this);
  }
}

const registrationForm = document.getElementById('registrationForm');
const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const confirmPasswordError = document.querySelector('#confirmPasswordError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const dateError = document.querySelector('#dateError');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const date = document.getElementById('date').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirm_password = document.getElementById('confirm_password').value.trim();
  
  const nameRegex = /^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ' ]+$/u;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Перевірка поля Ім'я
  if (firstName === '') {
    firstNameError.classList.remove('hidden');
    document.getElementById('firstName').style.borderColor = 'red';
    firstNameError.textContent = 'Поле є обовязковим';
    return;
  } else if (firstName.length < 2) {
    firstNameError.classList.remove('hidden');
    document.getElementById('firstName').style.borderColor = 'red';
    firstNameError.textContent = 'Поле має містити мінімум дві літери';
    return;
  } else if (!nameRegex.test(firstName)) {
    firstNameError.classList.remove('hidden');
    document.getElementById('firstName').style.borderColor = 'red';
    firstNameError.textContent = 'Поле повинно містити тільки літери кирилиці та/або апостроф';
    return;
  } else {
    firstNameError.classList.add('hidden');
    document.getElementById('firstName').style.borderColor = '';
  }

  // Перевірка поля Прізвище
  if (lastName === '') {
    lastNameError.classList.remove('hidden');
    document.getElementById('lastName').style.borderColor = 'red';
    lastNameError.textContent = 'Поле є обовязковим';
    return;
  } else if (lastName.length < 2) {
lastNameError.classList.remove('hidden');
document.getElementById('lastName').style.borderColor = 'red';
lastNameError.textContent = 'Поле має містити мінімум дві літери';
return;
} else if (!nameRegex.test(lastName)) {
lastNameError.classList.remove('hidden');
document.getElementById('lastName').style.borderColor = 'red';
lastNameError.textContent = 'Поле повинно містити тільки літери кирилиці та/або апостроф';
return;
} else {
lastNameError.classList.add('hidden');
document.getElementById('lastName').style.borderColor = '';
}

// Перевірка поля Дата народження
if (date === '') {
dateError.classList.remove('hidden');
document.getElementById('date').style.borderColor = 'red';
dateError.textContent = 'Поле є обовязковим';
return;
} else {
dateError.classList.add('hidden');
document.getElementById('date').style.borderColor = '';
}

// Перевірка поля Email
if (email === '') {
emailError.classList.remove('hidden');
document.getElementById('email').style.borderColor = 'red';
emailError.textContent = 'Поле є обовязковим';
return;
} else if (!emailRegex.test(email)) {
emailError.classList.remove('hidden');
document.getElementById('email').style.borderColor = 'red';
emailError.textContent = 'Поле повинно містити коректний email адресу';
return;
} else {
emailError.classList.add('hidden');
document.getElementById('email').style.borderColor = '';
}

// Перевірка поля Пароль
if (password === '') {
passwordError.classList.remove('hidden');
document.getElementById('password').style.borderColor = 'red';
passwordError.textContent = 'Поле є обовязковим';
return;
} else if (password.length < 6) {
passwordError.classList.remove('hidden');
document.getElementById('password').style.borderColor = 'red';
passwordError.textContent = 'Пароль має містити мінімум 6 символів';
return;
} else {
passwordError.classList.add('hidden');
document.getElementById('password').style.borderColor = '';
}

// Перевірка поля Підтвердження паролю
if (confirm_password === '') {
confirmPasswordError.classList.remove('hidden');
document.getElementById('confirm_password').style.borderColor = 'red';
confirmPasswordError.textContent = 'Поле є обовязковим';
return;
} else if (confirm_password !== password) {
confirmPasswordError.classList.remove('hidden');
document.getElementById('confirm_password').style.borderColor = 'red';
confirmPasswordError.textContent = 'Паролі не співпадають';
return;
} else {
confirmPasswordError.classList.add('hidden');
document.getElementById('confirm_password').style.borderColor = '';
}

const user = new User(firstName, lastName, date, email, password, confirm_password);
user.register();
});

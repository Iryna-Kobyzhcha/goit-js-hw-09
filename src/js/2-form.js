// Ключ для локального сховища
const STORAGE_KEY = "feedback-form-state";

// Створюємо об'єкт formData
let formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".feedback-form");

// Відновлення даних із локального сховища при завантаженні
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// Обробка введення (input) через делегування
form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim(); // Обрізаємо пробіли по краях
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробка відправки форми
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Перевірка, чи всі поля заповнені
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log("Form submitted:", formData);

  // Очищення форми та локального сховища
  form.reset();
  formData = { email: "", message: "" };
  localStorage.removeItem(STORAGE_KEY);
});
// Импортируем модуль readline
const readline = require('readline');

// Создаем интерфейс для чтения из стандартного ввода и записи в стандартный вывод
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Генерируем случайное число в заданном диапазоне (включительно)
const min = 0;
const max = 100;
const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для начала игры
function startGame() {
  console.log(`Загадано число в диапазоне от ${min} до ${max}`);

  // Функция для ввода числа пользователем
  function askNumber() {
    rl.question('Введите число: ', (userInput) => {
      const number = parseInt(userInput);

      if (isNaN(number)) {
        console.log('Пожалуйста, введите корректное число.');
        askNumber(); // Повторяем запрос, если введено некорректное значение
      } else if (number < min || number > max) {
        console.log(`Пожалуйста, введите число в диапазоне от ${min} до ${max}.`);
        askNumber(); // Повторяем запрос, если число вне диапазона
      } else if (number < secretNumber) {
        console.log('Больше');
        askNumber(); // Продолжаем игру
      } else if (number > secretNumber) {
        console.log('Меньше');
        askNumber(); // Продолжаем игру
      } else {
        console.log(`Отгадано число ${secretNumber}`);
        rl.close(); // Завершаем игру
      }
    });
  }

  // Начинаем игру
  askNumber();
}

// Запускаем игру
startGame();
"use strict"
function getUserName() {
    let username = sessionStorage.getItem('username');
    if (!username) {
        username = prompt("Как вас зовут?");
        if (username) {
            sessionStorage.setItem('username', username);
        }
    }
    return username;
}

// Function to show welcome screen
function showWelcomeScreen() {
    const username = getUserName();
    if (username) {
        const currentDate = new Date().toLocaleDateString();
        document.getElementById('username-display').textContent = username;
        document.getElementById('current-date').textContent = currentDate;
        document.getElementById('welcome-screen').style.display = 'flex';
    }
}

// Function to hide welcome screen
function hideWelcomeScreen() {
    document.getElementById('welcome-screen').style.display = 'none';
}

// Run example tasks
function runExample(exampleNumber) {
    let output = document.getElementById('output');
    let codeOutput = document.getElementById('codeOutput');
    output.classList.add('active');
    codeOutput.classList.add('active');
    output.innerHTML = ''; // Clear previous output
    codeOutput.innerText = ''; // Clear previous code output

    switch (exampleNumber) {
        case 1:
            let a = 5, b = 3;
            output.innerHTML = `<p>Пример 1: ${a} + ${b} = ${a + b}</p>`;
            codeOutput.innerText = 
`let a = 5, b = 3;
output.innerHTML = <p>Пример 1: \${a} + \${b} = \${a + b}</p>;`;
            break;
            case 2:
                output.innerHTML = '<p>Пример 2: Посчитаем факториал 5!</p>';
                function factorial(n) {
                    return (n !== 1) ? n * factorial(n - 1) : 1;
                }
                output.innerHTML += `<p>Факториал 5 = ${factorial(5)}</p>`;
                codeOutput.innerText = 
`output.innerHTML = '<p>Пример 2: Посчитаем факториал 5!</p>';
function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}
output.innerHTML += <p>Факториал 5 = \${factorial(5)}</p>`;
                break;
            case 3:
                output.innerHTML = '<p>Пример 3: Вывод четных чисел от 8 до 20</p>';
                for (let i = 8; i <= 20; i++) {
                    if (i % 2 === 0) {
                        output.innerHTML += `<p>${i}</p>`;
                    }
                }
                codeOutput.innerText = 
`output.innerHTML = '<p>Пример 3: Вывод четных чисел от 8 до 20</p>';
for (let i = 8; i <= 20; i++) {
    if (i % 2 === 0) {
        output.innerHTML += <p>\${i}</p>}}`;
                break;
            case 4:
                let array2 = [1, 2, 3, 4, 5];
                let array4 = [6, 7, 8, 9, 10];
                let combinedArray = [...array2, ...array4];
                output.innerHTML = '<p>Пример 4: Объединение двух массивов в один и вывод полученного массива</p>';
                output.innerHTML += '<p>Первый массив: 1, 2, 3, 4, 5</p>';
                output.innerHTML += '<p>Второй массив: 6, 7, 8, 9, 10</p>';
                output.innerHTML += '<p>Результат объединения:</p>';
                for (let i = 0; i < combinedArray.length; i++) {
                    output.innerHTML += `<p>${combinedArray[i]}</p>`;
                }
                codeOutput.innerText = 
`let array2 = [1, 2, 3, 4, 5];
let array4 = [6, 7, 8, 9, 10];
let combinedArray = [...array2, ...array4];
output.innerHTML = '<p>Пример 4: Объединение двух массивов в один и вывод полученного массива</p>';
output.innerHTML += '<p>Первый массив: 1, 2, 3, 4, 5</p>';
output.innerHTML += '<p>Второй массив: 6, 7, 8, 9, 10</p>';
output.innerHTML += '<p>Результат объединения:</p>';
for (let i = 0; i < combinedArray.length; i++) {
    output.innerHTML += <p>\${combinedArray[i]}</p>}`;
                break;
        // Добавьте остальные примеры с обновлением codeOutput
        default:
            output.innerHTML = '<p>Неизвестное задание</p>';
            codeOutput.innerText = '';
    }
}

// Quiz related functions
const quizQuestions = [
    {
        question: "Что такое JavaScript?",
        choices: ["Язык разметки", "Язык программирования", "Стилевой язык", "Система управления базами данных"],
        answer: 1
    },
    {
        question: "Обязательно ли ставить точку с запятой в конце каждой инструкции?",
        choices: ["Да", "Нет"],
        answer: 1
    },
    {
        question: "Что указывается в атрибуте src внутри тега <script>?",
        choices: ["Размер подключаемого JS-файла", "Дату создания JS-файла", "Ссылку на JS-файл"],
        answer: 2
    },
    {
        question: "Для чего используется JavaScript?",
        choices: ["Создание статических сайтов", "Создание серверных приложений", "Создание интерактивных веб-страниц", "Работа с базами данных"],
        answer: 2
    },
    {
        question: "С помощью какого парного тега можно вставить JS-код?",
        choices: ["<java>", "<div>", "<script>", "<span>"],
        answer: 2
    },
    {
        question: "Каким способом нельзя подключить JavaScript в HTML?",
        choices: ["Внутри парного тега <script>", "С помощью математики", "Внешнее подключение файлов"],
        answer: 1
    },
    {
        question: "Какой атрибут используется для подключения внешних файлов JS в теге <scriot>?",
        choices: ["src", "alt", "style"],
        answer: 0
    },
    {
        question: "Для чего изначально был создан JavaScript?",
        choices: ["Сделать веб-страницы живыми", "Для создания игр", "Для добавления стилей", "Для изменения стилей"],
        answer: 0
    },
    {
        question: "Как называются программы на язке JS?",
        choices: ["Джавы", "Скрипты", "ДжаваСкрипты", "Нет названия"],
        answer: 1
    },
    {
        question: "Всегда ли перенос строки означает точку с запятой?",
        choices: ["Нет", "Да"],
        answer: 0
    }
];

function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear previous quiz
    quizContainer.style.display = 'block';

    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        q.choices.forEach((choice, i) => {
            const choiceLabel = document.createElement('label');
            const choiceInput = document.createElement('input');
            choiceInput.type = 'radio';
            choiceInput.name = `question${index}`;
            choiceInput.value = i;
            choiceLabel.appendChild(choiceInput);
            choiceLabel.appendChild(document.createTextNode(choice));
            questionDiv.appendChild(choiceLabel);
            questionDiv.appendChild(document.createElement('br'));
        });
        quizContainer.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Отправить';
    submitButton.onclick = submitQuiz;
    quizContainer.appendChild(submitButton);
}

function submitQuiz() {
    let score = 0;
    const userAnswers = [];
    quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected) {
            const answer = parseInt(selected.value, 10);
            userAnswers.push({ question: q.question, userAnswer: q.choices[answer], correct: answer === q.answer });
            if (answer === q.answer) {
                score++;
            }
        } else {
            userAnswers.push({ question: q.question, userAnswer: 'Не ответил', correct: false });
        }
    });

    showQuizResult(score, userAnswers);
}

function showQuizResult(score, userAnswers) {
    const quizContainer = document.getElementById('quiz-container');
    const quizResult = document.getElementById('quiz-result');
    quizContainer.style.display = 'none';

    quizResult.innerHTML = `<h3>Ваш результат: ${score} из ${quizQuestions.length}</h3>`;
    userAnswers.forEach(answer => {
        const result = document.createElement('div');
        result.innerHTML = `<p>Вопрос: ${answer.question}</p>
                            <p>Ваш ответ: ${answer.userAnswer} (${answer.correct ? 'верно' : 'неверно'})</p>`;
        quizResult.appendChild(result);
    });

    quizResult.style.display = 'block';
}
// Периоды таймера в секундах
const pomodoroDuration = 7; // в минутах
const shortBreakDuration = 7; // в минутах
const longBreakDuration = 5; // в минутах

// Декларирование переменных
let timer;
let timerDuration = pomodoroDuration;
const timerElement = document.getElementById('timer-display');
const statusButton = document.querySelector('.status');
const mainTimer = document.querySelector('.main_timer');
let pomodoroCount = 1;
let pomodoroCycleCount = 0;
const textPerElement = document.querySelector('.text_period');

document.addEventListener('DOMContentLoaded', function () {
    // Выбираем элемент "work"
    const workButton = document.querySelector('.work');

    // Применяем стили при загрузке страницы
    workButton.style.borderRadius = '4px';
    workButton.style.padding = '2px 12px';
    workButton.style.height = '28px';
    workButton.style.background = 'none rgba(0, 0, 0, 0.15)';
    workButton.style.boxShadow = 'none';
    workButton.style.color = 'white';
    workButton.style.opacity = '1';
    workButton.style.fontWeight = 'bold';

    // Загружаем начальную длительность Pomodoro в секундах
    const timerElement = document.getElementById('timer-display');
    timerElement.textContent = formatTime(pomodoroDuration);
});

// Функция для форматирования времени в минуты и секунды
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

// Функция для обновления счетчика выполненных Pomodoro
function updatePomodoroCount() {
    const taskNumElement = document.querySelector('.task_num');
    taskNumElement.textContent = `#${pomodoroCount}`;
}

// Функция для обновления отображения времени на таймере
function updateTimerDisplay() {
    const minutes = Math.floor(timerDuration / 60);
    const seconds = timerDuration % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // Добавьте следующие строки для обновления ширины timer_progress
    const timerLineElement = document.getElementById('timer-line');
    const timerProgressElement = document.querySelector('.timer_progress');
    const totalDuration = pomodoroDuration; // Здесь укажите общую длительность текущего периода
    const elapsedTime = totalDuration - timerDuration; // Вычисляем прошедшее время
    const progressWidth = (elapsedTime / totalDuration) * 100;
    timerProgressElement.style.transition = 'none';
    timerProgressElement.style.width = `${progressWidth}%`;
}

/* Функция для начала Pomodoro */
function startPomodoro() {
    // Уберем рамку и выделение с предыдущего активного элемента
    clearActiveStyle();
    // Применяем стиль к активному элементу (Pomodoro)
    workButton.style.borderRadius = '4px';
    workButton.style.padding = '2px 12px';
    workButton.style.height = '28px';
    workButton.style.background = 'none rgba(0, 0, 0, 0.15)';
    workButton.style.boxShadow = 'none';
    workButton.style.color = 'white';
    workButton.style.opacity = '1';
    workButton.style.fontWeight = 'bold';
    
    timerDuration = pomodoroDuration;
    document.body.style.backgroundColor = 'rgb(186, 73, 73)'; // Красный фон для Pomodoro
    document.querySelector('.status').style.color = 'rgb(186, 73, 73)'; // Установка цвета текста статуса

    textPerElement.textContent = `Time to focus!!`;
    updateTimerDisplay();
    startTimer();

    
}

/* Функция для начала Short Break */
function startShortBreak() {

    timerDuration = shortBreakDuration;
    document.body.style.backgroundColor = 'rgb(56, 133, 138)'; // Зеленый фон для Short Break
    document.querySelector('.status').style.color = 'rgb(56, 133, 138)'; // Установка цвета текста статуса
    updateTimerDisplay();
    textPerElement.textContent = `Time for a break!`;
    startTimer();

    // Уберем рамку и выделение с предыдущего активного элемента
    clearActiveStyle();
    // Применяем стиль к активному элементу (Short Break)
    shortBreakButton.style.borderRadius = '4px';
    shortBreakButton.style.padding = '2px 12px';
    shortBreakButton.style.height = '28px';
    shortBreakButton.style.background = 'none rgba(0, 0, 0, 0.15)';
    shortBreakButton.style.boxShadow = 'none';
    shortBreakButton.style.color = 'white';
    shortBreakButton.style.opacity = '1';
    shortBreakButton.style.fontWeight = 'bold';
}

// Функция для начала Long Break
function startLongBreak() {

    timerDuration = longBreakDuration;
    document.body.style.backgroundColor = 'rgb(57, 112, 151)'; // Синий фон для Long Break
    document.querySelector('.status').style.color = 'rgb(57, 112, 151)'; // Установка цвета текста статуса
    textPerElement.textContent = `Time for a break!`;
    updateTimerDisplay();
    startTimer();

    // Уберем рамку и выделение с предыдущего активного элемента
    clearActiveStyle();
    // Применяем стиль к активному элементу (Long Break)
    longBreakButton.style.borderRadius = '4px';
    longBreakButton.style.padding = '2px 12px';
    longBreakButton.style.height = '28px';
    longBreakButton.style.background = 'none rgba(0, 0, 0, 0.15)';
    longBreakButton.style.boxShadow = 'none';
    longBreakButton.style.color = 'white';
    longBreakButton.style.opacity = '1';
    longBreakButton.style.fontWeight = 'bold';
}

/* Функция для снятия рамки и выделения текста с предыдущего активного элемента */
function clearActiveStyle() {
    workButton.style.borderRadius = '';
    workButton.style.padding = '';
    workButton.style.height = '';
    workButton.style.background = '';
    workButton.style.boxShadow = '';
    workButton.style.color = '';
    workButton.style.opacity = '';
    workButton.style.fontWeight = '';

    shortBreakButton.style.borderRadius = '';
    shortBreakButton.style.padding = '';
    shortBreakButton.style.height = '';
    shortBreakButton.style.background = '';
    shortBreakButton.style.boxShadow = '';
    shortBreakButton.style.color = '';
    shortBreakButton.style.opacity = '';
    shortBreakButton.style.fontWeight = '';

    longBreakButton.style.borderRadius = '';
    longBreakButton.style.padding = '';
    longBreakButton.style.height = '';
    longBreakButton.style.background = '';
    longBreakButton.style.boxShadow = '';
    longBreakButton.style.color = '';
    longBreakButton.style.opacity = '';
    longBreakButton.style.fontWeight = '';
}


// Функция для управления интервальным таймером
function startTimer() {
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(function () {
        timerDuration--;
        updateTimerDisplay();

        if (timerDuration <= 0) {
            clearInterval(timer);
            if ((pomodoroCount-pomodoroCycleCount) % 2 === 0) {
                updatePomodoroCount();
                pomodoroCycleCount++;
                startPomodoro();
            } else if (((pomodoroCount-pomodoroCycleCount) % 2 === 1)&&(pomodoroCycleCount % 4 === 0)&&(pomodoroCycleCount>3)) {
                startLongBreak();
                pomodoroCount++;
            } else {
                startShortBreak();
                pomodoroCount++;
            }
        }
    }, 1000);

    statusButton.textContent = 'PAUSE';
    statusButton.onclick = pauseTimer;
}

// Функция для приостановки таймера
function pauseTimer() {
    clearInterval(timer);
    statusButton.textContent = 'START';
    statusButton.onclick = resumeTimer;
}

// Функция для продолжения таймера после приостановки
function resumeTimer() {
    startTimer();
}

// Функция для сброса таймера в начальное состояние
function resetTimer() {
    clearInterval(timer);
    pomodoroCount = 0;
    pomodoroCycleCount = 0;
    timerDuration = pomodoroDuration;
    updatePomodoroCount();
    updateTimerDisplay();
    statusButton.textContent = 'START';
    statusButton.onclick = startPomofocus;
}

// Функция для начала всего процесса (при нажатии "START")
function startPomofocus() {
    resetTimer();
    startPomodoro();
}

// Обработчики событий для кнопок выбора режима
const workButton = document.querySelector('.work');
const shortBreakButton = document.querySelector('.s_break');
const longBreakButton = document.querySelector('.l_break');

workButton.addEventListener('click', startPomodoro);
shortBreakButton.addEventListener('click', startShortBreak);
longBreakButton.addEventListener('click', startLongBreak);

// Отображение начального значения pomodoroDuration на странице при загрузке
timerElement.textContent = `${Math.floor(pomodoroDuration / 60)}:00`;

// Инициализация счетчика и отображения
updatePomodoroCount();

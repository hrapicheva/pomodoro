document.addEventListener('DOMContentLoaded', function() {
    const loginPopup = document.getElementById('loginPopup');
    const closePopupButton = document.getElementById('closePopupButton');
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.querySelector('.logout');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const userElement = document.querySelector('.user');
    const userImage = userElement.querySelector('img');
    const userText = userElement.querySelector('.login__text');
    const userLink = document.getElementById('userLink');
    const userLinkHTML = userLink.innerHTML; // Сохраняем HTML-код до авторизации


    // Проверяем, есть ли сохраненный пользователь
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
        userElement.innerHTML = savedUser.substring(0, 2);
        userText.style.display = 'none';
        userImage.style.display = 'none';
        logoutButton.style.display = 'block';
    }

    // Открывает модальное окно
    userElement.addEventListener('click', function() {
        loginPopup.style.display = 'block';
    });

    // Закрывает модальное окно
    closePopupButton.addEventListener('click', function() {
        loginPopup.style.display = 'none';
    });

    // Попытка входа
    loginButton.addEventListener('click', function() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Проверка логина и пароля (просто для примера)
        if (username && password) {
            // Сохраняем пользователя
            localStorage.setItem('user', username);
            userElement.innerHTML = username.substring(0, 2);
            userText.style.display = 'none';
            userImage.style.display = 'none';
            logoutButton.style.display = 'block';

            // Закрываем модальное окно
            loginPopup.style.display = 'none';
        } else {
            // Вывод ошибки или других действий
            alert('Invalid login or password');
        }
    });

    // Выход из аккаунта
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('user');
        userElement.innerHTML = '';
        userText.style.display = 'block';
        userImage.style.display = 'block';
        logoutButton.style.display = 'none';
        // При выходе из аккаунта
        userLink.innerHTML = userLinkHTML; // Восстанавливаем login

        // Закрываем модальное окно
        loginPopup.style.display = 'none';
    });
});

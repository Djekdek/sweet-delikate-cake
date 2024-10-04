//Меню бургер
document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('#burger-button'); // Бургер-кнопка
    const menu = document.querySelector('#menu'); // Меню, яке приховується/відкривається
    const menuItems = document.querySelectorAll('.menu__item a'); // Пункти меню

    // Клік на бургер-кнопку: відкриває/закриває меню
    burgerButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Клік на пункти меню: закриває меню
    menuItems.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
});


//Анімація появи через певний час
document.addEventListener('DOMContentLoaded', function() {
    const contentBlocks = document.querySelectorAll('.animation_block');
    const visibilityDuration = 500; // Час (в мс), через який додається клас "visible"
    let blockTimers = new Map(); // Для зберігання таймерів для кожного блоку

    function checkVisibility() {
        contentBlocks.forEach(block => {
            const blockPosition = block.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Перевіряємо, чи знаходиться блок у видимій частині екрану
            if (blockPosition < windowHeight && blockPosition > 0 && !block.classList.contains('visible')) {
                // Якщо блок видно, і він ще не анімований
                if (!blockTimers.has(block)) {
                    // Стартуємо таймер для блоку
                    const timer = setTimeout(() => {
                        block.classList.add('visible'); // Додаємо клас через 0.5 секунди
                        blockTimers.delete(block); // Видаляємо блок з таймерів
                    }, visibilityDuration);

                    blockTimers.set(block, timer); // Зберігаємо таймер
                }
            } else {
                // Якщо блок вийшов з видимої зони, скасовуємо таймер (якщо він є)
                if (blockTimers.has(block)) {
                    clearTimeout(blockTimers.get(block));
                    blockTimers.delete(block);
                }
            }
        });
    }

    // Викликаємо функцію під час прокрутки
    window.addEventListener('scroll', checkVisibility);

    // Викликаємо функцію при завантаженні сторінки, щоб анімувати блоки, які вже у видимій зоні
    checkVisibility();
});

//Анімація появи елементів в задежності від прокрутки екрану в низ.

document.addEventListener('DOMContentLoaded', function() {
    const contentBlocks = document.querySelectorAll('.scroll_animation_block'); // Знаходимо всі блоки з класом .content-block

    // Функція для перевірки, чи блок у видимій зоні
    function checkVisibility() {
        contentBlocks.forEach(block => {
            const blockPosition = block.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (blockPosition < windowHeight - 300) { // Коли блок знаходиться на 100px вище нижньої границі вікна
                block.classList.add('visible'); // Додаємо клас для анімації
            }
        });
    }

    // Викликаємо функцію під час прокрутки
    window.addEventListener('scroll', checkVisibility);

    // Викликаємо функцію одразу, щоб анімувати блоки, які вже у видимій зоні при завантаженні
    checkVisibility();
});

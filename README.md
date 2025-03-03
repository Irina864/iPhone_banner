# Верстка баннера для IPhone:

- полноэкранная веб-страница (баннер)
- для мобильных устройств iPhone SE, 8+, 11 pro, 14, 14 plus, 14 pro max.
- все в портретной ориентации
- на 6 языках.
- пропорциональное изменение размеров экрана.
- переключение языка путем передачи параметра 'lang' в строке запроса (?lang=en).

Технологии: HTML5, CSS3, нативный JavaScript. Сборщик Webpack (Gulp, Vite).

Информация по макету:
В макете используются шрифты группы SF Pro (системные шрифты iOS).
Крестик, Restore, Terms of Use, Privacy Policy являются ссылками, укажите атрибут href='#'.
При нажатии на кнопку "Continue" происходит переход по ссылке. Каждой ячейке в панели выбора соответствуют ссылки, сверху вниз:

- https://apple.com/
- https://google.com/

Ссылка на макет: https://www.figma.com/design/V8JIRcYYWEgWPGAwFr5rok/Test-Task?node-id=0-1&p=f

## Deploy

https://harmonious-kashata-c8dd59.netlify.app/

## Команды

### Сборка проекта без оптимизации

```shell
npm run build-dev
```

### Сборка проекта с оптимизацией

```shell
npm run build-prod
```

# Animation and css

[![Build status](https://ci.appveyor.com/api/projects/status/9m8qvfcfgd2ynx3x?svg=true)](https://ci.appveyor.com/project/bugagi67/animation-and-css)

GH-PAGES - https://bugagi67.github.io/Animation-and-css/

**Collapse**



В рамках реализации большого портала вам необходимо сделать виджет "collapsible"-контейнеров, который может разворачиваться и сворачиваться.

Описание
Подобный виджет есть в рамках Bootstrap, но как мы с вами "знаем": "jQuery не нужен", поэтому вам нужно реализовать такой же виджет на чистом JS.

![](https://github.com/netology-code/ahj-homeworks/raw/video/anim/pic/collapse.gif)

Авто-тесты на данную задачу не нужны.

**Callback Chat (задача со звёздочкой)**

Важно: эта задача не является обязательной. Её (не)выполнение не влияет на получение зачёта по ДЗ.

Вам поставили задачу сделать виджет обратной связи на портал компании. Необходимо это сделать. Ключевое тут, конечно же, анимации - поскольку всё остальное вы уже умеете.

Описание
Реализуйте показ и скрытие, как это отображено на картинке:

![](https://github.com/netology-code/ahj-homeworks/raw/video/anim/pic/callback.gif)

Обратите внимание, что при нажатии на кнопку, сама кнопка тоже исчезает, а при скрытии формы - появляется.

Длительность анимации, использованная в оригинале, - 100ms, функция анимации - linear.

Организуйте код в виде виджета, готового к установке через базовый контейнер в html и инициализацию.

Авто-тестов на данную задачу не нужно.

**Liker (задача со звёздочкой)**

Важно: эта задача не является обязательной. Её (не)выполнение не влияет на получение зачёта по ДЗ.

Легенда
Все любят кнопки лайков, вам поручили реализовать одну из них.

Описание
Реализуйте поведение, указанное на картинке:

![](https://github.com/netology-code/ahj-homeworks/raw/video/anim/pic/liker.gif)

Данные для анимации:

Изображение - heart.png
Высота, на которой исчезают лайки - 200px
Макс. отклонение влево/вправо - 50px
Скорость анимации - 500ms
Функция анимации - ease-out (можете использовать другую)
Возможные траектории (траектория выбирается рандомно):
0% - центр, 25% - влево, 50% - центр, 75% - вправо, 100% - центр
0% - центр, 25% - центр, 50% - вправо, 75% - влево, 100% - центр
0% - центр, 25% - центр, 50% - влево, 75% - вправо, 100% - центр
0% - центр, 25% - вправо, 50% - центр, 75% - влево, 100% - центр
Важно: обратите внимание, что элементы после "исчезания" должны удаляться из DOM. Используйте для этого соответствующие события, а не таймауты.
[![Build status](https://ci.appveyor.com/api/projects/status/4742m7op4s3rwr5b?svg=true)](https://ci.appveyor.com/project/kiiyas/008-containers-map)

## Map

### Легенда

Вы решили упорядочить работу с ошибками в своём приложении, а именно ввести цетрализованно числовой код ошибки и её описание. И при генерации любых ошибок в коде приложения брать их из централизованного хранилища.

### Описание

Создайте свой класс `ErrorRepository` внутри которого храните `Map`, в котором ключ - это код ошибки (число), а значение - текстовое описание (человекочитаемое).

Реализуйте метод `translate(code)`, позволяющий по коду получить текст ошибки, а в случае отсутствия подобного кода возвращать строку `'Unknown error'`.

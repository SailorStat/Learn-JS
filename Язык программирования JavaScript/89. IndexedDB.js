//? IndexedDB
//* IidexedDB - более мощная база данных, чем localStorage
//    доступно несколько типов ключей, и почти все типы значений
//    поддерживает транзакции для надёжности
//    поддерживает индексы и запросы в диапозоне ключей
//    позволяет хранить больше данных

// Обычно эти можности занчительно больше, чем надо. Достаточно и localStorage
// IndexedBD обычно используется для офлайн приложений


//* Открыть базу данных
// const openRequest = indexedDB.open(name, version)
//    name - название базы данных, строка
//    version - версия базы данных, положительное целое число (по умолчанию 1)

// У нас может быть большое количество баз данных с разными именами,
//    но все они существуют в рамках источника

// После открытия необходимо назначить обработчкии событий для объекта openRequest
//    success - база данных готова к работе, готов "объект базы данных" openRequest.result,
//        его следует использовать для дальнейших вызовов
//    error - не удалось открыть базу данных
//    upgradeneeded - база данных открыта, но уже устарела

// IndexedDB имеет встроенный механизм "версионирования схемы",
//    который отсутствует в серверных базах данных

// В отличие от серверных баз данных, IndexedDB работает на стороне клиента в браузере, куда нет доступа
// Когда выходит новая версия, нам надо обновить базу данных
// Если локальная версия базы данных меньше, чем в open, то срабоатет событие upgraadeneeded,
//    и мы можем сравнить версии и по мере необходимости обновить структуры
// Также событие сработает, если базы данных ещё не существует,
//    так что в этом обработчике можем выполнить инициализацию

// При первой публикации приложения мы открываем базу данных с версией 1
//    и выполняем инициализацию в обработчике upgradeneeded
{
  const openRequest = indexedDB.open('store', 1)

  openRequest.onupgradeneeded = () => {
    // cрабатывает, если у клиента нет базы данных
    // ...выполнить инициализацию
  }

  openRequest.onerror = () => {
    console.error(`Error`, openRequest.error)
  }

  openRequest.onsuccess = () => {
    const db = openRequest.result
    // продолжаем работу с db
  }
}

// Когда публикуем вторую версию
{
  const openRequest = indexedDB.open('store', 2)

  // проверить существование базы данных, обновить при необходимости
  openRequest.onupgradeneeded = () => {
    // версия базы данных меньше 2
    const db = openRequest.result
    switch(db.version) {
      case 0:
        // версия 0 означает, что на клиенте нет базы данных
        // выполнить инициализацию
      case 1:
        // на клиенте версия базы данных 1
        // обновить
    }
  }
}


//* const deleteRequest = indexedDB.deleteDatabase(name)
// deleteRequest.onsuccess/onerror отслеживают результат


//* Проблема парарлельного обновления
// Если посетитель открыл вкладку в старой версии, а потом ещё одну, которая уже в новой версии,
//    то если мы не разрвёём соединение с 1 версией, то у 2 возникнет событие blocked вместо success
// Чтобы этого избежать, нужно разорвать соединение с 1 версией, обнаружив событие versionchange
//    Нужно предложить перезагрузить страницу
{
  const openRequest = indexedDB.open('store', 2)

  openRequest.onupgradeneeded = () => {
    // код из прошлого примера
  }

  openRequest.onerror = () => {
    // код прошлого примера
  }

  openRequest.onsuccess = () => {
    const db = openRequest.result

    db.onversionchange = () => {
      db.close()
      alert('Вышло обновление, перезагрузите страницу')
    }

    // база данных доступна, как обхект db
  }

  openRequest.onblocked = () => {
    // есть другое соединение к той же базе
    // и оно не было закрыто после срабатывания db.onversionchange
  }
}
// Здесь мы делаем 2 вещи:
//    1. Добавляем обработчик db.onversionchange после успешного открытия базы,
//        чтобы узнать о попытке параллельного обновления
//    2. Добавляем обработчик openRequest.onblocked для ситуаций, когда старое соединение не было закрыто.
//        Такое не произойдёт, если мы его закроем в db.onversionchange

// Также мы можем более мягко закрыть соединение в db.onversionchange,
//    предложив пользователю сохранить данные
// Новое обновляющее соединение будет заблокировано сразу после того.
//    как обработчик db.onversionchange завершитсяя, не закрыв соединение,
//    и мы можем попросить в новой вкладке посетителя закрыть старые вкладки (до обновления)

// Такое происходит редко, но мы должны его как-то обрабатывать,
//    хотя бы добавить обработчик onblocked, чтобы скрипт не умирал, дивляя посетителя


//* Хранилище объектов
// Чтобы сохранить в IndexedDB, нужно хранилище объектов
// Хранилище объектов - основная концепция IndexedDB. В других базах это таблицы или коллекции
// В базе может быть много хранилищ: для пользователей, для товаров и т.д.

// Несмотря на название, в хранилище объектов могут храниться примитивы
//    И даже сложные объекты

// IndexedDB использвет стандартный алгоритм сериализации для клонирования и хранения объекта
//    Как JSON.stringify, но более мощный, способный на гораздо больше типов
//    Но нельзя сохранить циклические ссылки

// Каждому значению в хранилище должен соответствовать уникальный ключ
// Ключ должен быть один из типов: number, date, string, binary или array

//* Создание хранилища объектов
// db.createObjectStore(name [, keyOptions])
//    name - название хранилища
//    keyOptions - объект со свойствами
//        keyPath - путь к свойству объекта, которое IndexedDB будет использовать в качестве ключа,
//            например id
//        autoincrement - при true ключ будет создаваться автоматически для новых объектов,
//            как постоянно увеличивающееся число
// Если при создании объекта не указать keyOptions,
//    то нам потребуется явно указать ключ позже при сохранении объекта
// Например, это хранилище объектов использует свойство id, как ключ:
//    db.createObjectStore('books', {keyPath: 'id'})

//* Хринилище объектов можно создавать.изменять только при обновлении версии базы данных
//*   в обработчие upgradeneeded
// Вне обработчика мы сможем добавлять, удаять, обновлять данные, но хранилища изменяются только
//    при обновлении

// Для обновления базы данных есть 2 основных подхода:
//    1. Мы можем реализовать функции обновления по версиям: с 1 на 2, со 2 на 3 и т.д.
//        Потом в upgradeneeded сравнить версии и запустить процессы обновления для каждой
//        промежуточной версии
//    2. Или мы можем взять список существующих хранилищ объектов, используя db.objectStoreNames
//        Этот объект является DOMStringList, в нём есть метод contains(name),
//        использая который можно проверить существование хранилища
//        Посмотреть, какие хранилища есть и содать те, которых нет

// Для простых баз данных такой подход может быть проще и предпочтительнее
{
  const openRequest = indexedDB.open('db', 2)

  openRequest.onupgradeneeded = () => {
    const db = openRequest.result
    if (!db.objectStoreNames.contains('book')) {
      db.createObjectStore('book', {keyPath: 'id'})
    }
  }
}

// Чтобы удалить хранилище объектов
{
  db.deleteObjectStore('book')
}


//* Транзакция - группа операций, которые должны быть или выполнены все, или невыполнены никто

//* Все операции с данными в IndexedDB делаются только внутри транзакций
// db.transaction(store [, type])
//    store - название хранилища, к которому транзакция получит доступ
//    type - тип транзакции
//        readonly - только чтение
//        readwrite - только чтени и запись (создание и удаление не доступно)
// Есть ещё versionchange. Такие транзакции могут делать людые операции, но тх нельзя создать вручную
//    Она создаётся, когда происходит событие upgradeneeded,
//    поэтому только она может создавать и удалять хранилище объектов

//todo Несколько типов транзакций нужно для оптимизации
//todo    несколько readonly могут работать и не блокировать друг друга
//todo    readwrite выстраиваются в очередь, и одна операция не начнётся, пока не закончилась другая

// Тосле того, как транзакция создана, мы можем добавить объекты в хранилище
{
  const transaction = db.transaction('books', 'readwrite')

  const books = transaction.objectStore('books')

  const book = {
    id: 'JS',
    price: 10,
    created: new Date()
  }

  const request = books.add(book)

  request.onsuccess = () => {
    console.log('Книга добавлена в хранилище', request.result)
  }

  request.onerror = () => {
    console.log('Ошибка: ' + request.error)
  }
}


//* Методы хранилища объектов 
// put(value [, key]) - добавляет занчение value в хранилище. Ключ key надо указать,
//    если при создании хранилища объектов не было указано свойство keyPath или autoIncrement
//    Если такое значание есть, то оно будет перезаписано
// add(value [, key]) - добавит значение, если его нет, иначе выдаст ошибку ConstraintError

// Аналогично открытию базы, мы отправляем запрос books.add(book)
//    и после ожидаем события onsuccess и onerror
// request.result - ключ для нового объекта
// Ошибка попадает в request.result (если есть)


//* Автоматическая фиксация транзакций
// Когда все запросы завершены и очередь микрозадач пуста, то транзакция завершится автоматически
// Побочный эффект: мы не можем заставить транзакцию ждать выполнения fetch или setTimeout

// По этому поводу авторы спецификации IndexedDB считают, что транзакции должны совершаться быстро

// Из этих соображений надо заранее вызвать fetch, подготовить данные,
//    а потом составляем запрос к базе данных

// Чтобы поймать успешное выполнение транзакции используется обработчик complete

// Для отмены операции вручную нужно вызвать transaction.abort()


//* Обработка ошибок
// Запросы на запись могут выполняться неудачно
// Это может быть не только на нашей стороне, но, например, из-за превышения размеров хранилища

//todo При ошибке транзакция отменятеся полностью
// Если мы хотим продолжить транзакцию (попробовать другой запрос без отмены изменений)
//    это тоже возможно
// Для этого в обработчике request.onerror надо вызвать event.preventDefault()


//* Делегирование событий
// События IndexedDB всплывают: запрос -> транзакция -> база данных, 
//    поэтому не обязательно вешать обработчик onerror и onsuccess на каждый запрос
// Все события являются DOM-событиями с фазами перехвата и всплытия,
//    но обычно используются только всплытия
{
  db.onerror = event => {
    const request = event.target
    console.log('Ошибка: ' + request.error)
  }
}
// Если мы уже обработали ошибку и не хотим, чтобы она всплывала, то используем event.stopPropagation()


//* Поиск по ключам
// Есть 2 основных вида поиска в хранилище объектов:
//    1. По ключу или по диапазону ключей. То есть по book.id в хранилище books
//    2. По полям объекта, например, book.prise

//* Работа с ключами и диапазоном ключей
// Методы поиска поддерживают либо точные ключи, либо запросы с диапазоном

// Способы создания диапазонов:
// IDBKeyRange
//    .lowerBound(lower [, open]) - означает > lower или ≥ lower, если open это true
//    .upperBound(upper [, open]) -  тоже, только < или ≤
//    .bound(lower, upper [, lowerOpen, upperOpen]) - между lower и open,
//        если lowerOpen и upperOpen true, то соответствующая опция включительно
//    .only(key) - диапазон, который состоит только из одного ключа key

// Все эти методы принимают аргумент query, который модет быть ключом или диапазоном ключенй
// store
//    .get(query) - поиск первого значения по ключу или диапазону
//    .getAll([query], [count]) - поиск всех значений, можно ограничить с помощью count
//    .getKey(query) - поиск первого ключа, который удовлетворяет запросу. Обычно первый ключ
//    .getAllKeys([query], [count]) - поиск всех ключей, удовлетворяющих запросу,
//        обычно передаётся диапазон, возможно ограничить поиск передав count
//    .getCount([query]) - получить общее количество ключей, которые удовлетворяют запросу,
//        обычно передаётся диапазон

// получить 1 книгу: books.get('js')
// получить все книги с 'css' < id < 'html': books.getAll(IDBKeyRange.bound('css', 'html'))
// получить все книги с 'html' ≤ id: books.getAll(IDBKeyRange.lowerBound('html', true))
// получить все книги: books.getAll
// получить все книги id ≥ 'js': books.getAllKeys(IDBKeyRange.loweerBound('js', true))

//todo Хранилище объектов всегда отсортировано, 
//todo    по-этому всегда возврвщаются значения отсортированные по ключам


//* Поиск по индексированному полю
// Для поиска по другим полям объекта нам нужно создать дополнительную структуру данных (index)
// Индекс является расширением к хранилищу, которое отследивает данное поле объекта
// Для каждого значения этого поля хранится список ключей для объектов, которые имеют это значение
// objectStore.createIndex(name, keyPath [, option])
//    name - название индекса
//    keyPath - путь к полю объекта, которое индекс отследивать (мы собираемся сделать поиск по этому полю)
//    option - необязательный объект со свойствами
//        unique - если true, тогда в хранилище может быть только один объект с заданным значением keyPath
//            Если мы попытаемся сделать дубликат, то индекс сгенерирует ошибку
//        multiEntry - используется только, если keyPath является массивом
//            Но если мы укажем true в multiEntry, тогда индекс будет хранить список объектов хранилища
//            для каждого значения в этом массиве
//            Таким образом элементы массива становятся ключами индекса
// В нашем примере мы храним книги с ключом id
// Допустим, мы хотим сделать поиск по полю price
{
  openRequest.onupgradeneeded = () => {
    const books = db.createObjectStore('books', {keyPath: 'id'})
    const index = inventory.createIndex('price_idx', 'price')
  }
}
//    - Индекс будет отслеживать поле прайс
//    - Поле price не уникальное, у нас может быть несколько книг с одинаковой ценой,
//        поэтому мы не устанавливаем опцию unique
//    - Поля price не являются массивом, поэтому мы не устанавливаем флаг multiEntry

// Теперь, когда мы зотим найти объект по цене, мы просто применяем теже методы поиска к индексу
{
  const transaction = db.transaction('books') // readonly
  const books = transaction.objectStore('books')
  const priceIndex = books.index('prise_idx')

  const request = priceIndex.getAll(10)
  
  request.onsuccess = () => {
    if (request.result != undefined) {
      console.log('Книги', request.result)
    } else {
      console.log('Нет таких книг')
    }
  }
}

// Также мы можем использовать IDBKeyRange, чтобы создать диапазон и найти дешёвые/дорогие книги
{
  // Найдём книги с ценой < 5
  const request = priceIndex.getAll(IDBKeyRange.upperBound(5))
}
// Индексы внутренне отсортированы по полю поддерживаемого объекта, в нашем случае по price
// Поэтому результат будет уже отсортирован по полю price


//* Удаление из хранилища
{ priceIndex.delete('js') // - удалит книгу с id = js
}
// Если нам нужно удалить книги, основываясь на другом параметре,
//    мы сначала для него должны найти ключ в индексе
{
  const request = priceIndex.getKey(5)

  request.onsuccess = () => {
    const id = request.result
    const deleteRequest = books.delete(id)
  }
}
books.clear() // удалить всё


//* Курсоры
// Такие методы как getAll/getAllKeys возвращают массив ключей/значений
// Но хранилище объектов может быть огромным, больше, чем доступно памяти
// Тогда метод getAll выдаст ошибку
//* Объект cursor идёт по хранилищу объектов с заданным запросом (query) и возвращает пары ключ/значение
//*   по очереди, а не все вместе
// const request = store.openCursor(query [, direction])
//    query - ключ или диапазон ключей, как getAll
//    direction - необязательный аргумент, доступные занчения в виде строки:
//        next - по умолчанию проходит от самого маленького ключа к большому
//        prev - обратный порядок, от большого к меньшему
//        nextunique, prevunique - тоже самое,
//            только не возвращает последующие записи с той же парой ключ/значение (как new Set)

//* Основное отличие: onsuccess генерируется многократно, один раз для каждого результата
{
  const transaction = db.transaction('books')
  const books = transaction.objectStore('books')

  const request = books.openCursor()

  request.onsuccess = () => {
    const cursor = request.result
    if (cursor) {
      const key = cursor.key // ключ книги, который вернул cursor (поле id)
      const value = cursor.value // объект книги, который вернул курсор
      cursor.continue()
    } else {
      console.log('Книг больше нет')
    }
  }
}

//* Методы cursor
// advance(count) - продвинуть курсор на count позиций, пропустив значения
// continue([key]) - продвинуть курсор к следующему значению или до позиции сразу после key (если указан)

// Независимо от наличия значений вызывается onsuccess
// Если значений нет, то request.result === undefined

// Точно также cursor может работать и с индексами
{
  const request = priceIndex.openCursor(IDBKeyRange.upperBound(5))

  request.onsuccess = () => {
    const cursor = request.result
    if (cursor) {
      const primaryKey = cursor.primaryKey // следующий ключ в хранилище объектов (поле id)
      const key = cursor.key // следующий ключ индекса (price)
      const value = cursor.value // следующее значение в хранилище объектов
      cursor.continue()
    } else {
      console.log('Книг больше нет')
    }
  }
}


//* Обёртка для промисов
// Доавлять к каждому запросу обработчик успеха и ошибки немного громоздко
// Можно использовать делегирование событий
// Но использовать async/await ещё удобнее
// https://github.com/jakearchibald/idb - обёртка над промисами, которая создаёт глобальный idb объект
//    с промисифицированными IndexedDB методами

// Тогда вместо onsucces и onerror можно писать так:
{(async () => {
  const db = await idb.openDb('store', 1, db => {
    if (db.oldVersion == 0) {
      db.createObjectStore('books', {keyPath: 'id'})
    }
  })

  const transaction = db.transaction('books', 'readwrite')
  const books = transaction.objectStore('books')

  try {
    await books.add()
    await books.add()

    await transaction.complete

    console.log('сохранено')
  } catch(err) {
    console.log('ошибка', err.message)
  }
})()}
// теперь у нас красивый плоский асинхронный код


//* Обработка ошибок
// Если не перехватим ошибку, то она вывалится наружу, вверх по стеку вызовов,
//    до близжайшего внешнего try..catch
// необработанная ошибка становится событием unhandled promise rejection в объекте window

// Их можно обработать так:
{
  window.addEventListener('unhandledrejection', event => {
    const request = event.target // объект запроса IndexedDB
    const error = event.reason // необработанный объект ошибки, как request.error
    // сообщить об ошибке
  })
}


//* Подводный камень: "Inactive transaction"
// Транзакции автоматически завершаются,
//    как только браузер завершает работу с текущим кодом и макрозадачу
// Следующие операции выдадут ошибку
// Решение такое же: предварительно вычислить, потом вызвать


//* Получение встроенных методов
// Когда нам нужно получить доступ к оригинальному request, то его можно получить через promise.request

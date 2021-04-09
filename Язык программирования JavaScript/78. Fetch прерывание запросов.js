//? Fetch: прерывание запроса
// Для прерывания запросов существует встроенный объект AbortController()
// он используется для прерывания не только fetch, но и других асинхронных задач
const controller = new AbortController();
// у него есть только 1 метод abort() и одно свойство signal

// при вызове controller.abort() у свойства в fetch controller.signal.aborted становится значение true
// fetch прерывается
// signal: controller.signal

(async () => {
  try {
    const controller = new AbortController()
    const response = await fetch('https://v004.radikal.ru/2104/16/6247723880-3-ff56a8d549ba8855a855b39ff4c55bbc.mp4', {
      signal: controller.signal
    })

    controller.abort()
  } catch(err) {
    
    console.log(1)
    if (err.name = 'AbortError') {
      console.log('Прервано из-за ошибки ' + err.name)
    } else {
      throw err
    }
  }
})();


// controller.signal можно повесить сразу на несколько fetch
// и одним controller.abort() отменить все обработчики
// только нужно не забыть обработать все ошибки


// отслеживать событие также можно через событие abort
(async () => {
  const urls = ['https://v004.radikal.ru/2104/16/6247723880-3-ff56a8d549ba8855a855b39ff4c55bbc.mp4']
  const controller = new AbortController()

  const ourJob = new Promise((resolve, reject) => {
    controller.signal.addEventListener('abort', reject)
  })

  const fetchJobs = urls.map(url => fetch(url, {
    signal: controller.signal
  }))
  controller.abort()
  const results = await Promise.all([...fetchJobs, ourJob])
})()
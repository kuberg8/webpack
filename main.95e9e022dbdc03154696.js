(()=>{"use strict";var e,t={3038:(e,t,n)=>{const a=' <section class="px-4 py-5 mb-5 text-center container"> <i class="fas fa-globe pb-2" style="font-size:60px"></i> <h1 class="display-5 fw-bold">Hello world!</h1> <div class="col-lg-6 col-md-10 mx-auto"> <p class="lead mb-4"> This website was created to archive JavaScript development knowledge and show programming experience, as well as explore the static module builder — <a target="_blank" style="text-decoration:none" href="https://webpack.js.org/">Webpack</a>. Designed as a single page application. </p> <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"> <a href="AwesomeProject.zip" download class="btn btn-outline-primary btn-lg px-4 gap-3"> Download App </a> </div> </div> </section> <section> <div class="container py-5 lead" style="max-width:90%"> <h1 class="border-bottom pb-3 mb-4">JavaScript</h1> <iframe width="653" height="380" src="https://www.youtube.com/embed/eSaF8NXeNsA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="frame"></iframe> <p class="p"> Если вы не изучали JavaScript с самого начала, то осваивать его современную версию сложно. Экосистема быстро растёт и меняется, так что трудно разобраться с проблемами, для решения которых придуманы разные инструменты. Цель статьи — рассказать о контексте, в котором инструменты в JavaScript развивались вплоть до 2017-го. </p> <p class="p"> Примерно с 2010-го развиваются несколько конкурирующих диспетчеров пакетов, помогающих автоматизировать скачивание и обновление библиотек из центрального репозитория. Bower был самым популярным в 2013-м, но к 2015-му уступил пальму первенства npm. Надо сказать, что с конца 2016-го yarn широко используется в качестве альтернативы интерфейсу npm, но под капотом он всё ещё работает с npm-пакетами. Изначально npm создавался как диспетчер пакетов специально для node.js, среды исполнения JavaScript, предназначенной для серверов, а не фронтенда. Это полезно, когда вы станете работать над проектом совместно с другими разработчиками: вместо общего доступа к папке node_modules (которая может быть очень большой) достаточно открыть доступ к файлу package.json, и другие разработчики смогут автоматически устанавливать нужные пакеты с помощью команды npm install. </p> <h3 class="py-4"> Использование бандлера (bundler) JavaScript-модулей (webpack) </h3> <p class="p"> В большинстве языков программирования есть возможность импортирования кода из одного файла в другой. Изначально в JS такой возможности не было, потому что этот язык разрабатывался только для исполнения в браузере, без доступа к файловой системе на клиентской машине (по причинам безопасности). Так что долгое время для организации JS-кода в нескольких файлах требовалось загружать каждый файл с глобально доступными переменными. </p> <p class="p"> В 2009-м был запущен проект CommonJS, в рамках которого планировалось создать спецификации внебраузерной экосистемы для JavaScript. Большая часть CommonJS была посвящена спецификациям модулей, позволявших JS импортировать и экспортировать код между файлами как во многих других языках, без обращения к глобальным переменным. Самой известной реализацией модулей CommonJS стал node.js. </p> <p class="p"> Загрузка модулей работает прекрасно, поскольку node.js — это серверный язык с доступом к файловой системе. Также ему известно расположение всех npm-модулей, поэтому вместо require(\'./node_modules/moment/min/moment.min.js) можно писать просто require(\'moment\'), но если вы попробуете использовать приведённый код в браузере, то получите ошибку, в которой говорится, что require не определён. У браузера нет доступа к файловой системе, поэтому такая загрузка модулей реализована очень хитро: файлы нужно грузить динамически, синхронно (замедляет исполнение) или асинхронно (могут быть проблемы с синхронизацией). </p> <p class="p"> И здесь появляется бандлер (bundler). Это инструмент для сборки модулей в единые пакеты, имеющий доступ к файловой системе. Получающиеся пакеты совместимы с браузером, которому не нужен доступ к файловой системе. В нашем случае бандлер нужен для поиска всех выражений require (имеющих ошибочный, с точки зрения браузера, JS-синтаксис) и замены на настоящее содержимое каждого требуемого файла. В финале мы получаем единый JS-файл без выражений require </p> <h3 class="py-4"> Транспилирование кода ради новых возможностей языка (babel) </h3> <p class="p"> Транспилирование — это конвертация кода в другой, похожий язык. Это важная часть фронтенд-разработки: поскольку в браузерах медленно появляются новые фичи, были созданы языки с экспериментальными возможностями, которые транспилируются в совместимые с браузерами языки. </p> <p class="p"> Для JavaScript самым популярным транспилятором какое-то время был CoffeeScript (выпущен около 2010), а сегодня многие используют babel или TypeScript. CoffeeScript улучшает JavaScript за счёт серьёзного изменения языка — опциональное использование скобок, значимые отступы (whitespace) и т. д. Babel — это не новый язык, а транспилятор, который транспилирует JavaScript следующего поколения, имеющего возможности, пока недоступные во всех браузерах (ES2015 и выше), в старый и более совместимый JavaScript (ES5). Typescript — это язык, по существу аналогичный JavaScript следующего поколения, но с добавлением опциональной статичной типизации. Многие предпочитают babel, потому что он ближе к ванильному JavaScript. </p> <h3 class="py-4">Заключение</h3> <p class="p"> </p><ul> <li> <b>диспетчера</b> пакетов для автоматической загрузки сторонних пакетов; </li> <li> <b>бандлера</b> для создания единых файлов скриптов; </li> <li> <b>транспилятора</b> для использования будущих возможностей JS; </li> <li> <b>средства запуска задач</b> для автоматизации разных операций в процессе сборки. </li> </ul> <p></p> </div> </section> ';var l=n(7294);class i extends l.Component{constructor(e){super(e),this.state={themes:[{icon:"node-js",libraries:[{title:"Webpack",text:"это сборщик модулей. Он анализирует модули приложения, создает граф зависимостей, затем собирает модули в правильном порядке в один или более бандл.",link:"https://webpack.js.org/"},{title:"Lodash",text:"Lodash упрощает JavaScript, избавляя от хлопот при работе с массивами, числами, объектами, строками и т. Д.",link:"https://lodash.com/"},{title:"Moment",text:"это библиотека JavaScript, которая помогает анализировать, проверять, манипулировать и отображать дату и время в JavaScript очень простым способом",link:"https://momentjs.com/"},{title:"Axios",text:"Promise based HTTP client for the browser and node.js",link:"https://www.npmjs.com/package/axios"},{title:"Jest",text:"это фреймворк для тестирования JavaScript с акцентом на простоту.",link:"https://jestjs.io/ru/"},{title:"Eslint",text:"Cтатически анализирует ваш код, чтобы быстро находить проблемы. ",link:"https://eslint.org/"}]},{icon:"node",libraries:[{title:"Express",text:"Фреймворк web-приложений для Node.js",link:"https://expressjs.com/"},{title:"Socket.IO",text:"JavaScript-библиотека для веб-приложений и обмена данными в реальном времени.",link:"https://expressjs.com/"},{title:"MySql",text:"Это драйвер node.js для mysql. Он написан на JavaScript, не требует компиляции и имеет 100% лицензию MIT.",link:"https://www.npmjs.com/package/mysql"},{title:"MongoDB",text:"Официальный драйвер MongoDB для Node.js.",link:"https://www.npmjs.com/package/mongodb"},{title:"Passport",text:"Паспорт является Экспресс -Совместим промежуточным аутентификации для Node.js.",link:"https://www.npmjs.com/package/passport"},{title:"Http-errors",text:"Create HTTP errors for Express, Koa, Connect, etc. with ease.",link:"https://www.npmjs.com/package/http-errors"},{title:"Nodemailer",text:"это модуль для приложений Node.js, позволяющий легко отправлять электронные письма.",link:"https://nodemailer.com/about/"},{title:"Cors",text:"CORS - это пакет node.js для предоставления промежуточного программного обеспечения Connect / Express, которое можно использовать для включения CORS с различными параметрами.",link:"https://www.npmjs.com/package/cors"},{title:"Chalk",text:"Terminal string styling",link:"https://www.npmjs.com/package/chalk"}]},{icon:"react",libraries:[{title:"Redux",text:"REDUX — это JavaScript библиотека, предназначенная для управления состоянием приложения. Позволяет упростить передачу данных через контекст.",link:"https://redux.js.org/"},{title:"Redux Form",text:"Redux-form - это библиотека Redux, которая позволяет управления состоянием форм в приложении React.",link:"https://redux-form.com/8.3.0"},{title:"Redux Thunk",text:"Redux Thunk это middleware библиотека, которая позволяет вам вызвать action creator, возвращая при этом функцию вместо объекта.",link:"https://github.com/reduxjs/redux-thunk"},{title:"React Redux",text:"React Redux - это официальная привязка React для Redux. Позволяет вашим компонентам React считывать данные из хранилища Redux и отправлять действия в хранилище для обновления данных.",link:"https://react-redux.js.org"},{title:"React Router",text:"React Router - библиотека маршрутизации для React. js, которая синхронизирует пользовательский интерфейс с URL-адресом. Поддерживает ленивую загрузку кода, динамическое сопоставление маршрутов и обработку перехода по местоположению.",link:"https://reactrouter.com/"},{title:"Reselect",text:"Reselect - это библиотека для создания мемоизированных селекторов. Используя мемоизацию, мы можем предотвратить ненужные перерисовки. Selector - это функция которая получает state, делает выборку данных из state.",link:"https://github.com/reduxjs/reselect"},{title:"React Native",text:"React Native - это кроссплатформенный фреймворк с открытым исходным кодом для разработки нативных мобильных приложений на JavaScript и TypeScript, созданный.",link:"https://material-ui.com/ru/"},{title:"MATERIAL-UI",text:"MATERIAL-UI - это UI библиотека с React компонентами для быстрой и легкой веб-разработки.",link:"https://material-ui.com/ru/"},{title:"Testing Library",text:"Простые и полные утилиты тестирования для React",link:"https://testing-library.com/"},{title:"React-calendar",text:"Ultimate calendar for your React app.",link:"https://www.npmjs.com/package/react-calendar"},{title:"React-select",text:"Гибкий и красивый элемент управления Select Input для ReactJS",link:"https://react-select.com/home"},{title:"React-input-mask",text:"Компонент маскирования ввода для React.",link:"https://www.npmjs.com/package/react-input-mask"},{title:"React-validation",text:"Component to provide simple form validation for React components.",link:"https://www.npmjs.com/package/react-validation"},{title:"React Table",text:"Создавайте и проектируйте мощные интерфейсы DataGrid, сохраняя при этом 100% контроль над разметкой и стилями.",link:"https://react-table.tanstack.com/"},{title:"Transition",text:"Компонент Transition позволяет описывать переход от одного состояния компонента к другому с течением времени с помощью простого декларативного API.",link:"https://reactcommunity.org/react-transition-group/transition"}]},{icon:"vuejs",libraries:[{title:"VueX",text:"Паттерн управления состоянием + библиотека для приложений на Vue.js",link:"https://vuex.vuejs.org/ru/"},{title:"Vuelidate",text:"Это библиотека, которая упрощает работу с проверкой форм, позволяет писать свои валидаторы.",link:"https://vuelidate.js.org/"},{title:"Vue Router",text:"Официальная библиотека маршрутизации для Vue.js.",link:"https://router.vuejs.org/ru/"},{title:"Vuetify",text:"Это библиотека пользовательского интерфейса Vue.",link:"https://vuetifyjs.com/en/"},{title:"Vue Test Utils",text:"Это официальная библиотека утилит модульного тестирования для Vue.js.",link:"https://vue-test-utils.vuejs.org/"},{title:"V-mask",text:"Маленькая библиотека входных масок для vue.js на основе text-mask-core (~ 5kb), представленная как директива.",link:"https://vuejs-tips.github.io/vue-the-mask/"},{title:"Vue-datepicker",text:"Компонент Datepicker для Vue",link:"https://www.npmjs.com/package/vue2-datepicker"},{title:"Vue-awesome-swipe",text:"Swiper component for Vue.",link:"https://www.npmjs.com/package/vue-awesome-swiper"},{title:"Vue-select",text:"The most complete selecting solution for Vue.js",link:"https://vue-multiselect.js.org/"},{title:"Vuetable",text:"Компонент таблицы для Vue",link:"https://www.vuetable.com/"}]},{icon:"angular",libraries:[{title:"NGRX",text:"Reactive State for Angular",link:"https://ngrx.io/"}]}]}}render(){return l.createElement(l.Fragment,null,this.state.themes.map((e=>l.createElement("section",{key:e.icon,className:"px-4"},l.createElement("h1",{className:"pb-2 pt-4 border-bottom",style:{fontSize:"100px"}},l.createElement("i",{className:`fab fa-${e.icon}`})),l.createElement("div",{className:"row g-4 py-5 row-cols-1 row-cols-lg-3"},e?.libraries?.map((e=>l.createElement("article",{key:e.title,className:"feature col"},l.createElement("h2",null,e.title),l.createElement("p",null,e.text),l.createElement("a",{href:e.link,target:"_blank"},"Подробнее",l.createElement("i",{className:"fas fa-chevron-right",style:{marginLeft:"5px"}}))))))))))}}const r=l.createElement(i);var s=n(6583),o=n(6485),c=n(8120);const p=(e,t)=>{let n=c.yy.create({doc:t,extensions:[s.Xy]});new o.tk({state:n,parent:document.getElementById(e)})},m={Замыкание:"function createCounter() {\n  let count = 0\n\n  function increment() {\n    count++\n    console.log(count)\n  }\n\n  return increment\n}\n\nconst counter = createCounter()\ncounter()\ncounter()\ncounter()\n","Уникальное значение":"// Функция для нахождения уникального элемента в массиве\nfunction findUniqueElement(arr) {\n   // Объект для хранения количества вхождений каждого элемента\n  let elementCount = {};\n  // Первый проход по массиву для подсчета вхождений\n  for (let num of arr) {\n    if (elementCount[num]) {\n      elementCount[num]++;\n    } else {\n      elementCount[num] = 1;\n    }\n  }\n  // Второй проход по объекту для поиска элемента с единственным вхождением\n  for (let key in elementCount) {\n    if (elementCount[key] === 1) {\n      // Преобразуем ключ обратно в число и возвращаем уникальный элемент\n      return Number(key);\n    }\n  }\n  // В случае, если уникальный элемент не найден (входные данные некорректны)\n  return null;\n}\n// Пример использования функции\nconst arrayExample = [1, 2, 3, 4, 1, 2, 3];\nconsole.log(findUniqueElement(arrayExample)); // Выведет 4\nconst arrayExample2 = [1, 2, 3, 4, 1, 2, 3, 4];\nconsole.log(findUniqueElement(arrayExample2)); // Выведет null",Палиндром:"function isPalindrome(str) {\n    const reversedStr = str.split('').reverse().join('');\n    return str === reversedStr;\n  }\n  // Примеры использования:\n  console.log(isPalindrome('level')); // Вернет true\n  console.log(isPalindrome('racecar')); // Вернет true\n  console.log(isPalindrome('hello')); // Вернет false\n  \n  // Через цикл\n  let str = \"топот\";\n  let isPalindrome = true;\n\n  for (let i = 0; i < str.length / 2; i++) {\n      if (str[i] !== str[str.length - 1 - i]) {\n          isPalindrome = false;\n          break;\n      }\n}","Цикл задержки":'type Item = string | number;\n\n// Interval\nfunction delayLoop<T extends Item>(items: T[], cb: (item: T) => void, delay: number): () => void {\n  let index = 0;\n  const intervalId = setInterval(() => {\n      cb(items[index]);\n      index++;\n      if (index === items.length) {\n          clearInterval(intervalId);\n      }\n  }, delay);\n\n  return () => {\n      clearInterval(intervalId);\n  };\n}\n\n// setTimeout\nfunction delayLoop<T extends Item>(items: T[], cb: (item: T) => void, delay: number): () => void {\n  let index = 0;\n\n  function loop() {\n      if (index < items.length) {\n          cb(items[index]);\n          index++;\n          setTimeout(loop, delay);\n      }\n  }\n\n  loop();\n\n  return () => {\n      index = items.length; // Для остановки цикла\n  };\n}\n\n// Пример использования\nconst items: Item[] = [1, 2, 3, "four"];\nconst interrupt = delayLoop(items, (item) => {\n    console.log(item);\n}, 1000);\n\n// Прерывание цикла\nsetTimeout(() => {\n    interrupt();\n}, 4000);\n',Retry:"function retry(func, maxRetries, delay) {\n  return new Promise((resolve, reject) => {\n    let retries = 0\n\n    function attempt() {\n      func()\n        .then(resolve)\n        .catch((error) => {\n          retries++\n          if (retries < maxRetries) {\n            console.log('Error occurred, retrying...')\n            setTimeout(attempt, delay)\n          } else {\n            reject(error)\n          }\n        })\n    }\n\n    attempt()\n  })\n}\n\n// Пример использования\nfunction exampleFunction() {\n  return new Promise((resolve, reject) => {\n    // Для примера, генерируем ошибку через 50% случаев\n    if (Math.random() < 0.5) {\n      resolve('Success!')\n    } else {\n      reject('Error occurred.')\n    }\n  })\n}\n\nretry(exampleFunction, 3, 1000)\n  .then((result) => {\n    console.log(result)\n  })\n  .catch((error) => {\n    console.error(error)\n  })"};function u(){return l.useEffect((()=>{for(let e in m)p(e,m[e])}),[]),l.createElement("div",{className:"py-4 container-md"},l.createElement("h1",{className:"pb-5"},"JavaScript"),l.createElement("hr",null),l.createElement("h1",{className:"pb-5"},"Задачи"),Object.keys(m).map((e=>l.createElement("p",null,l.createElement("h4",null,e),l.createElement("div",{id:e}),l.createElement("br",null)))))}const d=l.createElement(u);var h=n(3935),b=n(3379),f=n.n(b),v=n(3380),x=n.n(v),g=n(569),S=n.n(g),w=n(3565),y=n.n(w),k=n(9216),E=n.n(k),j=n(4589),R=n.n(j),T=n(9119),P={};P.styleTagTransform=R(),P.setAttributes=y(),P.insert=S().bind(null,"head"),P.domAPI=x(),P.insertStyleElement=E(),f()(T.Z,P),T.Z&&T.Z.locals&&T.Z.locals;var J=document.querySelector("header"),C=document.querySelector("aside"),I=document.querySelector("main"),V=J.querySelector("button"),A={touchPlace:null};function L(){var e=C.querySelectorAll("a");window.innerWidth<768&&Array.from(e).forEach((function(e){return e.addEventListener("click",N)}));var t=location.hash;switch(t||(location.hash="#Home"),e.forEach((function(e){e.href===location.href?(e.classList.add("active"),document.title="Subcortex | ".concat(t.substring(1)),scrollTo(0,0)):e.classList.remove("active")})),h.unmountComponentAtNode(I),t){case"#Home":I.innerHTML=a;break;case"#Packages":h.render(r,I);break;case"#Code":h.render(d,I);break;case"#Bookmark":I.innerHTML='<section class="container lead"> <h1 class="pt-4 pb-5">JavaScript</h1> <article class="pb-5"> <h2>Типы и Структуры данных</h2> <hr/> <p class="p"> <iframe height="350" src="https://www.youtube.com/embed/dFwNSyVC_5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="min-width:50%" class="frame"></iframe> Все языки программирования содержат встроенные типы данных, но они часто отличаются друг от друга в разных языках. На их основе строятся другие структуры данных. Встроенные структуры (типы) данных, доступные в JavaScript, стандарт ECMAScript определяет 9 типов: </p> <p class="p"> </p><ul> <b>Примитивы:</b> <li>Undefined (Неопределённый тип)</li> <li>Boolean (Булев, Логический тип) </li> <li>Number (Число)</li> <li>String (Строка)</li> <li>BigInt</li> <li>Symbol</li> <b>Ссылочные типы:</b> Null, Object, Fuction </ul> <p></p> <p class="p"> Все типы данных в JavaScript, кроме объектов, являются иммутабельными (значения не могут быть модифицированы, а только перезаписаны новым полным значением). Например, в отличии от C, где строку можно посимвольно корректировать, в JavaScript строки пересоздаются только полностью. Значения таких типов называются «примитивными значениями». </p> <p class="p"> <b>Ссылочный тип данных</b> - это значение в памяти, на которое возможно сослаться с помощью идентификатора. Все другие структуры данных, такие как Функции (Functions), Массивы (Arrays), Коллекции (Maps, Sets, WeakMaps, WeakSets) и т.д. тоже являются объектами. Подробнее <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures" target="_blank">тут</a> и <a href="http://jsflow.org/docs/types/" target="_blank">тут</a>. </p> <p class="p"> Оболочка, которая предоставляет доступ к методам прототипа для примитивных типов данных в JavaScript, называется "объект-обертка" или "wrapper object". Когда вы обращаетесь к методам для примитивного типа данных, JavaScript автоматически создает объект-обертку с соответствующими методами прототипа, чтобы вы могли использовать эти методы. Например, для строки создается объект-обертка String, для числа - Number, для булевого значения - Boolean и т.д. </p> </article> <article class="pb-5"> <h2>Контекст, область видимости и замыкание</h2> <hr/> <p class="p"><b>Контекст выполнения</b> (execution context) в JavaScript используется для того, чтобы отслеживать ход выполнения кода. Именно с его помощью определяется доступное окружение на текущем этапе выполнения программы. <b>this</b> — это ключевое слово, которое ссылается на объект, в зависимости от контекста функции в которой оно было вызвано.</p> <p class="p"><b>[[Scope]]</b> - это скрытое внутреннее свойство функции, которое она получает во время вызова. Данное свойство содержит ссылку на ту область видимости, в которой данная функция была объявлена.</p> <p class="p"> <b>Область видимости</b> - это область где компилятор ищет переменные и функции во время вызовав, если не находит в текущей области, то интерпретатор посредством [[Scope]] перейдёт в родительскую область и попытается найти её там. Компилятор - это программа, которая переводит текст языка программирования в набор машинных кодов. <a href="https://habr.com/ru/post/338462/" target="_blank">Подробнее</a>. </p> <p class="p"> <b>Блочная область видимости переменных</b> - это концепция, которая определяет область действия переменных в JavaScript внутри блока кода, ограниченного фигурными скобками {}. Другими словами, переменные, объявленные внутри блока кода, будут доступны только внутри этого блока и не будут видны за его пределами. </p> <p class="p"> <b>Замыкание</b> - это когда функцию возвращает другую функцию, таким образом функция замкнута на область видимости родительской функции. </p> </article> <article class="pb-5"> <h2>Асинхронность и Eventloop</h2> <hr/> <p class="p"> <b>Асинхронность</b> - это выполнение долгих операций без блокировки основного потока. <b>Eventloop / событийный цикл</b> - бесконечный цикл, в котором движок JavaScript ожидает задачи, исполняет их и снова ожидает появления новых. <a href="http://latentflip.com/loupe" target="_blank">Пример.</a> </p> <p class="p"> Web API и JavaScrtipt движок работают независимо. Web API решает, в какой момент функция двигается дальше, в очередь вызовов. Функции в очереди вызовов попадают в JavaScript-движок, где выполняются по одной. Выполнение происходит в том же порядке, в котором функции попадают в очередь. Окружение самостоятельно решает, когда добавить переданный ей код в очередь вызовов. Функции из очереди добавляются в стек выполнения (выполняются) не раньше, чем стек вызовов закончит работу над текущей функцией. Таким образом, стек вызовов работает синхронно, а web API асинхронно. </p> <p class="p"> <b>Макрозадачи и Микрозадачи</b> - сначала выполняются микрозадачи, а потом макро. К микро относятся Promise..., к макро браузерные события, timeout.. </p> <img class="iframe" src="https://habrastorage.org/r/w1560/files/1f2/b37/3a6/1f2b373a6a7e4b889e1eb18c270bcfe8.png"/> </article> <article class="pb-5"> <h2>Прототипное наследование</h2> <hr/> <p class="p"> Это стиль ООП в котором наследование базового класса к производному происходит путём передачи прототипа. <b>_proto_</b> — это скрытое свойство объекта которое ссылается на prototype класса с помощью которого этот объект был создан, оно есть у любого объекта. </p> <p class="p"> <b>Prototype</b> — это объект с определенным набором свойств и методов который доступен по скрытому свойству всех объектов __proto__. </p> <p class="p"> Примитивы получают доступ к прототипу через объект-обертку которая создаётся при обращении к свойству примитива, после отработки объект-обертка удаляется оставляя примитив таким же «лёгким» без затрат дополнительных ресурсов как с объектами </p> </article> <article class="pb-5"> <h2>Всплытие и погружение</h2> <hr/> <p class="p"> Когда на элементе происходит событие, обработчики сначала срабатывают на нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков. Для остановки всплытия нужно вызвать метод event.stopPropagation(). Существует ещё одна фаза из жизненного цикла события – «погружение» (иногда её называют «перехват»). Она очень редко используется в реальном коде, однако тоже может быть полезной. <a href="https://learn.javascript.ru/bubbling-and-capturing" target="_blank">Подробнее</a>. </p> </article> <article class="pb-5"> <h2>Делегирование событий</h2> <hr/> <p class="p"> Всплытие и перехват событий позволяет реализовать один из самых важных приёмов разработки – делегирование. Идея в том, что если у нас есть много элементов, события на которых нужно обрабатывать похожим образом, то вместо того, чтобы назначать обработчик каждому, мы ставим один обработчик на их общего предка. <a href="https://learn.javascript.ru/event-delegation" target="_blank">Подробнее</a>. </p> </article> <article class="pb-5"> <h2>Функции</h2> <hr/> <small> <ul> <h6>(Стреолчные vs Обычные) => {</h6> <li>this: у обычной он динамический(зависит от способа вызова); у стрелочной он всегда равен this внешней функции</li> <li>у обычной функции есть конструктор который может создать объект - new FuncName()</li> <li>arguments - внутри тела обыкновенной функции, существует специальный массив arguments содержащий список аргументов с которым функция была вызвана.</li> <li>у стрелочной функции есть неявный return - () => someValue</li> <h6>}</h6> </ul> </small> <small> <ul> <h6>для привязки контекста - (call, bind, apply) => {</h6> <li>bind возвращает функцию, которая будет действовать как исходная функция, но с предопределенным значением this</li> <li>call - запускает функцию, используя первый аргумент как её контекст this, а последующие – как её аргументы.</li> <li>Единственная разница в синтаксисе между call и apply состоит в том, что call ожидает список аргументов, в то время как apply принимает псевдомассив.</li> <h6>}</h6> <a href="https://learn.javascript.ru/call-apply-decorators">Подробнее.</a> </ul> </small> <p class="p"> </p> </article> <article class="pb-5"> <h2>RESTful API</h2> <hr/> <small> <p class="p"> <b>RESTful API</b> - это подход к проектированию веб-сервисов, который основан на REST (Representational State Transfer). Его основные принципы: использование HTTP методов (GET, POST, PUT, DELETE), уникальный URL для каждого ресурса, использование стандартных форматов данных, таких как JSON или XML. </p> </small> </article> <article class="pb-5"> <h2>Улучшения производительности веб-приложения</h2> <hr/> <small> <p class="p"> Для улучшения производительности веб-приложения можно использовать сжатие ресурсов, кэширование файлов, оптимизацию изображений, асинхронную загрузку скриптов и стилей, а также изучение и устранение узких мест в коде. </p> </small> </article> <article class="pb-5"> <h2>Что такое MVC и как оно применяется во фронтенд разработке?</h2> <hr/> <small> <p class="p"> MVC (Model-View-Controller) - это паттерн проектирования, который разделяет приложение на три основные части: Модель (хранит данные), Представление (отображает данные) и Контроллер (управляет взаимодействием с пользователем). Во фронтенд разработке этот паттерн часто используется для организации кода и разделения логики. </p> </small> </article> <article class="pb-5"> <h2>SOLID, KISS, DRY</h2> <hr/> <small> <p class="p"> </p><ul> <li> S - Принцип единственной ответственности (Single Responsibility Principle). Этот принцип утверждает, что каждый класс должен иметь только одну ответственность. </li> <li> О - Принцип открытости/закрытости (Open/Closed Principle). Согласно этому принципу, программные сущности должны быть открыты для расширения, но закрыты для модификации. </li> <li> L - Принцип подстановки Барбары Лисков (Liskov Substitution Principle). Суть данного принципа заключается в том, что объекты базового класса должны быть заменяемы объектами его подклассов без изменения ожидаемого поведения программы. </li> <li> I - Принцип разделения интерфейса (Interface Segregation Principle). Этот принцип утверждает, что интерфейсы должны быть специфичными для определенных клиентов. Лучше создавать несколько узкоспециализированных интерфейсов, чем один общий, который имеет слишком много функций. </li> <li> D - Принцип инверсии зависимостей (Dependency Inversion Principle). Согласно этому принципу, классы должны зависеть от абстракций, а не от конкретных реализаций. Это позволяет уменьшить связанность между компонентами и делает код более гибким и легко масштабируемым. </li> </ul> KISS - keep it simple, stupid <br> DRY - dont repeat ursalfe <p></p> </small> </article> <article class="pb-5"> <h2>Тестирования веб-приложений</h2> <hr/> <small> <p class="p"> Для тестирования веб-приложений часто используются автоматизированные тесты, юнит-тесты, интеграционные тесты, тестирование с использованием фреймворков, таких как Jest, Mocha, Selenium, Puppeteer и другие. </p> </small> </article> <article class="pb-5"> <h2>CSS и препроцессоры</h2> <hr/> <small> <p class="p"> В CSS стилях применяется иерархия и наследование: свойства унаследованные от родительских элементов могут быть применены к потомкам, а также можно использовать селекторы для точного определения стилей для конкретных элементов. </p> <p class="p"> CSS препроцессоры, такие как Sass или Less, позволяют использовать переменные, вложенность стилей, миксины, модульность и другие расширенные функции, которые помогают упростить и ускорить процесс написания CSS стилей. </p> </small> </article> <article class="pb-5"> <h2>ES5 (ECMAScript 5) и ES6 (ECMAScript 2015)</h2> <hr/> <small> <ul> <li> <b> Объявление переменных: </b> ES5 использует ключевые слова var для объявления переменных, в то время как ES6 дополнил это ключевыми словами let и const, позволяющими объявлять переменные с блочной областью видимости. </li> <li> <b> Стрелочные функции: </b> ES6 ввел стрелочные функции (arrow functions), предоставляя более краткий и удобный синтаксис для создания функций. </li> <li> <b> Классы: </b> В ES6 появилась возможность создания классов в JavaScript, что делает работу с объектно-ориентированным программированием более удобной и привычной. </li> <li> <b> Деструктуризация: </b> ES6 добавил возможность деструктурировать объекты и массивы, что упрощает доступ к их элементам. </li> <li> <b> Шаблонные строки: </b> ES6 предоставил новый способ работы со строками, используя шаблонные строки (template literals), которые позволяют встраивать выражения и переменные непосредственно в строку. </li> <li> <b> Параметры по умолчанию: </b> ES6 позволяет задавать значения по умолчанию для параметров функций, что делает код более чистым и понятным. </li> <li> <b> Spread и Rest операторы: </b> ES6 ввел операторы ..., которые упрощают работу с массивами и объектами, позволяя распространять элементы или аргументы функции. </li> <li> <b> Возможность работы с Promise: </b> ES6 добавил в стандарт возможность работы с промисами (Promises), что упрощает асинхронное программирование. </li> <li> <b> Модули: </b> ES6 представил новую систему модулей, которая позволяет организовывать код в более структурированном и модульном виде. </li> <li> <b> Новые методы массивов: </b> ES6 добавил новые методы массивов, такие как map, filter, reduce, find, forEach и другие, облегчающие работу с массивами и обработку данных. </li> <li> <b> Импорт и экспорт модулей: </b> В ES6 появилась возможность импорта и экспорта модулей, что способствует организации кода на разные файлы и улучшает его масштабируемость. </li> <li> <b> Генераторы: </b> ES6 ввел концепцию генераторов, позволяющих создавать итерируемые объекты с возможностью приостановить и возобновить выполнение кода. </li> <li> <b> Промисы: </b> ES6 добавил промисы как новый способ работы с асинхронным кодом, упрощая обработку асинхронных операций. </li> <li> <b> Локальные модули: </b> ES6 поддерживает локальные модули, что позволяет организовывать код в более локальных и изолированных контекстах. </li> <li> <b> Symbol: </b> В ES6 появился новый примитивный тип данных Symbol, который позволяет создавать уникальные идентификаторы. </li> <li> <b> Proxy и Reflect: </b> ES6 добавил возможность создания прокси-объектов (Proxy), которые позволяют перехватывать и изменять поведение объектов, а также добавил новый API Reflect, облегчающий многие операции над объектами. </li> <li> <b> Set и Map: </b> ES6 ввел новые структуры данных Set и Map, предоставляющие удобные методы для работы с уникальными значениями и коллекциями пар ключ-значение. </li> <li> <b> Усовершенствования в работе с объектами: </b> В ES6 появилась возможность удобно объявлять методы объектов, используя сокращенный синтаксис и возможность создания вычисляемых свойств. </li> </ul> </small> <p class="p"> </p> </article> <article class="pb-5"> <h2>Vue</h2> <hr/> <small> <p class="p"> Vue 3 представляет собой значительное обновление с новым компилятором, улучшенной производительностью, новой системой реактивности, композиционным API, более компактным кодом и другими улучшениями. </p> <p class="p"> В Vue 3 с появлением Composition API: Composition API позволяет создавать компоненты более гибко и масштабируемо, разделять логику на отдельные куски, улучшает читаемость и переиспользование кода. </p> <br> <p class="p"> Teleport в Vue 3 и для чего его используют: Teleport в Vue 3 позволяет перемещать дочерние компоненты в DOM-дереве за пределы родительского компонента без нарушения порядка иерархии компонентов. Это удобно для создания модальных окон, всплывающих подсказок и других интерфейсных элементов. </p> <br> <p class="p"> Директивы в Vue.js используются для добавления определенного поведения к DOM элементам или их манипуляции без создания нового компонента. Директивы предоставляют прямое управление DOM и позволяют реагировать на события жизненного цикла элементов. Например, директива v-if позволяет условно отображать элемент на основе значения выражения. Примеры встроенных директив в Vue.js: </p><ul> <li> v-if - условное отображение элемента </li> <li> v-for - отображение элементов в цикле </li> <li> v-bind - привязка данных к элементу </li> <li> v-on - прослушивание событий </li> <li> v-model - обеспечение двусторонней привязки данных </li> </ul> <ul> Для оптимизации производительности Vue.js приложения можно использовать следующие подходы: <li> Ленивая загрузка компонентов или роутов по требованию с помощью динамического импорта. </li> <li> Оптимизация обновлений DOM с помощью ключей и избегание лишних перерисовок. </li> <li> Использование виртуального списка для отображения больших объемов данных. </li> <li> Кеширование данных запросов с помощью Vuex или других инструментов. </li> <li> Минимизация количества обращений к API и оптимизация запросов. </li> <li> Обработка ошибок и исключений для предотвращения сбоев и утечек памяти. </li> <li> Анализ и оптимизация производительности с помощью инструментов разработчика, например, Vue Devtools или Chrome DevTools. </li> </ul> <p></p> </small> </article> </section> ';break;default:I.innerHTML=a}}function M(){C.style.animation="aside 0.2s",C.style.display="block"}function N(){"none"!==C.style.display&&(C.style.transform="translateX(-100%)",C.style.marginRight="-280px",setTimeout((function(){C.style.display="none",C.style.transform="",C.style.marginRight=""}),200))}window.addEventListener("load",L),window.addEventListener("hashchange",L),window.addEventListener("touchstart",(function(e){var t=e.targetTouches;A.touchPlace=t[0].clientX})),window.addEventListener("touchmove",(function(e){var t=e.targetTouches;if(A.touchPlace){var n=t[0].clientX,a=20*window.innerWidth/100;n>A.touchPlace&&n-A.touchPlace>a&&M(),A.touchPlace>n&&A.touchPlace-n>a&&N()}})),V.addEventListener("click",(function(){"none"===C.style.display?M():N()}))},9119:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(3645),l=n.n(a)()((function(e){return e[1]}));l.push([e.id,"html{scroll-behavior:auto !important}*{box-sizing:border-box}button{background:none;border:none;outline:none}body{display:flex;padding-top:76px;min-height:100vh}header{font-size:40px;position:absolute;top:0;left:0;width:100%;z-index:1000}header button{transition:all .2s}header button:hover{opacity:.5}aside{min-height:100%;transition:all .2s}aside .dropdown{font-size:30px}aside ul li{transition:background .2s}aside ul li:hover{background:var(--bs-gray-300)}aside ul i{display:inline-flex;align-items:center;justify-content:center;width:20px;margin-right:8px}@keyframes aside{0%{transform:translateX(-100%);margin-right:-280px}100%{transform:translateX(0);margin-right:0}}@-webkit-keyframes aside{0%{-webkit-transform:translateX(-100%);margin-right:-280px}100%{-webkit-transform:translateX(0);margin-right:0}}main{width:100%}.frame{max-width:100%;max-height:100%;min-width:50%;float:right;margin:0 0 7px 17px}img{max-width:100%;max-height:100%}.p{text-indent:40px;margin:0;word-break:break-word}.scale{transition:transform .3s}.scale:not(.disabled):hover{transform:scale(1.2)}@media screen and (max-width: 991px){header button{position:absolute;left:10px}body{padding-top:136px}}@media screen and (min-width: 768px){main{max-width:calc(100vw - 280px) !important}}@media screen and (max-width: 768px){header{position:fixed;height:68px}header ul{display:none !important}aside{display:none;position:fixed;left:0;top:68px;height:100vh;z-index:1000}body{padding-top:64px}.iframe{margin:0 7px 17px}}@media screen and (max-width: 414px){iframe{height:190px;width:100%;margin-bottom:20px}.p{text-indent:20px}}",""]);const i=l}},n={};function a(e){var l=n[e];if(void 0!==l)return l.exports;var i=n[e]={id:e,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.exports}a.m=t,e=[],a.O=(t,n,l,i)=>{if(!n){var r=1/0;for(p=0;p<e.length;p++){for(var[n,l,i]=e[p],s=!0,o=0;o<n.length;o++)(!1&i||r>=i)&&Object.keys(a.O).every((e=>a.O[e](n[o])))?n.splice(o--,1):(s=!1,i<r&&(r=i));if(s){e.splice(p--,1);var c=l();void 0!==c&&(t=c)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[n,l,i]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var l,i,[r,s,o]=n,c=0;if(r.some((t=>0!==e[t]))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(o)var p=o(a)}for(t&&t(n);c<r.length;c++)i=r[c],a.o(e,i)&&e[i]&&e[i][0](),e[r[c]]=0;return a.O(p)},n=self.webpackChunkmain=self.webpackChunkmain||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.O(void 0,[557],(()=>a(6124)));var l=a.O(void 0,[557],(()=>a(3038)));l=a.O(l)})();
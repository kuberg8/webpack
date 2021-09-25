import React from "react";

class Packages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themes: [
        {
          icon: "node-js",
          libraries: [
            {
              title: "Webpack",
              text:
                "это сборщик модулей. Он анализирует модули приложения, создает граф зависимостей, затем собирает модули в правильном порядке в один или более бандл.",
              link: "https://webpack.js.org/",
            },
            {
              title: "Lodash",
              text:
                "Lodash упрощает JavaScript, избавляя от хлопот при работе с массивами, числами, объектами, строками и т. Д.",
              link: "https://lodash.com/",
            },
            {
              title: "Moment",
              text:
                "это библиотека JavaScript, которая помогает анализировать, проверять, манипулировать и отображать дату и время в JavaScript очень простым способом",
              link: "https://momentjs.com/",
            },
            {
              title: "Axios",
              text: "Promise based HTTP client for the browser and node.js",
              link: "https://www.npmjs.com/package/axios",
            },
            {
              title: "Jest",
              text:
                "это фреймворк для тестирования JavaScript с акцентом на простоту.",
              link: "https://jestjs.io/ru/",
            },
            {
              title: "Eslint",
              text:
                "Cтатически анализирует ваш код, чтобы быстро находить проблемы. ",
              link: "https://eslint.org/",
            },
          ],
        },

        {
          icon: "node",
          libraries: [
            {
              title: "Express",
              text: "Фреймворк web-приложений для Node.js",
              link: "https://expressjs.com/",
            },
            {
              title: "Socket.IO",
              text:
                "JavaScript-библиотека для веб-приложений и обмена данными в реальном времени.",
              link: "https://expressjs.com/",
            },
            {
              title: "MySql",
              text:
                "Это драйвер node.js для mysql. Он написан на JavaScript, не требует компиляции и имеет 100% лицензию MIT.",
              link: "https://www.npmjs.com/package/mysql",
            },
            {
              title: "MongoDB",
              text: "Официальный драйвер MongoDB для Node.js.",
              link: "https://www.npmjs.com/package/mongodb",
            },
            {
              title: "Passport",
              text:
                "Паспорт является Экспресс -Совместим промежуточным аутентификации для Node.js.",
              link: "https://www.npmjs.com/package/passport",
            },
            {
              title: "Http-errors",
              text:
                "Create HTTP errors for Express, Koa, Connect, etc. with ease.",
              link: "https://www.npmjs.com/package/http-errors",
            },
            {
              title: "Nodemailer",
              text:
                "это модуль для приложений Node.js, позволяющий легко отправлять электронные письма.",
              link: "https://nodemailer.com/about/",
            },
            {
              title: "Cors",
              text:
                "CORS - это пакет node.js для предоставления промежуточного программного обеспечения Connect / Express, которое можно использовать для включения CORS с различными параметрами.",
              link: "https://www.npmjs.com/package/cors",
            },
            {
              title: "Chalk",
              text: "Terminal string styling",
              link: "https://www.npmjs.com/package/chalk",
            },
          ],
        },

        {
          icon: "react",
          libraries: [
            {
              title: "Redux",
              text:
                "REDUX — это JavaScript библиотека, предназначенная для управления состоянием приложения. Позволяет упростить передачу данных через контекст.",
              link: "https://redux.js.org/",
            },
            {
              title: "Redux Form",
              text:
                "Redux-form - это библиотека Redux, которая позволяет управления состоянием форм в приложении React.",
              link: "https://redux-form.com/8.3.0",
            },
            {
              title: "Redux Thunk",
              text:
                "Redux Thunk это middleware библиотека, которая позволяет вам вызвать action creator, возвращая при этом функцию вместо объекта.",
              link: "https://github.com/reduxjs/redux-thunk",
            },
            {
              title: "React Redux",
              text:
                "React Redux - это официальная привязка React для Redux. Позволяет вашим компонентам React считывать данные из хранилища Redux и отправлять действия в хранилище для обновления данных.",
              link: "https://react-redux.js.org",
            },
            {
              title: "React Router",
              text:
                "React Router - библиотека маршрутизации для React. js, которая синхронизирует пользовательский интерфейс с URL-адресом. Поддерживает ленивую загрузку кода, динамическое сопоставление маршрутов и обработку перехода по местоположению.",
              link: "https://reactrouter.com/",
            },
            {
              title: "Reselect",
              text:
                "Reselect - это библиотека для создания мемоизированных селекторов. Используя мемоизацию, мы можем предотвратить ненужные перерисовки. Selector - это функция которая получает state, делает выборку данных из state.",
              link: "https://github.com/reduxjs/reselect",
            },
            {
              title: "React Native",
              text:
                "React Native - это кроссплатформенный фреймворк с открытым исходным кодом для разработки нативных мобильных приложений на JavaScript и TypeScript, созданный.",
              link: "https://material-ui.com/ru/",
            },
            {
              title: "MATERIAL-UI",
              text:
                "MATERIAL-UI - это UI библиотека с React компонентами для быстрой и легкой веб-разработки.",
              link: "https://material-ui.com/ru/",
            },
            {
              title: "Testing Library",
              text: "Простые и полные утилиты тестирования для React",
              link: "https://testing-library.com/",
            },
            {
              title: "React-calendar",
              text: "Ultimate calendar for your React app.",
              link: "https://www.npmjs.com/package/react-calendar",
            },
            {
              title: "React-select",
              text:
                "Гибкий и красивый элемент управления Select Input для ReactJS",
              link: "https://react-select.com/home",
            },
            {
              title: "React-input-mask",
              text: "Компонент маскирования ввода для React.",
              link: "https://www.npmjs.com/package/react-input-mask",
            },
            {
              title: "React-validation",
              text:
                "Component to provide simple form validation for React components.",
              link: "https://www.npmjs.com/package/react-validation",
            },
            {
              title: "React Table",
              text:
                "Создавайте и проектируйте мощные интерфейсы DataGrid, сохраняя при этом 100% контроль над разметкой и стилями.",
              link: "https://react-table.tanstack.com/",
            },
          ],
        },

        {
          icon: "vuejs",
          libraries: [
            {
              title: "VueX",
              text:
                "Паттерн управления состоянием + библиотека для приложений на Vue.js",
              link: "https://vuex.vuejs.org/ru/",
            },
            {
              title: "Vuelidate",
              text:
                "Это библиотека, которая упрощает работу с проверкой форм, позволяет писать свои валидаторы.",
              link: "https://vuelidate.js.org/",
            },
            {
              title: "Vue Router",
              text: "Официальная библиотека маршрутизации для Vue.js.",
              link: "https://router.vuejs.org/ru/",
            },
            {
              title: "Vuetify",
              text: "Это библиотека пользовательского интерфейса Vue.",
              link: "https://vuetifyjs.com/en/",
            },
            {
              title: "Vue Test Utils",
              text:
                "Это официальная библиотека утилит модульного тестирования для Vue.js.",
              link: "https://vue-test-utils.vuejs.org/",
            },
            {
              title: "V-mask",
              text:
                "Маленькая библиотека входных масок для vue.js на основе text-mask-core (~ 5kb), представленная как директива.",
              link: "https://vuejs-tips.github.io/vue-the-mask/",
            },
            {
              title: "Vue-datepicker",
              text: "Компонент Datepicker для Vue",
              link: "https://www.npmjs.com/package/vue2-datepicker",
            },
            {
              title: "Vue-awesome-swipe",
              text: "Swiper component for Vue.",
              link: "https://www.npmjs.com/package/vue-awesome-swiper",
            },
            {
              title: "Vue-select",
              text: "The most complete selecting solution for Vue.js",
              link: "https://vue-multiselect.js.org/",
            },
            {
              title: "Vuetable",
              text: "Компонент таблицы для Vue",
              link: "https://www.vuetable.com/",
            },
          ],
        },

        {
          icon: "angular",
          libraries: [
            {
              title: "NGRX",
              text: "Reactive State for Angular",
              link: "https://ngrx.io/",
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.themes.map((theme) => (
          <section key={theme.icon} className="px-4">
            <h1
              className="pb-2 pt-4 border-bottom"
              style={{ fontSize: "100px" }}
            >
              <i className={`fab fa-${theme.icon}`}></i>
            </h1>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
              {theme?.libraries?.map((item) => (
                <article key={item.title} className="feature col">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  <a href={item.link} target="_blank">
                    Подробнее
                    <i
                      className="fas fa-chevron-right"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </React.Fragment>
    );
  }
}

export default React.createElement(Packages);

export const shortCircuit = `function createCounter() {
  let count = 0

  function increment() {
    count++
    console.log(count)
  }

  return increment
}

const counter = createCounter()
counter()
counter()
counter()
`

export const uniqValue = `// Функция для нахождения уникального элемента в массиве
function findUniqueElement(arr) {
   // Объект для хранения количества вхождений каждого элемента
  let elementCount = {};
  // Первый проход по массиву для подсчета вхождений
  for (let num of arr) {
    if (elementCount[num]) {
      elementCount[num]++;
    } else {
      elementCount[num] = 1;
    }
  }
  // Второй проход по объекту для поиска элемента с единственным вхождением
  for (let key in elementCount) {
    if (elementCount[key] === 1) {
      // Преобразуем ключ обратно в число и возвращаем уникальный элемент
      return Number(key);
    }
  }
  // В случае, если уникальный элемент не найден (входные данные некорректны)
  return null;
}
// Пример использования функции
const arrayExample = [1, 2, 3, 4, 1, 2, 3];
console.log(findUniqueElement(arrayExample)); // Выведет 4
const arrayExample2 = [1, 2, 3, 4, 1, 2, 3, 4];
console.log(findUniqueElement(arrayExample2)); // Выведет null`

export const palindrome = `function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  // Примеры использования:
  console.log(isPalindrome('level')); // Вернет true
  console.log(isPalindrome('racecar')); // Вернет true
  console.log(isPalindrome('hello')); // Вернет false
  
  // Через цикл
  let str = "топот";
  let isPalindrome = true;

  for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
          isPalindrome = false;
          break;
      }
}`

export const delayLoop = `type Item = string | number;

// Interval
function delayLoop<T extends Item>(items: T[], cb: (item: T) => void, delay: number): () => void {
  let index = 0;
  const intervalId = setInterval(() => {
      cb(items[index]);
      index++;
      if (index === items.length) {
          clearInterval(intervalId);
      }
  }, delay);

  return () => {
      clearInterval(intervalId);
  };
}

// setTimeout
function delayLoop<T extends Item>(items: T[], cb: (item: T) => void, delay: number): () => void {
  let index = 0;

  function loop() {
      if (index < items.length) {
          cb(items[index]);
          index++;
          setTimeout(loop, delay);
      }
  }

  loop();

  return () => {
      index = items.length; // Для остановки цикла
  };
}

// Пример использования
const items: Item[] = [1, 2, 3, "four"];
const interrupt = delayLoop(items, (item) => {
    console.log(item);
}, 1000);

// Прерывание цикла
setTimeout(() => {
    interrupt();
}, 4000);
`

export const retry = `function retry(func, maxRetries, delay) {
  return new Promise((resolve, reject) => {
    let retries = 0

    function attempt() {
      func()
        .then(resolve)
        .catch((error) => {
          retries++
          if (retries < maxRetries) {
            console.log('Error occurred, retrying...')
            setTimeout(attempt, delay)
          } else {
            reject(error)
          }
        })
    }

    attempt()
  })
}

// Пример использования
function exampleFunction() {
  return new Promise((resolve, reject) => {
    // Для примера, генерируем ошибку через 50% случаев
    if (Math.random() < 0.5) {
      resolve('Success!')
    } else {
      reject('Error occurred.')
    }
  })
}

retry(exampleFunction, 3, 1000)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.error(error)
  })`

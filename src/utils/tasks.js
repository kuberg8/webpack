export const shortCircuit = `function createCounter() {
    let count = 0;
    
    function increment() {
      count++;
      console.log(count);
    }
    
    return increment;
  }
  
  const counter = createCounter();
  counter();
  counter();
  counter();`

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
  console.log(isPalindrome('hello')); // Вернет false`
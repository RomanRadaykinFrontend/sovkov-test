export const getCorrectDate = (date) => {
  return date.split('-').join('.');
};

export const getCorrectMoney = (money) => {
  const parts = money.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};

export const checkingInputValue = (value) => {
  const newValue = value.replace(',', '.').replace(/[^.\d]+/g, '').replace(/^([^.]*\.)|\./g, '$1');
  const arr = newValue.split('');
  if (arr[0] === '.') {
    arr.splice(0, 1);
  }
  const comaArrLength = arr.filter((symb) => symb === '.').length;
  if (comaArrLength > 1) {
    const indexOfSecComa = arr.reverse().findIndex((symb) => symb === '.');
    arr.splice(indexOfSecComa, 1);
  } else {
    const indexOfComa = arr.findIndex((symb) => symb === '.');
    if (indexOfComa !== -1 && arr.length > indexOfComa + 3) {
      arr.splice(indexOfComa + 3);
    }
  }
  return arr.join('');
};

export const setToLocalStorage = (title, value) => {
  switch (typeof value) {
    case 'object':
      return localStorage.setItem(title, JSON.stringify(value));
    default:
      return localStorage.setItem(title, value);
  }
};

export const getFromLocalStorage = (title) => {
  const res = JSON.parse(localStorage.getItem(title));
  return res;
};

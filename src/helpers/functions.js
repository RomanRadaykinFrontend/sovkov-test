export const getCorrectDate = (date) => {
  return date.split('-').join('.');
};

export const getCorrectMoney = (money) => {
  const parts = money.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};

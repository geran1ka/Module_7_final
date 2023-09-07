const month = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const getTwoDigits = num => ('0' + num).slice(-2)

export const dateDelivery = () => {
  const deliveryDateStart = new Date();
  deliveryDateStart.setDate(deliveryDateStart.getDate() + 3);
  const deliveryDateEnd = new Date();
  deliveryDateEnd.setDate(deliveryDateEnd.getDate() + 6);
  if (deliveryDateStart.getMonth() === deliveryDateEnd.getMonth()) {
    return `${getTwoDigits(deliveryDateStart.getDate())}
      - ${getTwoDigits(deliveryDateEnd.getDate())}
      ${month[deliveryDateEnd.getMonth()]}`;
  }
}
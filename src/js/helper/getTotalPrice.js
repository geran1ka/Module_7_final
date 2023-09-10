export const getTotalPrice = (arr, discountFlag = true) =>
  Math.round(arr.reduce((acc, item) =>
    (item.discount ?
      acc + (item.price - item.price * item?.discount * discountFlag / 100) * item.count :
      acc + item.price * item.count),
  0));

// export const getTotalPrice = (arr) =>
//   arr.reduce((acc, item) =>
//     (item.discount ?
//       acc + (item.price - item.price * item?.discount / 100) * item.count :
//       acc + item.price * item.count),
//   0);

export const getTotalPrice = (arr, discountFlag = true) =>
  arr.reduce((acc, item) =>
    (item.discount ?
      acc + (item.price - item.price * item?.discount * discountFlag / 100) * item.count :
      acc + item.price * item.count),
  0);

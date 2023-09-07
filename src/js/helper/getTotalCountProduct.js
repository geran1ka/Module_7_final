export const getTotalCountProduct = (arr) => arr.reduce((acc, item) => (acc + +item.count), 0);

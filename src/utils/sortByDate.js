export const sortByDate = (arr) => {

  if (!arr.length) return arr
  
  return arr.sort(
    (a, b) => new Date(a.timestamp?.toDate()) - new Date(b.timestamp?.toDate())
  );
};

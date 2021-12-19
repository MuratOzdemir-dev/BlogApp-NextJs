export const categories = (data) => {
  const listOfCategory = [];
  const listWithCount = {};

  // Her postun kategoroisi listOfCategory adlı dizide tutuluyor.
  data.map((post) => listOfCategory.push(post.data.category));

  listOfCategory.forEach((element) => {
    //Element bir string "Eğitim" gibi
    if (Object.keys(listWithCount).includes(element)) {
      listWithCount[element] += 1;
    } else {
      listWithCount[element] = 1;
    }
  });
  return listWithCount;
};

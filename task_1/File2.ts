// @ts-nocheck
const makeBurrito = (eatBurrito) => {
  getShrimps(function (shrimps) {
    getVegetables(function (vegetables) {
      cookShrimps(shrimps, function (cookedShrimps) {
        getTortilla(function (tortilla) {
          rollBorrito(tortilla, cookedShrimps, vegetables, function (burrito) {
            eatBurrito(burrito);
          });
        });
      });
    });
  });
};

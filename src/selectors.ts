import { productSelectors } from "./entites";
import { lens, RootState } from "./state";

export const getAllProducts = (s: RootState) => {
  const state = lens.products.get(s);
  return productSelectors.getAllProducts(state);
};

// flow(
//   lens.products.get,
//   productSelectors.getAllProducts
// );

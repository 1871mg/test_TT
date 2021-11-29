import data from "../data/categories.json";
import subdata from "../data/subcategories.json";

const fetchCategories = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(data), 0);
  });


  const fetchSubcategories = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(subdata), 0);
  });

export default {
    fetchCategories,
    fetchSubcategories
}

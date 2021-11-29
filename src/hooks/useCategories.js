import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../store/category/reducers";
import { categoriesSelector } from "../store/category/selector";

export const useCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    dispatch(loadCategories()).then(() => setLoading(false));
  }, []);

  return { categories, isLoading };
};

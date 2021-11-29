import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSubcategories } from "../store/items/reducers";
import { itemsSelector } from "../store/items/selector";

export const useSubcategories = (categoryId) => {
  const dispatch = useDispatch();
  const subcategories = useSelector(itemsSelector);

  React.useEffect(() => {
    dispatch(loadSubcategories())
  }, [])


  const subcategoriesMap = React.useMemo(() => subcategories.reduce((acc, current) => {
    const categotyId = current.parent_id;
    acc[categotyId] = [...(acc[categotyId] || []), current];
    return acc
  }, {}), [subcategories]);

  return { subcategories: categoryId ? subcategoriesMap[categoryId] : [] };
};
import React from "react";
import "./App.css";
import { withLog } from "./hoc/withLog";
import { Select } from "./components/Select/Select";
import { useCategories } from "./hooks/useCategories";
import { useSubcategories } from "./hooks/useSubcategories";
import { MultiSelect } from "./components/Multiselect/Multiselect";
import logo from "./logo192.png";

const App = () => {
  const { categories, isLoading } = useCategories();
  const [category, setCategory] = React.useState(null);
  const [categoryItems, setCategoryItems] = React.useState(null);


  React.useEffect(() => {
    setCategoryItems(null)
  }, [category])

  const { subcategories } = useSubcategories(category?.id);

  const handleSelect = (e) => {
    setCategory(e.target.value);
  };

  const handleMultiSelect = (e) => {
    setCategoryItems(e.target.value);
  };

  return (
    <div className='page'>
     <div className='form'>

      {isLoading ? (
        <div>Загрузка категорий...</div>
      ) : (
        <>
	        <img src={logo} alt="" className="center-img" />
	        <h2 align="center">СЦ Транстелематика</h2>
	        <h3 align="center">тестовое задание</h3>
	        <h3 align="center">соискатель Михаил Дорожкин</h3>
	        <Select
            label='категории'
            value={category}
            options={categories}
            onChange={handleSelect}
            idKey="id"
            labelKey="name"
            placeholder="выберите категорию"
          />

          {(
	          <>
		          <div>&nbsp;</div>
		          <MultiSelect
			          label='подкатегории'
			          value={categoryItems}
			          options={subcategories}
			          onChange={handleMultiSelect}
			          idKey="id"
			          labelKey="name"
			          placeholder="выберите подкатегорию"
		          />
	          </>
          )}
        </>
      )}

      </div>
    </div>
  );
};

export default withLog(App);

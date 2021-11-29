import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useSearch = ({ items, searchFn }) => {
  const [searchResult, setResult] = useState(items);
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    setResult(debouncedValue ? items.filter((item) => searchFn(item, debouncedValue)) : items);
  }, [debouncedValue, items, searchFn]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    searchResult,
    searchProps: {
      value,
      onChange,
    },
  };
};

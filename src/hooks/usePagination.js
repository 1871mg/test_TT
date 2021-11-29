import React, { useEffect } from "react";

export const usePagination = (items, limit) => {
  const pageNumbers = Math.ceil(items.length / limit);

  const [currentPage, setPage] = React.useState(0);

  const start = currentPage * limit;
  const end = (currentPage + 1) * limit;
  
  const chunk = items.slice(start, end);

  const [pageItems, setPageItems] = React.useState(chunk);

  useEffect(() => {
    setPage(0);
    setPageItems(items.slice(0, limit));
  }, [items])

  const handleNext = () => {
      if(currentPage < pageNumbers - 1) {
        setPage(currentPage + 1);
        setPageItems(items.slice(start + limit, end + limit));
      } else {
        setPage(0);
        setPageItems(items.slice(0, limit));
      }
  }

  const handlePrev = () => {
    if(currentPage > 0) {
      setPage(currentPage - 1);
      setPageItems(items.slice(start - limit, end - limit));
    } else {
      setPage(pageNumbers - 1);
      setPageItems(items.slice(items.length - limit, items.length));
    }

}

  return { handleNext, handlePrev, currentPage: currentPage + 1, pageNumbers, pageItems };
};

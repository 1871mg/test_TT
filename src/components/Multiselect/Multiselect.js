import React, { useCallback } from "react";
import { EVENT } from "../../constants/constants";
import { useOutsideClickHandler } from "../../hooks/useOutsideClick";
import { usePagination } from "../../hooks/usePagination";
import { useSearch } from "../../hooks/useSearch";
import { Pagination } from "../Pagination/Pagination";
import "./Multiselect.css";

export const MultiSelect = ({
  value,
  options,
  onChange,
  idKey,
  labelKey,
  placeholder,
  label
}) => {

  const [checked, setChecked] = React.useState({});

  React.useEffect(() => {
    setChecked({})
  }, [options])

  const [isOpen, setOpen] = React.useState(false);
  const [ref] = useOutsideClickHandler(() => setOpen(false));

  const searchItemsFn = useCallback((option, value) => {
    const regex = new RegExp(value.toLowerCase());
    return regex.test(option[labelKey].toLowerCase())
  }, [labelKey])

  const {searchProps, searchResult} = useSearch({items: options, searchFn: searchItemsFn});
  const {currentPage, handleNext, handlePrev, pageNumbers, pageItems} = usePagination(searchResult, 2);

  return (
    <>
    {label && <label>{label}</label>}
    <div ref={ref} className='multiselect'>
      <div className='multiselect_wrap' onClick={() => setOpen(!isOpen)}>
          {/*{value && value.map(item => <span key={item[idKey]}>{item[labelKey]}</span>)}*/}
          <input {...searchProps} className='multiselect_input' placeholder={!value ? placeholder : ''}/>
          <span className='multiselect_arrow'>{isOpen ? '▼' : '▲'}</span>
      </div>

      {pageItems.length !== 0  && isOpen && <div className='multiselect_menu'>
        <Pagination onClickNext={handleNext} onClickPrev={handlePrev}>{currentPage} из {pageNumbers}</Pagination>
        {pageItems.map((opt) => (
          <div
            className='multiselect_item'
            data-event={EVENT.SELECT}
            key={opt[idKey]}
            onClick={(e) => {

              const newChecked = {...checked};
              newChecked[opt[idKey]] = !newChecked[opt[idKey]]

              e.target.value = checked[opt[idKey]] ? value.filter(item => item[idKey] !== opt[idKey]) : [...(value || []), opt];

              onChange(e);
              setChecked(newChecked);
            }}
          >

            <span>{Boolean(checked[opt[idKey]])? 'x' : ''} </span>
            {opt[labelKey]}
          </div>
        ))}

      </div>}
    </div>
    </>
  );
};

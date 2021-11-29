import React from "react";
import { EVENT } from "../../constants/constants";
import { useOutsideClickHandler } from "../../hooks/useOutsideClick";

import "./Select.css";

export const Select = ({
  value,
  options,
  onChange,
  idKey,
  labelKey,
  placeholder,
  label
}) => {
  const [isOpen, setOpen] = React.useState(false);
  const [ref] = useOutsideClickHandler(() => setOpen(false))

  return (
    <>
    {label && <label>{label}</label>}
    <div ref={ref} className='select'>
      <div className='select_wrap' onClick={() => setOpen(!isOpen)}>
        <span className='label'>{value ? value[labelKey] : placeholder}</span>
        <span className='select_arrow'>{isOpen ? '▼' : '▲'}</span>
      </div>

      {isOpen && <div className='select_menu'>
        {options.map((opt) => (
          <div
            className='select_item'
            data-event={EVENT.SELECT}
            key={opt[idKey]}
            onClick={(e) => {
              e.target.value = opt;
              onChange(e);
              setOpen(!isOpen)
            }}
          >
            {opt[labelKey]}
          </div>
        ))}
      </div>}
    </div>
    </>
  );
};

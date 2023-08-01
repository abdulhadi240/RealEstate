"use client";

import useCountries from "@/app/hooks/useCountries";
import React from "react";
import Select from "react-select";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onchange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onchange }) => {
  const { getAll } = useCountries();
  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onchange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div className="">{option.flag}</div>
            <div>
              {option.label},{" "}
              <span className="text-gray-400 ml-3">{option.region}</span>
            </div>
          </div>
        )}

        classNames={{
            control: () =>'p-3 border-2',
            input: () => 'text-lg',
            option: () => 'text-lg'


        }}

        theme={(theme)=>({
            ...theme,
            borderRadius:8,
            colors:{
                ...theme.colors,
                primary:'black',
                primary25:'#FFe4e6'
            }
        })}
      />
    </div>
  );
};

export default CountrySelect;

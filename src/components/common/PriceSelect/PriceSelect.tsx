import React, { FC } from 'react';
import Select, {
  SelectRenderer,
  SelectItemRenderer,
} from 'react-dropdown-select';
import './PriceSelect.scss';

export interface IPriceOption {
  id: string;
  name: string;
  label: string;
  start: number;
  end: number;
}

export interface IPriceSelectProps {
  isLoading: boolean;
  options: any[];
  filterValues: any[];
  searchable: boolean;
  clearable: boolean;
  multi: boolean;
  labelField: string;
  valueField: string;
  onChange(values: any): void;
}

export const PriceSelect: FC<IPriceSelectProps> = (props: any) => {
  const {
    isLoading,
    options,
    filterValues,
    searchable,
    clearable,
    multi,
    labelField,
    valueField,
    onChange,
  } = props;

  return (
    <div className="custom-select">
      <Select
        multi={multi}
        clearable={clearable}
        searchable={searchable}
        dropdownHandle
        loading={isLoading}
        options={options}
        values={filterValues}
        labelField={labelField}
        valueField={valueField}
        keepSelectedInList
        onDropdownOpen={() => undefined}
        onDropdownClose={() => undefined}
        onClearAll={() => undefined}
        onSelectAll={() => undefined}
        onChange={onChange}
        dropdownRenderer={({
          props,
          state,
          methods,
        }: SelectRenderer<IPriceOption>) => {
          const pattern = state.search.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
          const regexp = new RegExp(pattern, 'i');

          return (
            <div>
              <div className="search-and-toggle">
                <div className="buttons">
                  <div>Search and select:</div>
                  {methods.areAllSelected() ? (
                    <div className="button clear" onClick={methods.clearAll}>
                      Clear all
                    </div>
                  ) : (
                    <div
                      className="button"
                      onClick={() => methods.selectAll(options)}
                    >
                      Select all
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  value={state.search}
                  onChange={methods.setSearch}
                  placeholder="Type anything"
                />
              </div>
              <div className="items">
                {props.options
                  .filter((item: IPriceOption) => {
                    return regexp.test(item.label || item.id);
                  })
                  .map((option: IPriceOption) => {
                    return (
                      <div
                        className="item"
                        key={option.id}
                        onClick={() => methods.addItem(option)}
                      >
                        <input
                          type="checkbox"
                          onChange={() => methods.addItem(option)}
                          checked={state.values.indexOf(option) !== -1}
                        />
                        <div className="item-label">{option.label}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        }}
        itemRenderer={(priceOption: SelectItemRenderer<IPriceOption>) => {
          const { item, methods } = priceOption;
          return (
            <div key={item.id} onClick={() => methods.addItem(item)}>
              <div style={{ margin: '10px' }}>
                <input type="checkbox" checked={methods.isSelected(item)} />
                &nbsp;&nbsp;&nbsp;{item.name}
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

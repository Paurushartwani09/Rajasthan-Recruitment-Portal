import React from "react";
import { Select } from "antd";

const SearchBox = ({ width = 200, placeholder = "Search to Select", options = [] }) => (
  <Select
    showSearch
    style={{ width }}
    placeholder={placeholder}
    optionFilterProp="label"
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? "")
        .toLowerCase()
        .localeCompare((optionB?.label ?? "").toLowerCase())
    }
    options={
      options.length > 0
        ? options
        : [
            { label: "Not Identified" }
          ]
    }
  />
);

export default SearchBox;

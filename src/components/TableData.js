import BuiltinStory from "react-data-table-component";
import { FilterComponent } from "./FilterComponent";
import { useState,useMemo } from "react";
const columns = [
  {
    name: "File",
    selector: (row) => row.file,
    sortable: true,
  },
  {
    name: "Text",
    selector: (row) => row.text,
    sortable: true,
  },
  {
    name: "Number",
    selector: (row) => row.number,
    sortable: true,
  },
  {
    name: "Hex",
    selector: (row) => row.hex,
    sortable: true,
  },
];

export const TableData = (data) => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = data.data.filter((item) => item.file && item.file.toLowerCase().includes(filterText.toLowerCase()));

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent onFilter={(e) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    );
  }, [filterText, resetPaginationToggle]);
  return (
    <BuiltinStory
      fixedHeader
      fixedHeaderScrollHeight="300px"
      subHeader
      pagination
			paginationResetDefaultPage={resetPaginationToggle}
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
      title="Desserts"
      columns={columns}
      data={filteredItems}
    />
  );
};

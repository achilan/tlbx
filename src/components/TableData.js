import BuiltinStory from "react-data-table-component";
import { FilterComponent } from "./FilterComponent";
import { useState,useMemo } from "react";
const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Years",
    selector: (row) => row.years,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    years: "1984",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    years: "1984",
  },
  {
    id: 3,
    title: "Ghostbusters",
    year: "1984",
    years: "1984",
  },
];

export const TableData = () => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = data.filter((item) => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()));

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

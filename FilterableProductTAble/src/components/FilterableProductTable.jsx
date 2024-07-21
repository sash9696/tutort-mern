import React, { useState } from "react";
import { SearchBar, ProductTable } from "../components";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [isStockOnly, setIsStockOnly] = useState(false);

  return (
    <div>
      {/* search */}

      <SearchBar 
        filterText={filterText} 
        isStockOnly={isStockOnly} 
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setIsStockOnly}

        
        />

      {/* product table */}
      <ProductTable
        products={products}
        filterText={filterText}
        isStockOnly={isStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;

import React from 'react'

function SearchBar({filterText, isStockOnly,onFilterTextChange, onInStockOnlyChange}) {
  return (
    <form>
        <input
         type='text' 
         value={filterText} 
         placeholder='Search...'
         onChange={(e) => onFilterTextChange(e.target.value)}
         /><br/>
        <label>
            <input
                 type='checkbox'
                  checked={isStockOnly}
                  onChange={(e) => onInStockOnlyChange(e.target.checked)}

                  
                  />
            Only show stocked products
        </label>
    </form>
  )
}

export default SearchBar
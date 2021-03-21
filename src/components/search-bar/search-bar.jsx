import React from "react"

function SearchBar({ value, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search monsters..."
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default SearchBar

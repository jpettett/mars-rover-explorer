import React from 'react';

function SearchForm() {
  return (
    <div>
      <form className="form">
        <input placeholder="Enter Camera ID" type="text" name="searchString" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;

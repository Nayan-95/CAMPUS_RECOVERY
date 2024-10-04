import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>Search results for Category</h1>
      <div className="top">
        <div className="item">
          <label htmlFor="category">Category</label>
          <select name="category" id="type">
            <option value="">Any</option>
            <option value="electronics">Electronics</option>
            <option value="jewelry">Jewelry</option>
            <option value="money">Money</option>
            <option value="academic">Academic</option>
            <option value="cards">Cards</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
        </div>
        <div className="bottom">
          <button>
            <img src="/search.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;

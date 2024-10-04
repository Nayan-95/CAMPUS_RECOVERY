import "./listPage.scss";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { useDispatch, useSelector } from "react-redux";
import { setListings } from "../../redux/state";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Helper";
import EmptyMap from "../../components/map/EmptyMap";

function ListPage() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const listings = useSelector((state) => state.listings);
  // console.log(listings);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getAllList =async()=>{
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/items`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setIsLoading(false);
    } catch (err) {
      console.log("Fetch Listings Failed", err.message);
    }
  }

  useEffect(()=>{
    getAllList();
  },[]);

  const getFeedListings = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        selectedCategory !== "All"
          ? `${BASE_URL}/items?category=${selectedCategory}`
          : `${BASE_URL}/items`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      // console.log(data);
      dispatch(setListings({ listings: data }));
      setIsLoading(false);
    } catch (err) {
      console.log("Fetch Listings Failed", err.message);
    }
  };

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <div className="filter">
            <h1>Search results for Category</h1>
            <div className="top">
              <div className="item">
                <label htmlFor="category">Category</label>
                <select name="category" id="type" onChange={handleChange}>
                  <option value="All">Any</option>
                  <option value="electronics">Electronics</option>
                  <option value="jewelry">Jewelry</option>
                  <option value="money">Money</option>
                  <option value="academic">Academic</option>
                  <option value="cards">Cards</option>
                  <option value="miscellaneous">Miscellaneous</option>
                </select>
              </div>
              <div className="bottom">
                <button onClick={getFeedListings} disabled={isLoading}>
                  <img src="/search.png" alt="" />
                </button>
              </div>
            </div>
          </div>

          {listings ? (
            listings.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <div className="noData">
              <img src="/No-data.png" alt="" />
            </div>
          )}
        </div>
      </div>
      <div className="mapContainer">
        {listings ? (<Map items={listings} />):(
          <EmptyMap/>
        )}
        {/* <Map items={listings} /> */}
      </div>
    </div>
  );
}

export default ListPage;

import "./profilePage.scss";
import { Link, useNavigate } from "react-router-dom";
import {useEffect, useState } from "react";
import List from "../../components/list/List";
import { setPropertyList } from "../../redux/state";
import Loader from "../../components/loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../redux/state";
import { BASE_URL } from "../../Helper";

function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const currentUser = useSelector((state) => state.user);
  const propertyList = currentUser?.propertyList;

  // console.log(currentUser,propertyList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getPropertyList = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/${currentUser._id}/items`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      // console.log(data)
      dispatch(setPropertyList(data));
      setLoading(false);
    } catch (err) {
      console.log("Fetch all properties failed", err.message);
    }
  };

  useEffect(() => {
    getPropertyList();
  },[]);

  const handleLogout = async () => {
    dispatch(setLogout());
    navigate("/");
  };
  return (
    <div className="profilePage">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="details">
            <div className="wrapper">  
              <div className="title">
                <h1>My List</h1>
                <Link to="/add">
                  <button>Create New Post</button>
                </Link>
              </div>
              <List propertyList={propertyList} />
            </div>
          </div>
          <div className="details listContainer">
            <div className="wrapper">
              <div className="title">
                <h1>User Information</h1>
                
              </div>
              <div className="info">
                <span>
                  Avatar:
                  {currentUser.image.length ? (<img src={currentUser.image} alt="" />):(
                    <img src="noavatar.jpg" alt="" />
                  )}
                  {/* <img src={currentUser.image || "noavatar.jpg"} alt="" /> */}
                </span>
                <span>
                  Username:
                  <b>{currentUser.username}</b>
                </span>
                <span>
                  E-mail:
                  <b>{currentUser.email}</b>
                </span>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfilePage;

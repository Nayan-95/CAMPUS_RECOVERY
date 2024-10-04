import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import Loader from "../../components/loader/Loader";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../Helper";
import { toast } from "react-toastify";

function SinglePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // console.log(id);
  const [post, setPost] = useState([]);
  const currentUser = useSelector((state) => state.user);
  // console.log(currentUser);

  const navigate = useNavigate();

  const getListingDetails = async () => {
    try {
      const response = await fetch(`${BASE_URL}/items/${id}`, {
        method: "GET",
      });

      const data = await response.json();
      // console.log(data);
      setPost(data);
      setLoading(false);
    } catch (err) {
      console.log("Fetch Listing Details Failed", err.message);
    }
  };

  useEffect(() => {
    getListingDetails();
  }, []);

  const handleDelete = async () => {
    // console.log(currentUser._id,post.creator._id)
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/items/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUserId: currentUser._id,
          creatorId: post.creator._id,
        }),
      });

      const data = await response.json();
      // console.log(data);
      if (data.status === 200) {
        toast.success("Item Deleted successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
        navigate("/profile");
      } else {
        toast.error("You are not authorized to delete this post", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
      // if(data)
    } catch (err) {
      toast.info("Please Login to access this features", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
      navigate("/login");
      console.log("Fetch Listing Details Failed", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // console.log(post.creator.image);
  return (
    <div className="singlePage">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="details">
            <div className="wrapper">
              <Slider images={post.images} />
              <div className="info">
                <div className="top">
                  <div className="post">
                    <h1>{post.title}</h1>
                    <div className="address">
                      <img src="/pin.png" alt="" />
                      <span>{post.address}</span>
                    </div>
                    <div className="price"> {post.creator.email}</div>
                  </div>
                  <div className="user">
                    {post.creator.image.length ? (<img src={post.creator.image} alt="" />) :(
                      <img src="/noavatar.jpg" alt="" />
                    )}
                    {/* <img src="/noavatar.jpg" alt="" /> */}
                    <span>{post.creator.username}</span>
                  </div>
                </div>
                <div
                  className="bottom"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.description),
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="features">
            <div className="wrapper">
              <p className="title">General Steps</p>
              <div className="listVertical">
                <div className="feature">
                  <img src="/verify.png" alt="" />
                  <div className="featureText">
                    <span>Verify</span>
                    <p>verify your product from images</p>
                  </div>
                </div>
                <div className="feature">
                  <img src="/contact.png" alt="" />
                  <div className="featureText">
                    <span>Contact</span>
                    <p>Contact the person who found this product</p>
                  </div>
                </div>
                <div className="feature">
                  <img src="/date.png" alt="" />
                  <div className="featureText">
                    <span>When product found</span>

                    <p>{new Date(post.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <p className="title">Location</p>
              <div className="mapContainer">
                <Map items={[post]} />
              </div>
              <div className="buttons">
                <button onClick={handleDelete} disabled={isLoading}>
                  <img src="/delete.png" alt="" />
                  Delete this Post
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SinglePage;

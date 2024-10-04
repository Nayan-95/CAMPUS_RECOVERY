import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { BASE_URL } from "../../Helper";
import { toast } from "react-toastify";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, {
        username,
        email,
        password,
        image
      });
      // console.log(res);
      toast.success("Account created successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer sideContainer">
        <UploadWidget
          uwConfig={{
            multiple: false,
            cloudName: "Udit98",
            uploadPreset: "CampusRecover",
            folder: "posts",
          }}
          setState={setImage}
        />
        {/* <img src="/bg.png" alt="" /> */}
      </div>
    </div>
  );
}

export default Register;

import React, { useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "../style.css"
const Login = () => {
  // const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSuccess = (msg) =>
  {
    <div style={{width:'500px'}} class=" alert alert-warning alert-dismissible fade show" role="alert">
    <strong>User login successfully</strong> 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-pq9f.onrender.com/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        setSuccessMessage(message);
        setTimeout(() => {
          window.location.href = "https://dashboard.d3bnl1cz0kxf11.amplifyapp.com";
          console.log(data);
        }, 1000);
      } else {
        alert(message)
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className='sig p-5' style={{height:"700px"}}>
    <div style={{marginLeft:'550px'}} className="form_container mt-5">
      <h2>Login Account</h2>
      {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
    </div>
  );
};

export default Login;
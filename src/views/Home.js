import { useState, useContext  } from "react";
import Hero from "../components/Hero";
import { AuthContext } from "../context/AuthPorvider";


const Home = () => {
  const [loginData, setLoginData] = useState({
      name: "",
      pass: ""
  })
  const authConsumer = useContext(AuthContext);
  const { login } = authConsumer;


  const handleData = (e) => {
    setLoginData({
        ...loginData,
        [e.target.name]: e.target.value
    })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginData)

      
      
  }
  



  return (
    <>
      <div className="container p-5" style={{ minHeight: "25vh" }}>
        <div className="row">
          <div className="col-md-12">
            <h3 className="fs-3">This is the landing page</h3>
            <form onSubmit={handleSubmit} style={{ width: "40%", margin: 'auto' }}>
              <input
                type="text"
                placeholder="username"
                className="form-control my-3"
                name="name"
                 onChange={handleData}
              />
              <input
                type="password"
                placeholder="password"
                className="form-control"
                name="pass"
                 onChange={handleData}
              />
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
      <Hero />
    </>
  );
};

export default Home;

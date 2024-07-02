
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {


  const navigate = useNavigate();
  return (
    <div style={{ backgroundImage: `url(${require("./blurry-gradient-haikei.png")})`, height: "953px", backgroundSize: "cover" }} >
      <div className='container '>
        <div className='d-flex justify-content-center'>
          <div className='row mt-5'>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
              <button className="btn btn-info" onClick={() => navigate('/login')}>Login</button>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
              <button className="btn btn-info" style={{ height: "40px", width: "150px" }} onClick={() => navigate('/signup')}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );




}

export default App;

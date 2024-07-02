import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const [student, setStudent] = useState({ username: "", password: "", email: "" });
    const [data, setData] = useState(JSON.parse(localStorage.getItem("TANVI")) || []);


    const fontChange = (e) => {
        console.log(e.target.name)
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    const fontSubmit = () => {
        setData([...data, student])
        localStorage.setItem("TANVI", JSON.stringify([...data, student]));
        navigate('/tableLogin');

    }

    console.log(student)
    console.log(data)
    return (
        <>
            <div className="container mt-5">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                    <div className=" col-lg-3 col-xl-3 col-sm-12 col-12">
                        <label htmlFor="username" className="form-lable mt-4">User Name:</label>
                        < input type="txet" id="username" name="username" value={student.username} onChange={(e) => fontChange(e)} required className="form-control" />
                    </div>
                    <div className=" col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <label htmlFor="password" className="form-lable mt-4">Password:</label>
                        <input type="password" id="password" name="password" value={student.password} onChange={(e) => fontChange(e)} required className="form-control" />
                    </div>
                    <div className=" col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <label htmlFor="email" className="form-lable mt-4">Email:</label>
                        <input type="email" id="email" name="email" value={student.email} onChange={(e) => fontChange(e)} required className="form-control" />
                    </div>
                    <div className=" col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <button type="sibmit" onClick={fontSubmit} className="btn btn-dark form-control mt-5">Login</button>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Login;
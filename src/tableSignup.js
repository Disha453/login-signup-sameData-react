import { useState } from "react";

export function TableSignup() {

    const [tableSignData, setTableSignData] = useState(JSON.parse(localStorage.getItem("hendal")) || []);
    console.log(setTableSignData)
    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <table>
                <thead>
                    <th>User Name</th>
                    <th>Password</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {tableSignData?.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.username}</td>
                                <td>{item.password}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
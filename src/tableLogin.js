import { useState } from "react";

export function TableLogin() {

    const [tableData, setTableData] = useState(JSON.parse(localStorage.getItem("TANVI")) || []);
    console.log(setTableData)

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <table>
                    <thead>
                        <th>User Name</th>
                        <th>Password</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {tableData?.map((item, index) => {
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
        </>
    )
}

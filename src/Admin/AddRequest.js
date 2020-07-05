import React from 'react';


function AddRequest(){
    return(
        <div className="agent-request">
            <h1>New Ad Requests</h1>
            <table className="agent-request-table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Phone No</th>
                    <th>Email</th>
                    <th>Description</th>
                    <th>Approve</th>
                </tr>
                <tr>
                    <td>003265</td>
                    <td>Ali Qureshi</td>
                    <td>Lahore</td>
                    <td>03335293844</td>
                    <td>ali123@gmail.com</td>
                    <td>I want to publish my ad</td>
                    <td>
                        <button className="yes">YES</button>
                        <button className="no">NO</button>
                    </td>
                </tr>
                <tr>
                    <td>003250</td>
                    <td>Farhan Khan</td>
                    <td>Islamabad</td>
                    <td>03125293444</td>
                    <td>farhankhan@hotmail.com</td>
                    <td>Property ad</td>
                    <td>
                        <button className="yes">YES</button>
                        <button className="no">NO</button>
                    </td>
                </tr>
                <tr>
                    <td>032646</td>
                    <td>Ali Rizvi</td>
                    <td>Karachi</td>
                    <td>03235543854</td>
                    <td>rizvi@gmail.com</td>
                    <td>Publishing an ad</td>
                    <td>
                        <button className="yes">YES</button>
                        <button className="no">NO</button>
                    </td>
                </tr>
                <tr>
                    <td>002354</td>
                    <td>Sarfaraz Hamza</td>
                    <td>Peshawar</td>
                    <td>03435534875</td>
                    <td>sarfaraz76@gmail.com</td>
                    <td>Request for publishing this ad</td>
                    <td>
                        <button className="yes">YES</button>
                        <button className="no">NO</button>
                    </td>
                </tr>

          
            
            </table>
        </div>
    );
}
export default AddRequest;
import React from 'react';
function AddRequest(){
    return(
        <div className="agent-request">
            <h1>New Ad Requests</h1>
            <div className="search-bar">
            <input type="text" className="search" placeholder="Enter ID or Title"></input>
            <button className="search-btn">Search</button>
            </div>
            
            <table className="agent-request-table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Phone No</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Approve</th>
                </tr>
                <tr>
                    <td>003265</td>
                    <td>Ali Qureshi</td>
                    <td>10 marla flate</td>
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
                    <td>5 marla house</td>
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
                    <td>shop</td>
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
                    <td>1 canal plot</td>
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
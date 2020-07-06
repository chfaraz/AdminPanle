import React from 'react';


function AgentRequest(){
    return(
        <div className="agent-request">
            <h1>New Agents Requests</h1>
            <div className="search-bar">
            <input type="text" className="search" placeholder="Enter Name or Number"></input>
            <button className="search-btn">Search</button>
            </div>
            <table className="agent-request-table">
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Phone No</th>
                    <th>Email</th>
                    <th>Description</th>
                    <th>Approve</th>
                </tr>
                <tr>
                    <td>Ali Qureshi</td>
                    <td>Lahore</td>
                    <td>03335293844</td>
                    <td>ali123@gmail.com</td>
                    <td>I want to apply as agent</td>
                    <td>
                        <button className="yes">YES</button>
                        <button className="no">NO</button>
                    </td>
                </tr>
                <tr>
                    <td>Farhan Khan</td>
                    <td>Islamabad</td>
                    <td>03125293444</td>
                    <td>farhankhan@hotmail.com</td>
                    <td>Request for be an agent</td>
                    <td>
                        <button className="yes">YES</button>
                        <button className="no">NO</button>
                    </td>
                </tr>
                <tr>
                    <td>Ali Rizvi</td>
                    <td>Karachi</td>
                    <td>03235543854</td>
                    <td>rizvi@gmail.com</td>
                    <td>Applying as agent</td>
                    <td>
                        <button className="yes">YES</button>
                        <button className="no">NO</button>
                    </td>
                </tr>
                <tr>
                    <td>Sarfaraz Hamza</td>
                    <td>Peshawar</td>
                    <td>03435534875</td>
                    <td>sarfaraz76@gmail.com</td>
                    <td>Wants to be an agent</td>
                    <td>
                        <button className="yes">YES</button>
                        <button className="no">NO</button>
                    </td>
                </tr>

          
            
            </table>
        </div>
    );
}
export default AgentRequest;
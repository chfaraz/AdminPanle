import React from 'react';


function Properties(){
    return(
        <div className="agent-request">
            <h1>Search A Property</h1>
            <div className="search-bar">
            <input type="text" className="search" placeholder="Enter ID or Title"></input>
            <button className="search-btn">Search</button>
            </div>
            <table className="agent-request-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Owner Name</th>
                        <th>Phone No</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Longitude</th>
                        <th>latitude</th>
                        <th>purpose</th>
                        <th>size</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}
export default Properties;
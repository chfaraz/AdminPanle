import React from 'react';


function Users(){
    return(
        <div className="agent-request">
            <h1>Search A User</h1>
            <div className="search-bar">
            <input type="text" className="search" placeholder="Enter ID/Name/No"></input>
            <button className="search-btn">Search</button>
            </div>
            <table className="agent-request-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone No</th>
                </tr>
                </thead>
            </table>
        </div>
    );
}
export default Users;
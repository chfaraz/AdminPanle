import React from 'react';


function AddRequest(){
    return(
        <div className="agent-request">
            <h1>New Add Requests</h1>
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
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>
                        <button className="yes">YES</button>
                        <button className="no">NO</button>
                    </td>
                </tr>
                <tr>
                    <td>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                    <td>Sweden</td>
                    <td>Sweden</td>
                    <td>Sweden</td>
                    <td>
                        <button className="yes">YES</button>
                        <button className="no">NO</button>
                    </td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                    <td>Mexico</td>
                    <td>Mexico</td>
                    <td>
                        <button className="yes">YES</button>
                        <button className="no">NO</button>
                    </td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                    <td>Austria</td>
                    <td>Austria</td>
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
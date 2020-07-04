import React from 'react';


function Agents(){
    return(
        <div className="agent-request">
            <h1>List of Agents</h1>
            <table className="agent-request-table">
                <tr>
                    <th>Name</th>
                    <th>Phone No</th>
                    <th>Email</th>
                    <th>Sold</th>
                    <th>Present</th>
                    <th>Block</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>
                        <button className="block">Block</button>
                    </td>
                </tr>
                <tr>
                    <td>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                    <td>Sweden</td>
                    <td>Sweden</td>
                    <td>Sweden</td>
                    <td>
                        <button className="block">Block</button>
                    </td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                    <td>Mexico</td>
                    <td>Mexico</td>
                    <td>
                        <button className="block">Block</button>
                    </td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                    <td>Austria</td>
                    <td>Austria</td>
                    <td>
                        <button className="block">Block</button>
                    </td>
                </tr>

          
            
            </table>
        </div>
    );
}
export default Agents;
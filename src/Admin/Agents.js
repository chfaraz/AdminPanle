import React from 'react';


function Agents(){
    return(
        <div className="agent-request">
            <h1>List of Agents</h1>
            <table className="agent-request-table">
     <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone No</th>
                    <th>Email</th>
                    <th>Sold</th>
                    <th>Present</th>
                    <th>Block</th>
                </tr>
                <tr>
                    <td>23100</td>
                    <td>Ali Qureshi</td>
                    <td>03335293844</td>
                    <td>ali123@gmail.com</td>
                    <td>5</td>
                    <td>3</td>
                    <td>
                        <button className="block">Block</button>
                    </td>
                </tr>
                <tr>
                    <td>12302</td>
                    <td>Farhan Khan</td>
                    <td>03125293444</td>
                    <td>farhankhan@hotmail.com</td>
                    <td>7</td>
                    <td>1</td>
                    <td>
                        <button className="block">Block</button>
                    </td>
                </tr>
                <tr>
                    <td>54313</td>
                    <td>Ali Rizvi</td>
                    <td>03235543854</td>
                    <td>rizvi@gmail.com</td>
                    <td>13</td>
                    <td>6</td>
                    <td>
                        <button className="block">Block</button>
                    </td>
                </tr>
                <tr>
                    <td>56223</td>
                    <td>Sarfaraz Hamza</td>
                    <td>03435534875</td>
                    <td>sarfaraz76@gmail.com</td>
                    <td>5</td>
                    <td>16</td>
                    <td>
                        <button className="block">Block</button>
                    </td>
                </tr>
          
            
            </table>
        </div>
    );
}
export default Agents;
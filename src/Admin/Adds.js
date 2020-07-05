import React from 'react';


function Adds(){
    return(
        <div className="agent-request">
            <h1>List of Ads</h1>
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
                    <td>Ali Qureshi</td>
                    <td>03335293844</td>
                    <td>ali123@gmail.com</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td>
                        <button className="block">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Farhan Khan</td>
                    <td>03125293444</td>
                    <td>farhankhan@hotmail.com</td>
                    <td>Sweden</td>
                    <td>Sweden</td>
                    <td>
                        <button className="block">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Ali Rizvi</td>
                    <td>03235543854</td>
                    <td>rizvi@gmail.com</td>
                    <td>Mexico</td>
                    <td>Mexico</td>
                    <td>
                        <button className="block">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Sarfaraz Hamza</td>
                    <td>03435534875</td>
                    <td>sarfaraz76@gmail.com</td>
                    <td>Austria</td>
                    <td>Austria</td>
                    <td>
                        <button className="block">Delete</button>
                    </td>
                </tr>

          
            
            </table>
        </div>
    );
}
export default Adds;
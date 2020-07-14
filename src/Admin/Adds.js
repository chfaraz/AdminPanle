import React from 'react';


function Adds(){
    return(
        <div className="agent-request">
            <h1>List of Ads</h1>
            <table className="agent-request-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone No</th>
                        <th>Email</th>
                        <th>Property ID</th>
                        <th>Property Title</th>
                        <th>Block</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ali Qureshi</td>
                        <td>03335293844</td>
                        <td>ali123@gmail.com</td>
                        <td>03235</td>
                        <td>5 marla house</td>
                        <td>
                            <button className="block">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Farhan Khan</td>
                        <td>03125293444</td>
                        <td>farhankhan@hotmail.com</td>
                        <td>23002</td>
                        <td>10 marla flate</td>
                        <td>
                            <button className="block">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Ali Rizvi</td>
                        <td>03235543854</td>
                        <td>rizvi@gmail.com</td>
                        <td>00033</td>
                        <td>1 canal plot</td>
                        <td>
                            <button className="block">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sarfaraz Hamza</td>
                        <td>03435534875</td>
                        <td>sarfaraz76@gmail.com</td>
                        <td>12033</td>
                        <td>shop</td>
                        <td>
                            <button className="block">Delete</button>
                        </td>
                    </tr>
                </tbody>
          
            
            </table>
        </div>
    );
}
export default Adds;
import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Login extends Component {
    render(){
        return(
            <div className="login">
                <div className="center">
                    <form>
                    <label>User Name:</label><br/>
                    <input type="text" id="u_name" /><br/>
                    <label>Password:</label><br/>
                    <input type="Password" id="pass" /><br/>
                    <Link to="/home">
                        <button className="login-button">
                            Login
                        </button>
                    </Link>
                    </form>
                </div>
        
            </div>

        )
    }
}
export default Login
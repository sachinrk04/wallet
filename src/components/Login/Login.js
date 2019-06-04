import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div onClick={this.props.closeModel} className="Login__close" />
                <div className="Login__container">
                    <div className="Login_form">
                        <form>
                            <input type="text" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                    <div className="login-signup">
                        <p>NEW USER? <button>SIGN UP</button></p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;
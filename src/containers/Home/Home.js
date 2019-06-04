import React, { Component } from 'react';

import "./Home.css";
import Login from '../../components/Login/Login';
import SignUp from '../../components/SignUp/SignUp';

class Home extends Component {

    state = {
        isLogin: false,
        isSignUp: false,
    }

    openLoginModel = () => {
        this.setState({ isLogin: true });
    }

    closeModel = () => {
        this.setState({ isLogin: false, isSignUp: false });
    }

    openSignUpModel = () => {
        this.setState({ isSignUp: true });
    }


    render() {
        let login = null;
        if (this.state.isLogin) {
            login = <Login closeModel={this.closeModel} openSignUpModel={this.openSignUpModel} />
        }
        let signUp = null;
        if (this.state.isSignUp) {
            signUp = <SignUp closeModel={this.closeModel} />
        }
        return (
            <React.Fragment>
                {login}
                {signUp}
                <div className="home_container">
                    <div className="home_in">
                        <div className="trangle_one">
                            <button onClick={this.openLoginModel}>Login</button>
                        </div>
                        <div className="trangle_two">
                            <button onClick={this.openSignUpModel}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
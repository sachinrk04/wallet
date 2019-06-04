import React, { Component } from 'react';

import './SignUp.css';

class SignUp extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value}, console.log(this.state));
    }

    submitData = (e) => {
        e.preventDefault();
        const formData = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
        }
        console.log(formData);
        this.props.closeModel();
    }
    render() {
        return (
            <React.Fragment>
                <div className="signUp__close" onClick={this.props.closeModel} />
                <div className="signUp__container">
                    <div className="signUp_form">
                        <form onSubmit={this.submitData}>
                            <input 
                                type="text"
                                name="firstname"
                                value={this.state.firstname} 
                                placeholder="Enter your firstname"
                                onChange={this.changeHandler}
                            />
                            <input 
                                type="text"
                                name="lastname"
                                value={this.state.lastname} 
                                placeholder="Enter your lastname" 
                                onChange={this.changeHandler}
                            />
                            <input 
                                type="email"
                                name="email"
                                value={this.state.email} 
                                placeholder="Email"
                                onChange={this.changeHandler}
                            />
                            <input 
                                type="password"
                                name="password"
                                value={this.state.password} 
                                placeholder="Password"
                                onChange={this.changeHandler}
                            />
                            <button type="submit">SignUp</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SignUp;

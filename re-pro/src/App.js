import "./App.css";
import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class App extends Component {
    state = {
        Person: {
            fullName: "Nemri Yosra",
            bio:
                " Born in 1995 at Bizerte, Yosra is a Bioengineer and studing to be a web developer",
            imgSrc: "./Image/Yosra.jpg",
            profession: "Soo to be a Beginner Web developer",
        },
        show: false,
    };
    componentDidMount() {
        console.log("component did mount");
    }
    componentDidUpdate() {
        console.log("component did update");
    }
    componentWillUnmount() {
        console.log("component will unmount");
    }
    render() {
        return (
            <div className="App">
                <Button
                    variant="danger"
                    onClick={() => this.setState({ show: !this.state.show })}
                >
                    Profile
                </Button>

                {this.state.show ? (
                    <div className="profile">
                        <img src={this.state.Person.imgSrc} alt="img" />

                        <h1>FullName : {this.state.Person.fullName}</h1>

                        <h3 id="bio">Bio : {this.state.Person.bio}</h3>

                        <h3>Profession : {this.state.Person.profession}</h3>
                    </div>
                ) : null}
            </div>
        );
    }
}

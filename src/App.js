import React, { Component } from 'react';

class App extends Component {
  state = {
    Person: {
      fullName: "",
      bio: "I am an Operations Research Engineer and a web developer. Problem solving is my passion.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Information Processing Officer"
    },
    shows: false,
    time: 0
  };

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState(prevState => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person;
    return (
      <div>
        <button onClick={this.toggleShow}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>

        {this.state.shows && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt="profile" style={{ width: '150px' }} />
            <p>{bio}</p>
            <h4>{profession}</h4>
          </div>
        )}

        <p>Component mounted since: {this.state.time} seconds</p>
      </div>
    );
  }
}

export default App;

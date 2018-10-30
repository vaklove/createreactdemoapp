import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import Asknicely from "./Asknicely/Asknicely";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 29 },
      { id: "2", name: "Sam", age: 29 }
    ],
    showPerson: false
  };

  /*   switchNameHandler = newName => {
    //console.log("was clicked!!");
    this.setState({
      persons: [{ name: newName, age: 29 }, { name: "Sam", age: 35 }]
    });
  }; */
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    console.log(person);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  };

  render() {
    const buttonStyle = {
      backgroundColor: "white",
      padding: "8px",
      border: "1px solid #cccc",
      cursor: "pointer"
    };
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <div>
                <Person
                  key={person.id}
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={event => this.nameChangeHandler(event, person.id)}
                />
              </div>
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Nan!!")}
            changed={this.nameChangeHandler}
          >
            hobbies: volleyball
          </Person> */}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>I am a React App!!!</h1>
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
        <Asknicely />
      </div>
    );
  }
}

export default App;

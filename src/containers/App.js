import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Asknicely from "../components/Asknicely/Asknicely";
import { Constant } from "../utils/constant";
import { initAskNicelySettings } from "../helpers/initAskNicelySettings";

initAskNicelySettings();

const loadScript = (src) => {
  let tag = document.createElement('script');
  tag.async = true;
  tag.src = src;
  console.log(document.getElementsByTagName('body'));
  document.getElementsByTagName('body')[0].appendChild(tag);
}

loadScript(Constant.webSurveyUrl);

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
    
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <Persons persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
      );      
    }
    
    return (
      <div className={classes.App}>
        <Cockpit 
        appTitle={this.props.title}
        showPerson={this.state.showPerson}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
        />
        {persons}
        <Asknicely/>
      </div>
    );
  }
}

export default App;


import React, {Component} from 'react';
import './App.css';
import Person from './person/Person';

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'john', age: 40},
            {id: '2', name: 'joe', age: 50},
            {id: '3', name: 'doe', age: 60}
        ],
        showPersons: false
    };

    toggleHandler = (event) => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    deletePerson = (index) => {
        const persons = this.state.persons;
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, key) => {
                        return <Person click={() => this.deletePerson(key)}
                                       name={person.name}
                                       age={person.age}
                                       key={person.id}/>
                    })}
                </div>
            )
        }

        return (
            <div className="App">
                <h1>hey welcome</h1>
                <button onClick={this.toggleHandler}>Toggle</button>
                {persons}
            </div>
        );
    }
}

export default App;

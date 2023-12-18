import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from "../components/Scroll.js";
import ErrorBoundry from '../components/ErrorBoundry.js';
import './App.css';

const App = () => {
    const [state, setState] = useState({
        robots: [],
        searchField: ''
    });
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setState({...state, robots:users}))
    // eslint-disable-next-line
    }, []);

    const onSearchChange = (event) => {
        setState({...state, searchField: event.target.value});
    }

    
    const filteredRobots = state.robots.filter(robot => robot.name.toLowerCase().includes(state.searchField.toLowerCase()));


    return !state.robots.length ? <h1 className = "tc f1">Loading...</h1> : 
        (
            <div className = "tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    
}

export default App;


import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import Footer from './Footer';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChang = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        }) 
        return (
            <div className='tc'>
                <h1>Fetch and Retrieve</h1><hr/><br/>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
                <Footer /> 
            </div>
        ); 
    }
}

export default App; 
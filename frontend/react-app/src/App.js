import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from './components/VideoPlayer'
import PlayList from './components/PlayList.js'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends React.Component {
	constructor(props){
		super(props)

	}

  render(){
  	return (
	    <Router>
	        {/*<Link to="/home" >Home</Link><br/>
	        <Link to="/news" >News</Link>

	        <Route path="/home" component={VideoPlayer}></Route>
	        <Route path="/news" component={News}></Route> */} 

	        <VideoPlayer source={require('./media/mov_bbb.mp4')}/>
			<PlayList source="https://my-json-server.typicode.com/diaolanshan/training/db"/>
	    </Router>
	)}
}

export default App;

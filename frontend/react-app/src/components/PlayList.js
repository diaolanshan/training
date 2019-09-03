import React from 'react'
import $ from  'jquery'

class Player extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			movies: []
		}
	}

	componentDidMount() {
	    this.serverRequest = $.get(this.props.source, function (result) {
	     	this.setState({
	     		movies: result['youtube']
	     	})
	    }.bind(this));
    }

	render(){
		console.log(this.state.movies.length);
		let content;
		if(this.state.movies && this.state.movies.length>0){
			 content =	this.state.movies.map((item)=>
			        <div>
			          {item.title}&nbsp;
			          <a>{item.title}</a>
			          <hr/>
			        </div>
		      )
		}else{
			content = <div>aaa</div>
		}

		return(
			content
		)
	}
}

export default  Player
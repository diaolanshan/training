import React from 'react'

class Player extends React.Component{
	constructor(props){
		super(props)

	}

	render(){
		const responsiveClass = "embed-responsive embed-responsive-16by9";
		return(
			<div className={responsiveClass}>
				<video src={this.props.source} id="videoItem">	
				</video>
			</div>
		)
	}
}

export default  Player
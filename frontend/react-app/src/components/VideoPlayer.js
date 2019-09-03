import React from 'react'
import Player from './Player'
import VideoControl from './VideoControl'

class VideoPlayer extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
				<Player source={this.props.source}/>
				<VideoControl />
			</div>
		)
	}
}

export default VideoPlayer
		
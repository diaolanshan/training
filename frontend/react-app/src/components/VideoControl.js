import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import play from '../images/play.png'

class VideoControl extends React.Component{
	constructor(props){
		super(props);
		this.playVideo = this.playVideo.bind(this);
		this.pauseVideo = this.pauseVideo.bind(this);
		this.state= {
			"playbuttondisplay": 'true',
		}
	}

	playVideo(){
		document.getElementById("videoItem").play();
		this.setState({
			"playbuttondisplay": 'false',
		})
	}

	pauseVideo(){
		document.getElementById("videoItem").pause();
		this.setState({
			"playbuttondisplay": 'true',
		})
	}

	volumeUp(){

	}

	render(){
		const divClass = "row";
		let playbuttonstyle = this.state.playbuttondisplay=='false'? {display: 'none'}:{display: 'inline'}
		let playdisablebuttonstyle = this.state.playbuttondisplay=='true'? {display: 'none'}:{display: 'inline'}
		return(
			<div className={divClass}>
				<div className="col-md-4">
					<img src={play} id="playbutton" onClick={this.playVideo} style={playbuttonstyle}/>
					<img src={require("../images/" + "play-disabled.png")} style={playdisablebuttonstyle} id="playdisablebutton" />
					<img src={require("../images/" + "pause.png")} style={playdisablebuttonstyle} onClick={this.pauseVideo} id="pausebutton"/>
					<img src={require("../images/" + "pause-disable.png")} style={playbuttonstyle}/>
					<img src={require("../images/" + "Volume-Up.png")} onClick={this.volumeUp} id="volumeup" />
				</div>
			</div>
		)
	}
}

export default VideoControl
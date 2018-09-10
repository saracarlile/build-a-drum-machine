import React, { Component } from 'react';

class DrumButton extends Component {
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this); 
    }

    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyDown);
    }

    onKeyDown = (e) => {
        if(this.props.keycode === e.keyCode){
            this.playSound();
        }
    }

    playSound = () => {
        let target = document.getElementById(this.props.id);
        target.play();
        this.props.setDisplay(this.props.string);
        target.parentNode.className="drum-pad-active";
        setTimeout(() => { target.parentNode.className="drum-pad"; }, 1000);
    }


    render() {
        return <div className="drum-pad" id="this.props.string" onClick={this.playSound} >
            {this.props.id}
            <audio id={this.props.id} src={this.props.url} className={"clip"}></audio>
        </div>;
    }
}


class Keypad extends Component {
    constructor(props) {
        super(props);
    }

    sounds = this.props.sounds

    buttonList = this.sounds.map((sound) =>
        <DrumButton key={sound.key.toString()}
            id={sound.id}
            url={sound.url}
            string={sound.string}
            keycode={sound.keycode}
            setDisplay={this.props.setDisplay}
        />
    );

    render() {
        return (
            <div id="keys" >
                {this.buttonList}
            </div>
        );
    }
}


export default Keypad; 
import React, {Component} from 'react';
import Sound from 'react-sound';

class sound extends Component {
    render() {
        return (
          <Sound
            url="C:\Users\vishesh.doshi\Desktop\Bubble-pop-sound-effect.mp3"
            playStatus={Sound.status.PLAYING}
            playFromPosition={300 /* in milliseconds */}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        );
      }
    }
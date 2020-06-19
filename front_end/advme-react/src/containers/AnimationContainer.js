import React, { Component } from 'react';
import { connect } from 'react-redux';
import Animation from '../components/Animation';
import Animation2 from '../components/Animation2';
import Animation3 from '../components/Animation3';
import Animation4 from '../components/Animation4';

class AnimationContainer extends Component{

    renderAnimation = () => {
        let widthSize = '30%';
        let heightSize = '25%';
        const charStyle = {
            width: widthSize,
            height: heightSize,

        }
       
        if (this.props.type === 1) return <Animation style={charStyle}/>
        else if (this.props.type === 2) return <Animation2 style={charStyle}/>
        else if (this.props.type === 3) return <Animation3 style={charStyle}/>
        else if (this.props.type === 4) return <Animation4 style={charStyle}/>
        return
    }

    render() {
        return(
            <div>
                {this.renderAnimation()}

            </div>
        )
    }


} 

const mapStateToProps = state => {
    return({
      type: state.type
    })
  }

export default connect(mapStateToProps)(AnimationContainer)
import React from "react";
import "../App.css";
import Draggable from "react-draggable";

const styles = {
  height: "505px",
  width: "1002px",
  position: "relative",
  overflow: "auto",
  padding: "0",
};
const captures = {
  height: "480px",
  width: "1000px",
  boxSizing: "border-box",
  background: "#ddd",
};

class BoxDrag extends React.Component {
  constructor(props) {
    super(props);
    this.refCap = React.createRef();
  }

  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  };

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  onStart = () => {
    this.setState({ activeDrags: this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: this.state.activeDrags });
  };
 

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    return (
      <div>
        <div className='box' style={styles}>
          <div id='capture' style={captures} ref={this.refCap}>
            <Draggable bounds='parent' {...dragHandlers}>
              <div className='box'>BLOCO</div>
            </Draggable>
            <Draggable bounds='parent' {...dragHandlers}>
              <div className='box'>BLOCO</div>
            </Draggable>
            <Draggable bounds='parent' {...dragHandlers}>
              <div className='box'>BLOCO2</div>
            </Draggable>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxDrag;

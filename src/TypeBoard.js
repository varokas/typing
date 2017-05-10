import React, { Component } from 'react';

class TypeBoard extends Component {
  constructor(props) {
    super(props);

    var {text} = props;
    var caretIdx = 0;
    this.state = {text, caretIdx}
  }

  render() {
    return (
      <div className="typing">
        { this.state.text.split('').map( (value, idx) => <span key={idx} className={this.classNameAt(idx)}>{value}</span> ) }
      </div>
    );
  }

  classNameAt(idx) {
    if(this.state.caretIdx === idx) {
      return "caret";
    } else {
      return "";
    }
  }

}

export default TypeBoard;
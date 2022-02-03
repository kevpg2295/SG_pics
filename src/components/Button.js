import React from "react";

class ButtonApi extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onChangeBack}>Back</button>
        <button onClick={this.props.onChangeNext}>Next</button>
      </div>
    );
  }
}

export default ButtonApi;

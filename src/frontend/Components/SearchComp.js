import React, { useRef } from "react";
import Data from "../Data/Data";

class SearchComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }
  // add handleChange() and submitMessage() methods here

  // ***can update search while typing and show reasaults at all times***
  handleChange(event) {
    this.setState({
      input: event.target.value,
      messages: this.state.messages,
    });
    //alert(event.target.value)
    /*Data.setState({
      value:'search',
      text:event.target.value,
    })*/
    return (
      <Data value={''} text ={''}/>
    )

  }

  submitMessage() {
    if (this.state.input != "") {
      this.setState({
        //input: "",
        messages: [...this.state.messages, this.state.input],
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Product Search:</h2>
        
        <input
          placeholder="Search That S***"
          //onChange={this.props.handleChange('search',this.state.input)}
          //onChange={alert(this.props.value)}
          value={this.state.input}
        ></input>
        <button onClick={this.submitMessage.bind(this)}>Search</button>
        <ol>
          <h2>Product Search History:</h2>
          {this.state.messages.map((x, i) => {
            return <li key={i}>{x}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default SearchComp;

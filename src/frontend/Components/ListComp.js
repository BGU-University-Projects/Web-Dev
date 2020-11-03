import React, { useRef } from "react";
//import List from 'react-list-select'


class ListComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [
        "Prices for the poor" ,
        "Prices for the midclass" ,
        "Prices for the the rich ones" ,
      ],
    };
  }
  // add handleChange() and submitMessage() methods here
  handleClick(event) {
    switch (event.target.value) {
      case "Text1":
        return alert("Maria");
      case "Text2":
        return alert("2");
      case "Text3":
        return alert("3");
    }
    /*this.setState({
        input: event.target.value,
        messages: this.state.messages
      })*/
  }
  
  render() {
    return (
      <div>
          <h2>Prices available:</h2>
          
          
        <select>
  {this.state.prices.map(function (item) {
            return <option value={item}>{item}</option>;
          })}

</select>
      </div>
    );
  }
}
export default ListComp;

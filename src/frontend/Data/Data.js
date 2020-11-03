import React, { useRef } from "react";
import jData from "./jData";
import pic from "../images/sword pic.jpg";
import SearchComp from "../Components/SearchComp";
import CheckBoxComp from "../Components/CheckBoxComp";
import ListComp from "../Components/ListComp";
import { OPTIONS } from "../../App";
import { NoteIt } from "../../App";

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      type: OPTIONS,
      price: "",
    };
  }
  defaultDisplays = (
    <div>
      <input
        placeholder="Search That S***"
        onChange={this.handleChange.bind(this)}
      />
      <CheckBoxComp onChange={this.handleChange.bind(this)} />

      <ListComp onChange={this.handleChange.bind(this)} />
    </div>
  );
  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    });
    NoteIt("Update", "Starts By " + event.target.value, "success");
  }

  handleTypeChange(event) {
    if (event.target.isChecked === "0") {
      var index = this.state.type.indexOf(event.target.value);
      var newTypes = this.state.type;
      if (index !== -1) newTypes.splice(index, 1);
      this.setState({
        type: newTypes,
      });
      NoteIt("Update", "Without The Type " + event.target.value, "info");
    } else {
      var newTypes = this.state.type;
      newTypes.push(event.target.value);
      this.setState({
        type: newTypes,
      });
      NoteIt("Update", "With The Type " + event.target.value, "info");
    }
  }

  handleChange(event) {
    //alert(event.target.type)
    switch (event.target.type) {
      case "text":
        this.handleTextChange(event);
        break;
      case "checkbox":
        this.handleTypeChange(event);
        break;
    }
  }

  render() {
    //alert(this.state.value)
    const toSearch = this.state.text;
    return (
      <div>
        {this.defaultDisplays}
        <h1 className="all"> All Products</h1>
        {jData.map((s) => {
          var bigName=s.name.toUpperCase();
          var bigToSerch=toSearch.toUpperCase()
          if (
            bigName.startsWith(bigToSerch) &&
            this.state.type.indexOf(s.type) !== -1
          )
            return (
              <Item
                id={s.id}
                name={s.name}
                type={s.type}
                picture={s.picture}
                price={s.price}
                //style={{visibility: this.state.showButton ? 'visible' : 'hidden' }}
                visibility="hidden"
              />
            );
        })}
      </div>
    );
  }
}

export default Data;

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      type: props.type,
      picture: props.picture,
      price: props.price,
    };
  }

  handleClick() {
    return alert(this.props.price);
    //(<img src={this.state.picture}></img>);
  }
  render() {
    //alert(this.props.name);
    return (
      <tr key={this.props.id} onClick={() => this.handleClick()}>
        <td>{this.props.id}</td>,<td>{this.props.name}</td>,
        <td>{this.props.type}</td>,<td>{this.props.price}</td>
      </tr>
    );
  }
}

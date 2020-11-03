import React, { useRef } from "react";
import {OPTIONS} from "../../App";


class CheckBoxComp extends React.Component {
 
  handleClick(event) {
    //alert(event.target.value)
    if(event.target.isChecked ==='0')
    event.target.isChecked='1'
      else
      event.target.isChecked='0'

        this.props.onChange(event);
    }

  render() {
    return (
      <div>
        {OPTIONS.map(option => {
          const name=(option)
          return (<div>
              <input
              type="checkbox"
              id={name}
              value={name}
              onClick={this.handleClick.bind(this)}
              defaultChecked= {true}
              isChecked='1'
              />
              <label
                forhtml={name}
                value={name}
                onClick={this.handleClick.bind(this)}
              >{name}</label>
            
            </div>);
        })}
      </div>)
  }
}

export default CheckBoxComp;

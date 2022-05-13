import { Component } from "react";

class Email extends Component {
  render() { 
      const { handleChange, value } = this.props;
        return (
            <input 
                type="email" 
                name="email" 
                value={value}
                onChange={handleChange}
            /> )
    }
}
export default Email; 
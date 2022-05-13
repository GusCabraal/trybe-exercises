import { Component } from "react";

class Nome extends Component {
  render() { 
      const { handleChange, value, handleError} = this.props;
      if (value.length > 10) {
        handleError();
      }
        return (
            <input 
                type="text" 
                name="fullName" 
                value={value}
                onChange={handleChange}
            /> )
    }
}
export default Nome 
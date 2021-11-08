import React from "react";
import "./DropDown.css";

class DropDown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  //   show = () => {
  //     this.setState({
  //       visible: true,
  //     });
  //     console.log("GGGGGGGG");
  //   };

  //   hide = () => {
  //     this.setState({
  //       visible: false,
  //     });
  //     console.log("KKKKKK");
  //   };

  render() {
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
          // onMouseOver = {console.log('hhhhhhh')}
        >
          {this.state.visible ? "Скрыть" : "Показать"}
        </button>

        {visible && <div className="Dropdown__menu">Выпадающее меню</div>}
      </div>
    );
  }
}

export default DropDown;

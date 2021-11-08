// Реализация на хуках

import { useState } from "react";
import "./ColorPicker.css";

export default function ColorPicker({ options }) {
  const [activeOptionsIndx, setActiveOptionsIndx] = useState(0);

  const { label } = options[activeOptionsIndx];
  // console.log(options[activeOptionsIndx].label);

  const makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];
    if (index === activeOptionsIndx) {
      optionClasses.push("ColorPicker__option--active ");
    }
    return optionClasses.join(" ");
  };

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <div>
        <p>Цвет: {label}</p>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            // className="ColorPicker__option "
            className={makeOptionClassName(index)}
            style={{
              backgroundColor: color,
            }}
            onClick={() => setActiveOptionsIndx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

// Реализация на классах

// import React from "react";
// import "./ColorPicker.css";

// class ColorPicker extends React.Component {
//   state = {
//     activeOptionsIndx: 0,
//   };

//   setActiveInd = (index) => {
//     this.setState({
//       activeOptionsIndx: index,
//     });
//   };

//   makeOptionClassName = (index) => {
//     const optionClasses = ["ColorPicker__option"];
//     if (index === this.state.activeOptionsIndx) {
//       optionClasses.push("ColorPicker__option--active ");
//     }
//     return optionClasses.join(" ");
//   };

//   render() {
//     const activeLable = this.props.options[this.state.activeOptionsIndx];
//     console.log(activeLable);
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <div>
//           <p>Цвет: {activeLable.label}</p>
//           {this.props.options.map(({ label, color }, index) => (
//             <button
//               key={label}
//               className={this.makeOptionClassName(index)}
//               style={{
//                 backgroundColor: color,
//               }}
//               onClick={() => this.setActiveInd(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;

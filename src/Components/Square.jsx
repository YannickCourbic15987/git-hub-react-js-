// import { Component } from "react";

// class Square extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       //cela représente un état de l'objet
//       value: null,
//       // cette état  je le met par défaut , je lui met une valeur null à x
//     };
//   }
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() =>
//           this.setState({
//             value: "X",
//           })
//         }
//       >
//         {this.state.value}
//       </button>
//     );
//   }
// }
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;

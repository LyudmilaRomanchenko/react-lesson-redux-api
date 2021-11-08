import { connect, useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/counter/counter-action";
import { getValue, getStep } from "../../redux/counter/counter-selector";

function Counter() {
  const value = useSelector(getValue);
  const step = useSelector(getStep);
  const dispatch = useDispatch();

  const increment = () => dispatch(actions.increment(step));
  const decrement = () => dispatch(actions.decrement(step));

  return (
    <div>
      <span>{value}</span>
      <button type="button" onClick={increment}>
        Увеличить на {step}
      </button>
      <button type="button" onClick={decrement}>
        Уменьшить на {step}
      </button>
    </div>
  );
}

export default Counter;

// const mapStateToProps = (state) => ({
//   value: state.counter.value,
//   step: state.counter.step,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onIncrement: (value) => dispatch(actions.increment(value)),
//   onDecrement: (value) => dispatch(actions.decrement(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import React from "react"
import { connect } from "react-redux"

function Count({ count, increment, decrement }) {
  return (
    <div style={{ width: " 250px" }}>
      <p>Count: {count}</p>
      <button onClick={increment}>INCREMENT</button>
      <br />
      <button onClick={decrement}>DECREMENT</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.count,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)

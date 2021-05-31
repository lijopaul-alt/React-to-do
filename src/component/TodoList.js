import React, { Component } from "react";
import classes from "./list.module.css";

import FlipMove from "react-flip-move";

class TodoList extends Component {
  render() {
    const items = this.props.items;
    const list = items.map((items) => {
      return (
        <div key={items.key} className={classes.list}>
          <p>{items.text}</p>
          <span>
            <i
              className="fa fa-trash-o fa-lg"
              onClick={() => this.props.delete(items.key)}
            ></i>
          </span>
        </div>
      );
    });
    return (
      <div>
        <FlipMove duration={1500} easing="ease-in-out">
          {list}
        </FlipMove>
      </div>
    );
  }
}

export default TodoList;

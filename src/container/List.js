import React, { Component } from "react";
import "../App.css";
import TodoList from "../component/TodoList";

class List extends Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: "",
    },
    loading: false,
  };
  componentDidMount() {
    const items = JSON.parse(localStorage.getItem("items"));
    this.setState({ items: items });
  }
  updateItem = (event) => {
    event.preventDefault();

    this.setState({
      currentItem: { text: event.target.value, key: Date.now() },
    });
  };

  addItem = (event) => {
    event.preventDefault();
    const newCurrentItem = this.state.currentItem;
    if (newCurrentItem.text !== "") {
      this.setState({ loading: true });

      const newItem = [...this.state.items, newCurrentItem];
      localStorage.setItem("items", JSON.stringify(newItem));

      setTimeout(() => {
        this.setState({
          items: newItem,
          currentItem: {
            text: "",
            key: "",
          },
          loading: false,
        });
      }, 1000);
    }
  };

  deleteItem = (key) => {
    const newItemList = [...this.state.items];
    const newItem = newItemList.filter((item) => {
      return item.key !== key;
    });

    this.setState({ items: newItem });
  };

  render() {
    return (
      <div className="App">
        <h1>TO-DO-LIST</h1>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            value={this.state.currentItem.text}
            onChange={this.updateItem}
            placeholder="Add Your Task"
          ></input>
          <button type="submit">ADD</button>
        </form>

        <TodoList
          items={this.state.items}
          delete={this.deleteItem}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default List;

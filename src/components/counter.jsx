import React, { Component } from "react";

class Counter extends Component {
  state = {
    //count: this.props.counter.value,
    tags: []
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  // constructor() {
  //   super();
  //   this.incrementCount = this.incrementCount.bind(this);
  // }

  render() {
    const {
      onIncrement,
      onDelete,
      counter,
      children,
      onDecrement
    } = this.props;
    return (
      <React.Fragment className="row">
        {children}

        <div className="row">
          <div className="col-1">
            <span style={this.styles} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col">
            <button
              onClick={() => onIncrement(counter)}
              className="btn btn-secondary btn-sm "
            >
              +
            </button>
            <button
              onClick={() => onDecrement(counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={counter.value === 0 ? "disable" : ""}
            >
              -
            </button>
            <button
              onClick={() => onDelete(counter.id)}
              className="btn btn-danger btn-sm "
            >
              {" "}
              Delete{" "}
            </button>
          </div>
        </div>

        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;

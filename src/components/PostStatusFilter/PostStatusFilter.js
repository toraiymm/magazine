import React, { Component } from "react";
import "../PostStatusFilter/post-status-filter.css";

class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { label: "Все", name: "all" },
        { label: "Понравилось", name: "like" },
      ],
    };
  }

  render() {
    const { filter, onFilterSeleect } = this.props;
    const buttons = this.state.buttons.map(({ name, label }) => {
      const active = filter === name;
      const clazz = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          className={`btn ${clazz}`}
          key={name}
          type={"button"}
          onClick={() => onFilterSeleect(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}

export default PostStatusFilter;

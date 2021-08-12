import React from "react";
import PostListItem from "../PostListItem/PostListItem";
import "../PostList/post-list.css";

class PostList extends React.Component {
  render() {
    const { data, onDelete, onToggleImportant, onToggleLiked} = this.props;
    const elements = data.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <PostListItem
        onToggleImportant = {() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
          onDelete={() => onDelete(id)}
          key={id}
          {...itemProps}
        />
      );
    });

    return <ul className="app-list list-group">{elements}</ul>;
  }
}

export default PostList;

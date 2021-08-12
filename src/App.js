import React from "react";
import "./app.css";
import Header from "./components/Header/Header";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import PostStatusFilter from "./components/PostStatusFilter/PostStatusFilter";
import PostList from "./components/PostList/PostList";
import PostAddForm from "./components/PostAddForms/PostAddForms";
// import PostListItem from "./components/PostListItem/PostListItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Hello world", important: false, like: false, id: 1 },
        { label: "Hello Anu", important: false, like: false, id: 2 },
        { label: "Hello Nur", important: false, like: false, id: 3 },
        { label: "Hello Blue", important: false, like: false, id: 4 },
      ],
      filter: "all",
      term: '',
    };
    this.maxId = 5
  }

  onDeleteItem = (id) => {
    console.log(id);
    this.setState(({ data }) => {
      const index = this.state.data.findIndex((elem) => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr,
      };
    });
  };

  onToggleLiked = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, like: !old.like };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, important: !old.important };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      };
    });
  };

  filterPost = (items, filter) => {
    if (filter === "like") {
      return items.filter((elem) => elem.like);
    } else {
      return items;
    }
  };

  onFilterSeleect = (filter) => {
    this.setState({ filter });
  };

  onNewPostAdd = (body) => {
  const newItem = {
    label: body,
    important: false,
    like: false,
    id: this.maxId++
  }

  this.setState(({data}) => {
    const newArr = [...data, newItem]
    return {
      data: newArr
    }
  })
  };

  searchPost = (items, term ) => {
    if(term.length === 0) {
      return items
    } 
    return items.filter(item => {
      return item.label.indexOf(term) > -1
    })
  }

  OnSearchSelect = (term) =>{
    this.setState({term})
  }
  render() {
    const { data, filter, term } = this.state;
    const allPost = data.length;
    const liked = data.filter(elem => elem.like).length;
    const visibilePost = this.filterPost(this.searchPost(data, term), filter)

    return (
      <div className="app">
        <Header allPost={allPost} liked={liked} />
        <div className="search-panel d-flex">
          <SearchPanel OnSearchSelect={this.OnSearchSelect} />
          <PostStatusFilter filter={filter} onFilterSeleect={this.onFilterSeleect} />
        </div>
        <PostList
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
          onDelete={this.onDeleteItem}
          data={visibilePost}
        />
        {/* <PostListItem /> */}
        <PostAddForm onNewPostAdd={this.onNewPostAdd} />
      </div>
    );
  }
}

export default App;

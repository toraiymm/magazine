import React from "react";
import "../PostAddForms/post-add-form.css";

class PostAddForm extends React.Component {
 constructor (props) {
   super(props) 
     this.state = {
       text :''
     }
   }

 onValueChange = (e) => {
   this.setState({
     text: e.target.value
   })
 }
 onValueSubmit = (e) => {
   e.preventDefault()
   this.props.onNewPostAdd(this.state.text)
   this.setState({
     text: ''
   })
 }
 render() {
   return (
    <form
    onSubmit= {this.onValueSubmit}
    className="bottom-panel d-flex">
    <input
    onChange={this.onValueChange}
      className="form-control new-post-label"
      placeholder="Что вы хотите купить?"
      type="text"
      value={this.state.text}
    />
    <button
      type='submit'
      className="btn btn-outline-secondary"
    >
      Добавить
    </button>
  </form>
   )
 }
}

export default PostAddForm;

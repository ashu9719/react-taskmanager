import React from 'react';
import logo from './logo.svg';
import './App.css';
import './cssreset.css';
import ListItems from './ListItems';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentText:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this); // binding is mandatory to make it available for set
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  addItem(t){
    t.preventDefault();
    const newItem = this.state.currentText;
    console.log(newItem.text)
    if(newItem.text !== ""){
      const oldList= this.state.items
      oldList.push(newItem)
      this.setState({items:oldList,
        currentText:{
          text:'',
          key:''}
      });
    }

  }
  deleteItem(key){
    const filterList= this.state.items.filter(item => item.key !== key);
    this.setState({items:filterList,
      currentText:{
        text:'',
        key:''}
    });
    }
  updateItem(text,key){
    const oldList= this.state.items
    oldList.map(i => {if(i.key === key){
      i.text = text
    }} )
    this.setState({items:oldList,
      currentText:{
        text:'',
        key:''}
    });
  }
  handleInput(t){
    this.setState(
      {
        currentText:{
          text : t.target.value,
          key: Date.now()

        }
      }
    );
  }
render(){
  return (

  <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="New task"
            value={this.state.currentText.text} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
    </header>
    <ListItems items={this.state.items} deleteItem={this.deleteItem}
      updateItem={this.updateItem}
      ></ListItems>
  </div>

  );
}

}

export default App;

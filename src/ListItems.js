import React from 'react';
import './listItem.css';

function ListItems(props){
  const items = props.items;
  const listItems = items.map(item =>
    {
        return <div className="list" key={item.key}>
          <p>
            <input type="text" id={item.key} value={item.text} onChange={ (e) =>{
              props.updateItem(e.target.value,item.key)
            }

            }/>
            <span>
              <button onClick={() => props.deleteItem(item.key)} className="btn btn-warning glyphicon glyphicon-trash">delete</button>
            </span>
          </p>

        </div>
    }
  )
  return (
    <div>{listItems}</div>
  )
}
export default ListItems;

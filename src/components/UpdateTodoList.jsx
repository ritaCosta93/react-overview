import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export const UpdateTodoList = () => {
  const [todoListItems, updateTodos] = useState(['study', 'work']);
  const [newTodo, setNewTodo] = useState('');

  const addItem = () => {
    updateTodos([...todoListItems, newTodo]);
  };

  const removeItem = index => {
    updateTodos(todoListItems.filter((_, i) => i !== index));
  };

  return (
    <div className='update-todo-list flex flex-col  my-2 p-2 gap-2'>
      <strong>Todo List</strong>
      {todoListItems.map((item, index) => (
        <ul className='list-disc' key={index}>
          <li onClick={() => removeItem(index)} className='active:bg-red-200 active:animate-bounce w-50'>
            {item}
          </li>
        </ul>
      ))}
      <input type='text' className='border border-pink-200 w-50' onChange={e => setNewTodo(e.target.value)} />
      <button className='p-2 rounded button-sm bg-pink-500 w-25 hover:bg-pink-200' onClick={addItem}>
        Add Item
      </button>
      <ReactMarkdown>
        **Description**: **Updates a state**, a todo list, with items from a text input field. Also **removes items from the list**, updating the state when
        clicking on the item. Used the array method **array.filter()** to remove a specific item from the list.
      </ReactMarkdown>
    </div>
  );
};

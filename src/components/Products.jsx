import { useReducer } from 'react';
import { Description } from './Description';

const initialState = [
  { id: 0, name: 'Wheel', price: 17.0, stock: 3 },
  { id: 1, name: 'Brake', price: 25.0, stock: 1 }
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'sellBrake':
      return state.map(product => (product.id === 1 && product.stock > 0 ? { ...product, stock: product.stock - 1 } : product));
    case 'addProduct':
      return [
        ...state,
        {
          id: (Math.random() * 200) % 2,
          name: 'Pedal',
          price: 40.0,
          stock: 6
        }
      ];
    default:
      return state;
  }
};

export const Products = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='products flex flex-col my-2 p-2 gap-2'>
      <strong>Products</strong>
      <ul>
        {state.map(p => (
          <li key={p.id}>
            {p.name} — ${p.price} — Stock: {p.stock}
          </li>
        ))}
      </ul>

      <button onClick={() => dispatch({ type: 'sellBrake' })} className='p-2 bg-blue-500 text-white rounded'>
        Sell 1 Brake
      </button>
      <button onClick={() => dispatch({ type: 'addProduct' })} className='p-2 bg-blue-500 text-white rounded'>
        Add 1 Product
      </button>
      <Description text='This component uses the **useReducer** hook and implements a reducer to manage a list of products.' />
    </div>
  );
};

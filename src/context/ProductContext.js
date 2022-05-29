import createDataContext from './createDataContext';

const productReducer = (state, action) => {
  switch (action.type) {
    case 'delete_product':
      return state.filter(product => product.id !== action.payload);
    case 'add_product':
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
        }
      ];
    default:
      return state;
  }
};

const addProduct = dispatch => {
  return (id, title) => {
    dispatch({ type: 'add_product', payload: { id, title } });
  };
};
const deleteProduct = dispatch => {
  return id => {
    dispatch({ type: 'delete_product', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  productReducer,
  { addProduct, deleteProduct },
  []
);

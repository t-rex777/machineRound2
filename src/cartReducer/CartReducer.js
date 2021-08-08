export const initialState = {
  cart: [],
  savedItems: [],
};

export function reducerFunc(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { product: action.payload, quantity: 1 }],
      };
      case "ADD_TO_SAVEDITEMS":
      return {
        ...state,
        savedItems: [...state.savedItems, { product: action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
      case "REMOVE_FROM_SAVEDITEMS":
        return {
          ...state,
          savedItems: state.savedItems.filter((item) => item.product.id !== action.payload),
        };
    case "INCREASE_QNT":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.product.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };

    case "DECREASE_QNT":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.product.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 }; //todo
          }
          return item;
        }),
      };
    default:
      break;
  }
}

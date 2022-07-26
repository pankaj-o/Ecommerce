const reducer = (state, action) => {
  if (action.type === "REMOVEITEM") {
    return {
      ...state,
      CartItem: state.CartItem.filter((curelem) => {
        return curelem.id !== action.payload;
      }),
    };
  }
  if (action.type === "CLEARCART") {
    return {
      ...state,
      CartItem: [],
    };
  }
  if (action.type === "ITEMADDED") {

    const mydata = state.Adata.find(b=> b.id == action.payload)
   console.log(mydata)
    
    return { ...state, CartItem: state.Adata };
  }

  if (action.type === "INCREMENT") {
    const updatedCart = state.CartItem.map((curElem) => {
      if (curElem.id == action.payload) {
        return { ...curElem, count: curElem.count + 1 };
      }

      return curElem;
    });
    return { ...state, CartItem: updatedCart };
  }

  if (action.type === "DECREMENT") {
    const updatedCart = state.CartItem.map((curElem) => {
      if (curElem.id == action.payload) {
        return { ...curElem, count: curElem.count - 1 };
      }
      return curElem;
    }).filter((curElem) => curElem.count !== 0);
    return { ...state, CartItem: updatedCart };
  }
};

export default reducer;

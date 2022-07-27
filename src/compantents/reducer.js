const reducer = (state, action) => {
  if (action.type === "REMOVEITEM") {
    localStorage.removeItem(action.payload);
    return {
      ...state
    };
  }
  if (action.type === "CLEARCART") {
    localStorage.clear();
    return {
      ...state
    };
  }
  if (action.type === "ITEMADDED") {
    const mydata = state.Adata.find((b) => b.id == action.payload);
    localStorage.setItem(mydata.id, JSON.stringify(mydata));
    return { ...state, CartItem: mydata };
  }

  if (action.type === "INCREMENT") {
    const mydata = state.Adata.find((b) => b.id == action.payload);
    // console.log("inreducer increment",mydata)
     let po=mydata.count++
    // console.log("inreducer increment after",mydata)
    localStorage.setItem(mydata.id, JSON.stringify(mydata));
    return { ...state};
  }

  if (action.type === "DECREMENT") {
    const mydata = state.Adata.find((b) => b.id == action.payload);
    // console.log("inreducer increment",mydata)
    mydata.count<=0? localStorage.removeItem(action.payload):mydata.count--
    
    // console.log("inreducer increment after",mydata)
    localStorage.setItem(mydata.id, JSON.stringify(mydata));
    return { ...state };
  }
};

export default reducer;

export const reducer = (state, action) => {
  if (action.type === "TESTING") {
    const newPeople = [...state.people, action.payload];
    return { ...state, people: newPeople, modalContent: "Item added", showModal: true };
  }

  if (action.type === "EMPTY_VALUE") {
    return { ...state, modalContent: "Plese enter something...", showModal: true };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, showModal: false };
  }

  throw new Error("action.type did not match any condition here.");
};

export const reducer = (state, action) => {
  console.log(state);
  if (action.type === "ADD_PERSON")
    return {
      ...state,
      people: [...state.people, action.payload],
      isModalOpen: true,
      modalContent: "item added",
    };
  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Please type a name" };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter((p) => p.id !== action.payload);
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: `User with id ${action.payload} has been removed.`,
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  throw new Error("No maching action");
};

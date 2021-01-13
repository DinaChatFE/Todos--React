export const savelocalhost = Todos => {
  localStorage.setItem("Todos", JSON.stringify(Todos));
};
export const getlocolhost = SetTodos => {
  if (localStorage.getItem("Todos") === null) {
    localStorage.setItem("Todos", JSON.stringify([]));
  } else {
    let LocalStorage = JSON.parse(localStorage.getItem("Todos"));
    SetTodos(LocalStorage);
  }
};

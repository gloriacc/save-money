let idString = window.localStorage.getItem('id');
let id = idString ? parseInt(idString) : 0;
const createId = () => {
  id++;
  window.localStorage.setItem('id', id.toString());
  return id;
}
export {createId};
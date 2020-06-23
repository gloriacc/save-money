const createId = (fieldName: string) => {
  const idString = window.localStorage.getItem(fieldName);
  let id = idString ? parseInt(idString) : 0;
  id++;
  window.localStorage.setItem(fieldName, id.toString());
  return id;
}
export {createId};
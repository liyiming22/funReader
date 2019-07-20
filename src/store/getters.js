const getters = {
  getShelfBookList: state => state.bookShelf,
  getCurrBook: state => state.currBook,
  // isAdded: ({ bookShelf }) => (id) => { return -1 !== bookShelf.findIndex(book => book._id === id) }
}
export default getters
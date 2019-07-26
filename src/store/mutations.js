import {
  SET_CURR_BOOK,
  ADD_BOOK,
  REMOVE_BOOK,
  SET_CATEGORY,
  SET_CURR_CHAPTER_LIST,
  SET_CURR_CHAPTER,
  SET_CURR_CONTENT,
  REVERSE_CHAPTER, CHANGE_SKIN,
  TOGGLE_NIGHT_MODE,
  ZOOM_IN,
  ZOOM_OUT,
  UPDATE_TOP,
  SET_CATE
} from './mutation-types'

const mutations = {
  [SET_CURR_BOOK]: (currBook, payload) => {
    // state.currBook = payload
    currBook._id = payload._id
    currBook.title = payload.title
    currBook.author = payload.author
    currBook.cover = payload.cover
    currBook.updated = payload.updated
    currBook.lastChapter = payload.lastChapter
    console.log(currBook)
  },

  [SET_CURR_CHAPTER_LIST]: (state, payload) => {
    state.chapterList = payload
  },

  [SET_CURR_CHAPTER]: (state, payload) => {
    state.currChapter = payload
  },

  [SET_CURR_CONTENT]: (state, payload) => {
    state.currContent.push(payload)
  },

  [REVERSE_CHAPTER]: state => {
    state.normalOrder = !state.normalOrder
    state.chapterList.reverse()
  },

  [CHANGE_SKIN]: (state, payload) => {
    state.skin = payload
  },

  [TOGGLE_NIGHT_MODE]: state => {
    state.isNight = !state.isNight
  },

  [ZOOM_IN]: state => {
    if (26 <= state.fontSize)
      return
    ++state.fontSize
  },

  [ZOOM_OUT]: state => {
    if (10 >= state.fontSize)
      return
    --state.fontSize
  },

  [UPDATE_TOP]: (state, payload) => {
    state.topBooks = payload
  },

  [ADD_BOOK]: ({ bookShelf }, payload) => {
    const book = {}
    book._id = payload._id
    book.title = payload.title
    book.author = payload.author
    book.cover = payload.cover
    book.updated = payload.updated
    book.lastChapter = payload.lastChapter
    bookShelf.push(book)
    localStorage.setItem("bookShelf", JSON.stringify(bookShelf))
  },

  [REMOVE_BOOK]: ({ bookShelf }, payload) => {
    bookShelf.splice(payload, 1)
    localStorage.setItem("bookShelf", JSON.stringify(bookShelf))
  },

  [SET_CATEGORY]: (state, payload) => {
    state.category = payload
  },

  [SET_CATE]: (state, payload) => {
    state.cateSet = payload
  }
}

export default mutations

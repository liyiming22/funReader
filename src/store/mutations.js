import {
  SET_CURR_BOOK,
  SET_CURR_CHAPTER_LIST,
  SET_CURR_CHAPTER,
  SET_CURR_CONTENT,
  REVERSE_CHAPTER
} from './mutation-types'

const mutations = {
  [SET_CURR_BOOK]: (state, payload) => {
    state.currBook = payload
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

  [REVERSE_CHAPTER]: (state) => {
    state.normalOrder = !state.normalOrder
    state.chapterList.reverse()
  }
}

export default mutations

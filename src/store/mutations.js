import {
  SET_CURR_BOOK,
  SET_CURR_CHAPTER_LIST,
  SET_CURR_CHAPTER,
  SET_CURR_CONTENT,
  REVERSE_CHAPTER,
  CHANGE_SKIN,
  TOGGLE_NIGHT_MODE,
  ZOOM_IN,
  ZOOM_OUT,
  UPDATE_TOP
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
  }
}

export default mutations

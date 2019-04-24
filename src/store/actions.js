import axios from 'axios'
import { API_BASE, querySource, queryChapters } from '@/axios/apis'
import {
  SET_CURR_BOOK,
  SET_CURR_CHAPTER_LIST,
  SET_CURR_CHAPTER,
  SET_CURR_CONTENT
} from './mutation-types'

const actions = {
  /**
   * 
   * @param {*} bookID 
   * @description 获取所有书籍源列表
   */
  getBookSource({ commit }, bookID) {
    return new Promise((resolve, reject) => {
      console.log(`${ API_BASE }/${ querySource }${ bookID }`)
      axios.get(`${ API_BASE }/${ querySource }${ bookID }`)
           .then(source => resolve(source))
           .catch(err => reject(err))
    })
  },

  /**
   * 
   * @param {*} sourceID
   * @description 这个方法根据指定的书源获取章节
   */
  getChaptersBySource({ commit }, sourceID) {
    return new Promise((resovle, reject) => {
      console.log(`${ API_BASE }/${ queryChapters }/${ sourceID }`)
      axios.get(`${ API_BASE }/${ queryChapters }/${ sourceID }`)
           .then(chapterList => resovle(chapterList))
           .catch(err => reject(err))
    })
  },

  /**
   * 
   * @param {*} bookID 
   * @description 这个方法根据书籍的id来返回优质书源的章节列表
   */
  getChaptersById({ dispatch, commit }, bookID) {
    return new Promise(async (resolve, reject) => {
      try {
        // 默认使用第一个(优质书源)
        const sourceObj = await dispatch('getBookSource', bookID)
        const { _id } = sourceObj.data[0]
        const chapterObj = await dispatch('getChaptersBySource', _id)
        const { chapters } = chapterObj.data
        // 设置state中的章节列表
        commit(SET_CURR_CHAPTER_LIST, chapters)
        resolve(chapters)
      } catch (err) {
        reject(err)
      }
    })
  }
}

export default actions

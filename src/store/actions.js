import fetch from '@/fetch/fetch'
import { querySource, queryChapters, queryContent,
         queryCategory, queryRank, queryTopHot,
         queryInfo } from '@/fetch/apis'
import {
  SET_CURR_BOOK,
  SET_CURR_CHAPTER_LIST,
  SET_CURR_CHAPTER,
  SET_CURR_CONTENT,
  UPDATE_TOP
} from './mutation-types'
import { encode } from 'punycode';

const actions = {
  /**
   * 
   * @param {*} bookID 
   * @description 获取所有书籍源列表
   */
  getBookSource({ commit }, bookID) {
    return new Promise((resolve, reject) => {
      fetch(`${ querySource }`, {
        view: 'summary',
        book: bookID
      })
      .then(source => resolve(source))
      .catch(error => reject(error))
    })
  },

  /**
   * 
   * @param {*} sourceID
   * @description 这个方法根据指定的书源获取章节
   */
  getChaptersBySource({ commit }, sourceID) {
    return new Promise((resolve, reject) => {
      fetch(`${ queryChapters }/${ sourceID }`)
           .then(chapterList => resolve(chapterList))
           .catch(error => reject(error))
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
        console.log('正在查找书源')
        const sourceObj = await dispatch('getBookSource', bookID)
        console.log('书源查找完毕')
        const { _id } = sourceObj.data[0]
        console.log('为你查找章节')
        const chapterObj = await dispatch('getChaptersBySource', _id)
        console.log('章节返回完毕')
        const { chapters } = chapterObj.data
        // 设置state中的章节列表
        commit(SET_CURR_CHAPTER_LIST, chapters)
        resolve(chapters)
      } catch (err) {
        reject(err)
      }
    })
  },

  /**
   * 
   * @param {*} chapterLink 
   * @description 这个方法是根据传入的章节link返回指定章节的内容
   * @warning 章节的link需要进行URI编码
   */
  getContent({ commit }, chapterLink) {
    const encodedURI = encodeURIComponent(chapterLink)
    return new Promise((resolve, reject) => {
      fetch(`${ queryContent }/${ encodedURI }`)
           .then(content => {
             resolve(content.data.chapter)
           })
           .catch(error => reject(error))
    })
  },

  /**
   * @description 这个方法是获取排名分类
   */
  getCategory() {
    return new Promise ((resolve, reject) => {
      fetch(`${ queryCategory }`)
           .then(category => {
             resolve(category)
           })
           .catch(error => reject(error))
    })
  },

  /**
   * @param {*} rankID
   * @description 这个方法是根据传入的 rankID 来返回指定的排名 默认返回的是最热 Top 100
   */
  getRank ({ commit }, rankID = queryTopHot) {
    return new Promise ((resolve, reject) => {
      fetch(`${ queryRank }/${ rankID }`)
           .then(res => {
             commit(UPDATE_TOP, res.data.ranking.books)
             resolve(res.data.ranking)
           })
           .catch(error => reject(error))
    })
  },

  /**
   * @param {*} bookid
   * @description 这个方法是根据传入的书本 ID 来返回书本的详细信息
   */
  getBookInfo ({ commit }, bookID) {
    return new Promise ((resolve, reject) => {
      fetch(`${ queryInfo }/${ bookID }`)
           .then(res => {
             resolve(res.data)
           })
           .catch(error => reject(error))
    })
  }
}

export default actions

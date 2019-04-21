import axios from 'axios'
import { API_BASE, querySource } from '@/axios/apis'

const actions = {
  getBookSource({ commit }, bookID) {
    return new Promise((resolve, reject) => {
      console.log(`${ API_BASE }/${ querySource }${ bookID }`)
      axios.get(`${ API_BASE }/${ querySource }${ bookID }`)
           .then(source => resolve(source))
           .catch(err => reject('error', err))
    })
  },

  // async getChaptersList({ commit }) {
  //   try {
  //     const sourceID = await dispatch('getBookSource')
  //     resolve(sourceID)
  //   } catch {
  //     console.log('error')
  //   }
  // }
}
export default actions
<template>
  <div>
    {{this.$route.params.id}}
    {{this.sourceObj}}
    <BookText :id="this.$route.params.id"></BookText>
  </div>
</template>

<script>
import BookText from '@/components/BookText'
export default {
  name: 'reader',
  components: {
    BookText
  },
  data () {
    return {
      sourceObj: ''
    }
  },
  methods: {
    // getSource () {
    //   this.$store.dispatch('getBookSource', this.$route.params.id)
    //              .then((source) => {
    //                this.sourceObj = source
    //                console.log(this.sourceObj)
    //              })
    //              .catch(err => console.log('error', err))
    // },
     async getSource () {
      try {
        const obj = await this.$store.dispatch('getBookSource', this.$route.params.id)
        this.sourceObj = obj
        console.log(this.sourceObj)
      } catch (err) {
        console.log(err)
      }
    }
  },
  created () {
    this.getSource()
  }
}
</script>

<template>
  <article>
    This is your book page~
    {{id}}
  </article>
</template>

<script>
export default {
  name: 'Booktext',
  props: ['id']
}
</script>

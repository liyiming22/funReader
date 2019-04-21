<template>
  <article>
    This is your book page~
    {{id}}
  </article>
</template>

<script>
export default {
  name: 'booktext',
  props: ['id']
}
</script>

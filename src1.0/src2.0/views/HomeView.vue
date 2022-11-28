<template>
  <hello-world />
</template>
<script>
  import HelloWorld from '../components/HelloWorld'
  export default {
    name: 'home',
    components: {
      'hello-world':HelloWorld,
    },
  }
</script>

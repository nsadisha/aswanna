<template>
  <footer class="p-4">
      &copy; {{ year }} Aswanna.
  </footer>
</template>

<script>
export default {
    name: 'Footer',
    data (){
        return{
            year: ''
        }
    },
    mounted(){
        var date = new Date()
        this.year = date.getFullYear()
    }
}
</script>

<style scoped>

footer{
    background-color: #eaeaea;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 15px;
    color: #333e5c;
    text-align: center;
}

</style>
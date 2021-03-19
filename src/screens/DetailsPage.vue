<template>
  <div class="container-fluid p-3 p-md-5">
      <div class="row">
          <div class="col-lg-4">
              <img src="" alt="">
          </div>
          <div class="col-lg-8">{{id}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DetailsPage',
    data(){
        return{
            id: '',
        }
    },
    mounted(){
        this.id = this.$route.params.id
    }
}
</script>

<style scoped>
/* Global css */
@import url('../assets/css/styles.css');

</style>
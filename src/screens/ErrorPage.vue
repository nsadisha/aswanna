<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col"></div>
      <div class="col-9 col-sm-8 col-md-8 col-lg-6 text-center">
        <img src="../assets/images/404error.gif" alt="" class="error">
        <h2>Page not found!</h2>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ErrorPage'
}
</script>

<style>
  .error{
    width: 100%;
    height: auto;
  }
</style>
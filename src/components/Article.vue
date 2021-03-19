<template>
  <div class="col-xs-12 col-sm-6 col-lg-3 mb-2">
      <b-card style="border-radius: 7px;">
          <img :src="data.img" alt="Article image" width="100%" class="mb-2">
          <h4>{{ data.title }}</h4>
          <p>{{ data.description }}</p>

          <div class="btn-div"><router-link :to="data.link" class="mx-auto"><button class="read-more-btn">Read more</button></router-link></div>
      </b-card>
  </div>
</template>

<script>
export default {
    name: 'Artile',
    props:{
        data: {}
    },data(){
        return{
            articles:[

            ]
        }
    }
}
</script>

<style scoped>
h4{
    font-size: 1.2rem;
    font-weight: 600;
}
p{
    color: #575757;
    font-size: 0.92rem;
}
.btn-div{
    display: grid;
    align-items: center;
}
.read-more-btn{
    padding: 0.8rem 1.5rem;
    border: none;
    margin-top: 1rem;
    font-weight: 600;
    background: #e6e6e6;
    position: relative;
    border-radius: 50px;
    transition: 0.3s;
}
.read-more-btn:hover{
    background: green;
    color: white;
}
</style>
<template>
  <div class="col-xs-12 col-sm-6 col-lg-3 mb-2">
      <b-card style="border-radius: 7px;" class="item">
          <div v-if="data.sale" pill class="sale-badge"><strong>SALE</strong></div>
          <router-link :to="'/details/'+data.id"><img :src="data.image" alt="" width="100%"></router-link>
          <span class="name">
              <strong><router-link :to="'/details/'+data.id" class="no-link">{{ data.name }}</router-link> - </strong><span>{{ data.unit }}</span>
          </span>
          <span class="price"><strong>Rs. {{ data.price }}</strong></span>
      </b-card>
  </div>
</template>

<script>
export default {
    name: 'Item',
    props:{
        data:{
            id:Number,
            sale: Boolean,
            name: String,
            price: String,
            unit: String,
            image: String,
        }
    },
    data(){
        return{
            amount: 1
        }
    },
}
</script>

<style scoped>
/* Global css */
@import url('../assets/css/styles.css');
.no-link{
    color: #343f49;
}

.item{
    transition: 0.1s;
    position: relative;
}
.item:hover{
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.473);
}

.sale-badge{
    width: fit-content;
    border-radius: 50px;
    background: #fed700;
    color: #343f49;
    padding: 0rem 0.5rem;
}
.sale-badge strong{
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 800;
}
.name{
    display: block;
}
.name strong{
    font-size: 1.2rem;
}
.price{
    display: block;
}
.price strong{
    font-size: 1.1rem;
    color: rgb(107, 107, 107);
}
</style>
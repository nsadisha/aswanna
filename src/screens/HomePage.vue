<template>
  <div>
    <section>
      <div class="container-fluid p-4">
        <div class="row">
          <div class="col-md-5 mx-auto">
            <b-input-group>
              <b-form-input placeholder="Search" v-model="searchQuery"></b-form-input>
              <b-input-group-append>
                <b-button variant="secondary" @click="search">Search</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </div>
      </div>  
      <Carousel />
    </section>

    <section class="p-3 p-lg-5"><hr>
      <div class="container-fluid">
        <div class="row">
          <div class="text-center" v-if="!items">
            <b-spinner variant="success" label="Spinning" style="width: 3rem; height: 3rem;"></b-spinner>
          </div>
          <div class="text-center" v-else-if="items.length==0">
            <h2 v-if="searchQuery==''">There are no items!</h2>
            <h2 v-else>There are no items related to {{searchQuery}}!</h2>
          </div>
          <div class="text-center" v-else-if="showSearchText">
            <h2>Showing results for {{searchQuery}}.</h2>
          </div>
          
          <Item v-for="item in items" :key="item._id" :data="item"/>
        </div>
      </div>
    </section>

    <section class="p-3 p-lg-5">
      <h2>FEATURED PRODUCTS</h2>
      <Chr />
      <div class="container-fluid">
        <div class="row">
          <div class="text-center" v-if="!featuredItems">
            <b-spinner variant="success" label="Spinning" style="width: 3rem; height: 3rem;"></b-spinner>
          </div>
          <div class="text-center" v-else-if="featuredItems.length==0">
            <h2>There are no featured items!</h2>
          </div>
          <Item v-for="featuredItem in featuredItems" :key="featuredItem._id" :data="featuredItem"/>
        </div>
      </div>
    </section>

    <section class="p-3 p-lg-5">
      <h2>ARTICLES</h2>
      <Chr />
      <div class="container-fluid">
        <div class="row">
          <Article :data="articles[0]" />
          <Article :data="articles[1]" />
          <Article :data="articles[2]" />
          <Article :data="articles[3]" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'HomePage',
    data(){
      return{
        searchQuery: '',
        showSearchText: false,
        articles: [
          {
            title: 'Article 1',
            description: 'This is the short description for post 1. Please read this article.',
            img: 'https://img.allw.mn/thumbs/pv/nf/fcw84d9r5e34704a0bac4440210170_1080x1080.jpg',
            link: '#1'
          },
          {
            title: 'Article 2',
            description: 'This is the short description for post 2. Please read this article.',
            img: 'https://img.allw.mn/thumbs/pv/nf/fcw84d9r5e34704a0bac4440210170_1080x1080.jpg',
            link: '#2'
          },
          {
            title: 'Article 3',
            description: 'This is the short description for post 2. Please read this article.',
            img: 'https://img.allw.mn/thumbs/pv/nf/fcw84d9r5e34704a0bac4440210170_1080x1080.jpg',
            link: '#3'
          },
          {
            title: 'Article 4',
            description: 'This is the short description for post 4. Please read this article.',
            img: 'https://img.allw.mn/thumbs/pv/nf/fcw84d9r5e34704a0bac4440210170_1080x1080.jpg',
            link: '#4'
          },
        ],

        items: null,
        featuredItems:[]
      }
    },
    mounted(){
      fetch('https://aswanna.herokuapp.com/item', {method: 'GET'}).then(response => {
        return response.json();
      }).then(res => {
        this.items = res.data
      }).catch(err => {
        console.log(err)
        alert(err.message)
      })
    },
    methods:{
      search: function(){
        if(this.searchQuery != ''){
          this.items = null;
          this.showSearchText = true;
          fetch('https://aswanna.herokuapp.com/item?q='+this.searchQuery, {method: 'GET'}).then(response => {
            return response.json();
          }).then(res => {
            this.items = res.data
          }).catch(err => {
            console.log(err)
            alert(err.message)
          });
        }else{
          this.items = null;
          this.showSearchText = false;
          fetch('https://aswanna.herokuapp.com/item', {method: 'GET'}).then(response => {
            return response.json();
          }).then(res => {
            this.items = res.data
          }).catch(err => {
            console.log(err)
            alert(err.message)
          });
        }
      }
    }
}
</script>

<style scoped>
/* Global css */
@import url('../assets/css/styles.css');

.carousel{
  width: 100%;
  height: 20%;
}
</style>
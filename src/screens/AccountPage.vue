<template>
  <div class="container-fluid py-3 px-3 px-md-5">
    <div class="row">
      <div class="col-lg-3">
        <div class="pt-3">
          <div class="avatar">
            <i class="fas fa-user"></i>
          </div>
          <h5 class="mt-3 text-center">{{ email }}</h5>
          <ul class="mt-3 details p-0" style="list-style: none">
            <li><Strong>Phone: </Strong>{{ phone }}</li>
            <li><Strong>City: </Strong>{{ city }}</li>
          </ul>
        </div>
        <hr>
        <div class="mt-4 mb-4 mb-lg-0">
          <router-link to="#get-premium" class="no-link">
            <button class="get-premium-btn mx-auto"><strong>Get Premium</strong> <i class="fas fa-crown"></i></button>
          </router-link>
        </div>
      </div>
      <div class="col-lg-9">
        <b-tabs content-class="mt-3">
          <b-tab title="Sell items" active>
            <div class="row">
              <div class="text-center" v-if="!items">
                <b-spinner variant="success" label="Spinning" style="width: 3rem; height: 3rem;"></b-spinner>
              </div>
              <div class="text-center" v-else-if="items.length==0">
                <h2>There are no items!</h2>
              </div>
              <Item v-for="item in items" :key="item._id" :data="item"/>
            </div>
          </b-tab>
          <b-tab title="Saved items">
            <div class="row">
              <div class="text-center" v-if="!savedItems">
                <b-spinner variant="success" label="Spinning" style="width: 3rem; height: 3rem;"></b-spinner>
              </div>
              <div class="text-center" v-else-if="savedItems.length==0">
                <h2>There are no saved items!</h2>
              </div>
              <Item v-for="savedItem in savedItems" :key="savedItem._id" :data="savedItem" saved/>
            </div>
          </b-tab>
          <b-tab title="Settings"><p>Settings</p></b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountPage",
  data() {
    return {
      email: '',
      phone: '',
      city: '',
      items: null,
      savedItems: null,
      isSigninIn: this.$cookies.isKey('aswanna-user-id')
    };
  },
  methods:{
    loadData(uid){
      fetch('https://aswanna.herokuapp.com/wishlist/'+uid, {method: 'GET'}).then(response => {
        return response.json();
      }).then(res => {
        if(res.status){
          this.items = res.items;
          this.savedItems = res.wishlist;
        }
      }).catch(err => {
        console.log(err)
        alert(err.message)
      })
    }
  },
  mounted(){
    this.isSigninIn = this.$cookies.isKey('aswanna-user-id');
    if(!this.isSigninIn){
      window.location = '/#/signin'
    }else{
      var userId = this.$cookies.get('aswanna-user-id');
      this.loadData(userId)
      var user = this.$cookies.get('aswanna-user-data');
      this.email = user.email;
      this.phone = user.phone;
      this.city = user.city;
      console.log(userId)
    }
  },
};
</script>

<style scoped>
/* Global css */
@import url("../assets/css/styles.css");
.avatar {
  background: #ddd;
  width: 5rem;
  height: 5rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
}
.avatar i {
  font-size: 2rem;
}
.details li{
  text-transform: capitalize;
}

.get-premium-btn{
  display: flex;
  justify-content: space-between;
  align-content: center;
  border: solid 2px transparent;
  border-radius: 7px;
  padding: 0.75rem;
  background: #fed700;
  color: #343f49;
  width: 100%;
  line-height: initial;
  transition: 0.1s;
}
.get-premium-btn:hover{
  border: solid 2px #343f49;
}
.get-premium-btn i{
  display: flex;
  align-items: center;
  font-size: 1.1rem;
}

/* Responsive css */
@media only screen and (max-width:991px){
  .get-premium-btn{
    width: 17rem;
  }
}
@media only screen and (max-width:470px){
  .get-premium-btn{
    width: 100%;
  }
}

</style>
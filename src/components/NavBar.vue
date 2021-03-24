<template>
<div class="full-width">
  <b-navbar toggleable="lg" type="light" variant="light" class="px-2" sticky>
    <b-navbar-brand href="/">
      <img src="../assets/images/logo.png" width="30px" class="d-inline-block align-top">
      Aswanna
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :active="currentNav=='HomePage'?true:false" active-class="active"><router-link to="/" class="no-link">Home</router-link></b-nav-item>
        <b-nav-item :active="currentNav=='AboutPage'?true:false" active-class="active"><router-link to="/about" class="no-link">About</router-link></b-nav-item>
        <b-nav-item :active="currentNav=='SellItem'?true:false" active-class="active" class="d-none d-lg-block"><router-link :to="isSigninIn?'/sell':'/signin'" class="no-link">Sell Item</router-link></b-nav-item>
        <b-nav-item v-if="!isSigninIn" :active="currentNav=='RegisterPage'?true:false" active-class="active"><router-link to="/register" class="no-link">Register</router-link></b-nav-item>
        <b-nav-item v-if="!isSigninIn" :active="currentNav=='SigninPage'?true:false" active-class="active"><router-link to="/signin" class="no-link">Signin</router-link></b-nav-item>
        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <b-nav-item-dropdown v-if="isSigninIn" text="User" right>
          <b-dropdown-item><router-link to="/account" class="no-link">Account</router-link></b-dropdown-item>
          <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="d-lg-none">
          <hr>
          <div class="px-2">
            <router-link :to="isSigninIn?'/sell':'/signin'"><b-button class="full-width bg-green"><strong>Sell Item</strong></b-button></router-link>
          </div>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'NavBar',
    data(){
      return{
        currentNav:this.$route.name,
        isSigninIn: this.$cookies.isKey('aswanna-user-id')
      }
    },
    methods:{
      signOut: function(){
        if(this.$cookies.isKey('aswanna-user-id')){
          this.$cookies.remove('aswanna-user-id')
          window.location = '/';
          this.isSigninIn = false
          
          console.log('Signed out')
        }else{
          alert('No user signed in!')
        }
      },
    },
    watch:{
      $route (){
        this.currentNav = this.$route.name;
        window.scrollTo(0,0);
      }
	} 
}
</script>

<style scoped>
/* Global css */
    @import url('../assets/css/styles.css');
.no-link{
  color: #5c5152;
}

.active{
  font-weight: 600;
  color: #6b5f60;
}
</style>
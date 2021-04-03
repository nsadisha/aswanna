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
          <b-tab title="Settings" class="">
            <section>
              <h3>Update profile</h3>
              <hr>
              <b-form @submit="onUpdate" class="settings-form mt-3">
                <b-form-group id="input-group-1" label="Email"  label-for="input-1"
                    description="We'll never share your email with anyone else."
                    class="mb-2">
                    <b-form-input
                    id="input-1"
                    v-model="updateForm.email"
                    type="email"
                    placeholder="Email"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Phone number:" label-for="input-2" class="mb-2">
                    <b-form-input
                    id="input-2"
                    v-model="updateForm.phone"
                    placeholder="Phone number"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-3" label="City:" label-for="input-3" class="mb-2">
                    <b-form-input
                    id="input-3"
                    v-model="updateForm.city"
                    placeholder="City"
                    required
                    ></b-form-input>
                </b-form-group>
                
                <b-button type="submit" class="bg-green no-border mt-2">UPDATE</b-button>
              </b-form>
            </section>

            <section class="mt-4 mt-md-5">
              <h3>Change password</h3>
              <hr>
              <b-form @submit="onUpdate" class="settings-form mt-3">
                <b-form-group id="input-group-4" label="Current password:" label-for="input-4" class="mb-2">
                    <b-form-input
                    type="password"
                    id="input-4"
                    v-model="chagePasswordForm.currentPassword"
                    placeholder="Current password"
                    required
                    ></b-form-input>
                </b-form-group>
                
                <b-form-group id="input-group-5" label="New password:" label-for="input-5" class="mb-2">
                    <b-form-input
                    type="password"
                    id="input-5"
                    v-model="chagePasswordForm.newPassword"
                    placeholder="New password"
                    aria-describedby="input-live-help input-live-feedback"
                    :state="newPassword"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-form-invalid-feedback id="input-live-feedback">
                  Your password is very short.   
                </b-form-invalid-feedback>
                
                <b-form-group id="input-group-5" label="Confirm password:" label-for="input-5" class="mb-2">
                    <b-form-input
                    type="password"
                    id="input-5"
                    v-model="chagePasswordForm.confirmPassword"
                    placeholder="Confirm password"
                    :state="confirmPassword"
                    required
                    ></b-form-input>
                </b-form-group>
                
                <b-button type="submit" class="bg-green no-border mt-2">CHANGE</b-button>
              </b-form>
            </section>

            <section class="mt-4 mt-md-5">
              <h3 class="text-dark-red">Danger zone</h3>
              <b-card style="border-radius:7px;">

                <div class="row">
                  <div class="col-sm">
                    <strong>Remove all items</strong><br>
                    This will delete all of your posted items.
                  </div>
                  <div class="col-sm-auto mt-2 mt-sm-0">
                    <button class="danger-btn" @click="removeAllItems()">Remove all items</button>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm">
                    <strong>Remove saved items</strong><br>
                    This will delete all of your saved items.
                  </div>
                  <div class="col-sm-auto mt-2 mt-sm-0">
                    <button class="danger-btn" @click="removeSavedItems()">Remove saved items</button>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm">
                    <strong>Delete account</strong><br>
                    This will delete your account and all of your data.
                  </div>
                  <div class="col-sm-auto mt-2 mt-sm-0">
                    <button class="danger-btn" @click="deleteAccount()">Delete account</button>
                  </div>
                </div>
              </b-card>
            </section>

          </b-tab>
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
      isSigninIn: this.$cookies.isKey('aswanna-user-id'),

      updateForm: {
        email:'',
        phone: '',
        city: ''
      },
      chagePasswordForm: {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
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
    },
    onUpdate(){

    },
    removeAllItems(){},
    removeSavedItems(){},
    deleteAccount(){}
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

      // filling update profile form
      this.updateForm.email = this.email;
      this.updateForm.phone = this.phone;
      this.updateForm.city = this.city;
    }
  },
  computed: {
    newPassword() {
      return this.chagePasswordForm.newPassword==''?null:this.chagePasswordForm.newPassword.length > 7 ? true : false
    },
    confirmPassword() {
        return this.chagePasswordForm.newPassword==''?null:this.chagePasswordForm.newPassword.length>7?this.chagePasswordForm.confirmPassword == this.chagePasswordForm.newPassword:false
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

/* settings forms starts */

.settings-form{
  width: 30rem;
}

.danger-zone-group-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.danger-btn{
  border: solid 1px #cb2431;
  background: white;
  color: #cb2431;
  border-radius: 7px;
  font-size: 1rem;
  padding: 0.4rem 0.6rem;
  transition: 0.1s;
}
.danger-btn:hover{
  background: #cb2431;
  color: white;
}

/* settings form ends */

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
  .settings-form{
    width: 100%;
  }
}

</style>
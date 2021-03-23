<template>
  <section>
      <div class="container">
          <div class="row">
              <div class="col-md-8 col-lg-5 mx-auto">
                  <b-card class="px-3 my-4">
                      <h3 class="text-center">Signin</h3>
                      <h5>Hello!</h5>
                      <p class="text-green">You can user your email or you can continue with your social accounts.</p>
                      <b-form @submit="onSubmit" class="mt-3 mb-5">
                        <b-form-group id="input-group-1" label="Email address:" label-for="input-1"
                            description="We'll never share your email with anyone else."
                            class="mb-2">
                            <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            placeholder="Email"
                            required
                            ></b-form-input>
                        </b-form-group>
                        
                        <b-form-group id="input-group-4" label="Password:" label-for="input-4" class="mb-2"
                        description="Enter at least 8 charactors.">
                            <b-form-input
                            type="password"
                            id="input-4"
                            v-model="form.password"
                            placeholder="Password"
                            :state="nameState"
                            aria-describedby="input-live-help input-live-feedback"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-invalid-feedback id="input-live-feedback">
                            Your password is very short.   
                        </b-form-invalid-feedback>

                        <router-link to='' class="text-green  no-link">Forgot password?</router-link>
                        <div class="w-100 mb-4"></div>
                        <!-- <b-form-text id="input-live-help">Enter at least 8 charactors.</b-form-text> -->

                        <b-button type="submit" class="bg-green full-width no-border py-2">SIGN IN</b-button>
                    </b-form>
                    <b-button class="full-width no-border mb-2 py-2" style="background:#4267B2;">Continue with Facebook</b-button>
                    <b-button class="full-width no-border py-2" style="background:#c5221f;">Continue with Google</b-button>

                    <div class="text-center mt-4">
                        <router-link to="/register" class="text-green no-link">Create account</router-link>
                    </div>
                  </b-card>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'SigninPage',
    data(){
        return{
            form:{
                email: '',
                password: '',
            },
        }
    },
    computed: {
      nameState() {
        return this.form.password==''?null:this.form.password.length > 7 ? true : false
      },
    },
    methods: {
      onSubmit(event){
        event.preventDefault()

        if(this.form.password.length>=7){

            var email = this.form.email;
            var password = this.form.password;

            fetch('https://aswanna.herokuapp.com/auth/login', 
            {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                    email: email, 
                    password: password
                }),
            }).then(response => {
                return response.json();
            }).then(res => {
                // this.itemData = res.data
                if(res.status){
                    this.$cookies.set('aswanna-user-id', res.data._id)
                    this.form.email = ''
                    this.form.password = ''
                }else{
                    alert('Invalid username or password')
                    this.form.password = ''
                }
                console.log(res);
            }).catch(err => {
                console.log(err);
                alert("Something went wrong!\n"+err.message)
            }).finally(() => {
                console.log('done')
            });
        }else{
            console.log('shot password!')
        }
      },
    }
}
</script>

<style scoped>
    /* Global css */
    @import url('../assets/css/styles.css');

    .register-card{
        width: 50rem;
    }
</style>
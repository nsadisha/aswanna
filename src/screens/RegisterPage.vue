<template>
  <section>
      <div class="container">
          <div class="row">
              <div class="col-md-8 col-lg-5 mx-auto">
                  <b-card class="px-3 my-4">
                      <h3 class="text-center">Register</h3>
                      <b-form @submit="onSubmit" @reset="onReset" class="mt-3">
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

                        <b-form-group id="input-group-2" label="Phone number:" label-for="input-2" class="mb-2">
                            <b-form-input
                            id="input-2"
                            v-model="form.mobile"
                            placeholder="Phone number"
                            required
                            ></b-form-input>
                        </b-form-group>
                        
                        <b-form-group id="input-group-3" label="City:" label-for="input-3" class="mb-2">
                            <b-form-input
                            id="input-3"
                            v-model="form.city"
                            placeholder="City"
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
                        <!-- <b-form-text id="input-live-help">Enter at least 8 charactors.</b-form-text> -->
                        
                        <b-form-group id="input-group-5" label="Confirm password:" label-for="input-5" class="mb-2">
                            <b-form-input
                            type="password"
                            id="input-5"
                            v-model="form.cPassword"
                            placeholder="Confirm password"
                            :state="confirmPassword"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-checkbox
                            id="checkbox-1"
                            v-model="terms"
                            name="checkbox-1"
                            value="true"
                            unchecked-value="false"
                            class="mb-4"
                            >
                            I accept the terms and use
                        </b-form-checkbox>

                        <b-button v-if="terms=='false'" type="submit" class="bg-green no-border" disabled>REGISTER</b-button>
                        <b-button v-else type="submit" class="bg-green no-border">REGISTER</b-button>
                        <b-button type="reset" variant="danger" class="mx-2  no-border">RESET</b-button>
                    </b-form>
                    <div class="text-center mt-4">
                        <router-link to="/signin" class="text-green no-link">I already have an account.</router-link>
                    </div>
                  </b-card>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'RegisterPage',
    data(){
        return{
            form:{
                email: '',
                mobile: '',
                city: '',
                password: '',
                cPassword: ''
            },
            terms: 'false'
        }
    },
    computed: {
      nameState() {
        return this.form.password==''?null:this.form.password.length > 7 ? true : false
      },
      confirmPassword() {
          return this.form.password==''?null:this.form.password.length>7?this.form.cPassword == this.form.password:false
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.mobile = ''
        this.form.city = ''
        this.form.password = ''
        this.form.cPassword = ''
      }
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
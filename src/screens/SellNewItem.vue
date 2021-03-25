<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-lg-5 mx-auto">
          <b-card class="px-3 my-4">
            <h3 class="text-center">Sell Item</h3>
            <form @submit="onSubmit" @reset="onReset" id="newItemForm" entype="multipart/form-data" class="mt-3">
              <b-form-group label="Item Name:" label-for="name" class="mb-2">
                <b-form-input
                  id="name"
                  name="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Enter name"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Type of Measurement:"
                label-for="units"
                class="mb-2"
              >
                <b-form-radio-group
                  id="units"
                  name="measurement"
                  v-model="form.units"
                  :options="options"
                  button-variant="outline-primary"
                  size="md"
                  buttons
                ></b-form-radio-group>
              </b-form-group>

              <b-form-group label="No of Units:" label-for="noOfUnits" class="mb-2">
                <b-form-input
                  id="noOfUnits"
                  name="units"
                  v-model="form.noOfUnits"
                  type="text"
                  placeholder="Number of units"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Price per Unit:" label-for="price" class="mb-2">
                <b-form-input
                  id="price"
                  name="unit_price"
                  v-model="form.price"
                  type="text"
                  placeholder="Enter price"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Location to Collect:" label-for="location" class="mb-2">
                <b-form-input
                  id="location"
                  name="location"
                  v-model="form.location"
                  type="text"
                  placeholder="Enter location"
                  required
                ></b-form-input>
              </b-form-group>

                <b-form-group label="Description:" label-for="description">
                    <b-form-textarea
                        id="description"
                        name="description"
                        v-model="form.description"
                        placeholder="Enter description..."
                        rows="5"
                        class="mb-2">
                    </b-form-textarea>
                </b-form-group>

                <b-form-group label="Image:" label-for="image" class="mb-3">
                    <div class="photo" @click="clickInput" v-bind:style="{ 'background-image': 'url(' + displayImage + ')' }"><span v-if="!form.image">+</span></div>
                    <b-form-file class="d-none" id="imageInput" name="image" @change="onFileChange" accept="image/*" plain></b-form-file>
                </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger" class="mx-2"
                >Reset</b-button
              >
            </form>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SellItem",
  data() {
    return {
      options: [
        { text: "KG", value: "kg" },
        { text: "Units", value: " Units" },
        { text: "Grams", value: "g" },
      ],
      isSigninIn: this.$cookies.isKey('aswanna-user-id'),
      userId: this.$cookies.get('aswanna-user-id'),
      displayImage: null,
      form: {
        name: "",
        description: '',
        units: "kg",
        noOfUnits: 1,
        price: "",
        location: "",
        image: null,
      },
    };
  },
  methods: {
    onSubmit(event) {
        event.preventDefault()

        this.sendRequest();
    },
    onReset(event) {
        event.preventDefault()
        this.displayImage = null;
        this.form = {
        name: "",
        units: "kg",
        noOfUnits: 1,
        price: "",
        location: "",
        image: '',
      }
    },
    onFileChange(e){
      const file = e.target.files[0];
      this.displayImage = URL.createObjectURL(file);
      this.form.image = file;
    },
    clickInput(){
        document.querySelector('#imageInput').click();
    },
    async sendRequest(){
      // creating a custom FormData object
      var formData = new FormData();
      formData.append('uid', this.userId);
      formData.append('name', this.form.name);
      formData.append('description', this.form.description);
      formData.append('location', this.form.location);
      formData.append('unit_price', this.form.price);
      formData.append('units', this.form.noOfUnits);
      formData.append('measurement', this.form.units);
      formData.append('image', this.form.image,'image.jpeg');

      await fetch('https://aswanna.herokuapp.com/item/create',
      {
          method: 'POST',
          headers: {
              // "Content-type": "application/json; charset=UTF-8",
              // 'content-type': 'multipart/form-data'
          },
          body: formData
      }).then(response => {
          return response.json();
      }).then(res => {
        // console.log(res);
        if(res.status){
            alert('Item posted!');
            this.form = {
              name: "",
              description: '',
              units: "kg",
              noOfUnits: 1,
              price: "",
              location: "",
              image: '',
            };
            window.location = '/';
        }else{
            alert('Something went wrong!')
            // this.form.password = ''
        }
      }).catch(err => {
          console.log(err);
          alert("Something went wrong!\n"+err.message)
      });
    },
  },
  mounted(){
    this.isSigninIn = this.$cookies.isKey('aswanna-user-id');
    if(!this.isSigninIn){
      window.location = '/#/signin'
    }else{
      this.userId = this.$cookies.get('aswanna-user-id');
    }
  }
};
</script>

<style scoped>

.photo{
    width: 5rem;
    height: 5rem;
    background: #eee;
    background-size: cover;
    background-clip: border-box;
    background-position: center;
    border: solid 2px rgb(150, 150, 150);
    color: rgb(150, 150, 150);
    display: grid;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
}
.photo span{font-size: 2rem;}
</style>
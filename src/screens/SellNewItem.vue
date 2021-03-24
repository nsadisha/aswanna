<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-lg-5 mx-auto">
          <b-card class="px-3 my-4">
            <h3 class="text-center">Sell Item</h3>
            <b-form @submit="onSubmit" @reset="onReset" class="mt-3">
              <b-form-group label="Item Name:" label-for="name" class="mb-2">
                <b-form-input
                  id="name"
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
                  v-model="form.units"
                  :options="options"
                  button-variant="outline-primary"
                  size="md"
                  name="radio-btn-outline"
                  buttons
                ></b-form-radio-group>
              </b-form-group>

              <b-form-group label="No of Units:" label-for="noOfUnits" class="mb-2">
                <b-form-input
                  id="noOfUnits"
                  v-model="form.noOfUnits"
                  type="text"
                  placeholder="Number of units"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Price per Unit:" label-for="price" class="mb-2">
                <b-form-input
                  id="price"
                  v-model="form.price"
                  type="text"
                  placeholder="Enter price"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Location to Collect:" label-for="location" class="mb-2">
                <b-form-input
                  id="location"
                  v-model="form.location"
                  type="text"
                  placeholder="Enter location"
                  required
                ></b-form-input>
              </b-form-group>

                <b-form-group label="Description:" label-for="description">
                    <b-form-textarea
                        id="description"
                        v-model="form.description"
                        placeholder="Enter description..."
                        rows="5"
                        class="mb-2">
                    </b-form-textarea>
                </b-form-group>

                <b-form-group label="Image:" label-for="image" class="mb-3">
                    <div class="photo" @click="clickInput" v-bind:style="{ 'background-image': 'url(' + displayImage + ')' }"><span v-if="!displayImage">+</span></div>
                    <img :src="displayImage" alt="" id="uploadedImage" class="d-none">
                    <b-form-file class="d-none" id="imageInput" @change="onFileChange" plain></b-form-file>
                </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger" class="mx-2"
                >Reset</b-button
              >
            </b-form>
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
        { text: "Units", value: "Units" },
        { text: "Grams", value: "g" },
      ],
      isSigninIn: this.$cookies.isKey('aswanna-user-id'),
      userId: this.$cookies.get('aswanna-user-id'),
      displayImage:null,
      form: {
        name: "",
        description: '',
        units: "kg",
        noOfUnits: 1,
        price: "",
        location: "",
        image: '',
      },
    };
  },
  methods: {
    onSubmit(event) {
        event.preventDefault()
        this.form.image = this.getDataUrl(document.querySelector('#uploadedImage'));

        this.sendRequest();
        console.log(this.form);
    },
    onReset(event) {
        event.preventDefault()
        this.displayImage = null
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
      this.displayImage = URL.createObjectURL(file)
    },
    getDataUrl(img){
      var canvas = document.createElement('canvas');
      canvas.width = 600;
      canvas.height = 600;
      canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height, 0, 0, 600, 600);
      return canvas.toDataURL('image/png');
    },
    clickInput(){
        document.querySelector('#imageInput').click();
    },
    sendRequest(){
      var uid = this.userId;
      var name = this.form.name;
      var description = this.form.description;
      var location = this.form.location;
      var unit_price = this.form.price;
      var units = this.form.noOfUnits;
      var measurement = this.form.units;
      var image = this.form.image;

      fetch('https://aswanna.herokuapp.com/item/create',
      {
          method: 'POST',
          headers: {
              "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            uid: uid,
            name: name,
            description: description,
            location: location,
            unit_price: unit_price,
            units: units,
            measurement: measurement,
            image: image
          }),
      }).then(response => {
          return response.json();
      }).then(res => {
        console.log(res);
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
        console.log(res);
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
      console.log(this.userId)
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
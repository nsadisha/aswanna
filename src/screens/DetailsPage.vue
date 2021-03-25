<template>
  <div>
    <section>
      <div class="container-fluid p-3 p-md-5">
        <div class="row">
          <div class="col-md-5">
            <b-card style="border-radius:7px;">
				<img :src="itemData.image" alt="" class="image mx-auto" />
			</b-card>
          </div>
          <div class="col-md-7 pl-0 pl-md-5">
            <h2 class="name pt-4 pt-md-0">{{ itemData.name }}</h2>
            <span class="availablity">
				Availability: 
				<strong>
					<span v-if="itemData.isAvailable" class="text-green">In Stock</span>
					<span v-else class="text-red">Out of Stock</span>
				</strong>
			</span>
			<hr>
			<h3>Rs. {{itemData.unit_price}}</h3>
			<span class="units"><strong>Units - {{itemData.units + itemData.measurement}}</strong></span>
			<br>
			<h3 class="mt-4 des-caption">Description</h3>
			<div class="description">
				<pre>{{itemData.description}}</pre>
			</div>
          </div>
        </div>
		<div class="row mt-2 mt-md-4">
			<h2>Contact Details</h2>
			<div class="contact-details">
				<table>
					<tr>
						<td class=""><i class="fas fa-phone-alt"></i></td>
						<td class="px-2"><strong>&nbsp;Phone: </strong></td>
						<td><span>{{ phone }}</span></td>
					</tr>
					<tr>
						<td class=""><i class="fas fa-map-marker-alt"></i></td>
						<td class="px-2"><strong>&nbsp;Location: </strong></td>
						<td><span>{{ itemData.location }}</span></td>
					</tr>
				</table>
			</div>
		</div>
      </div>
    </section>

    <!-- Related items -->
    <section class="p-3 p-lg-5 mt-5">
      <h2>RELATED ITEMS</h2>
      <Chr />
      <div class="container-fluid">
        <div class="row">
          <div class="w-100"></div>
          <!-- <Item :data="items[1]" />
          <Item :data="items[0]" />
          <Item :data="items[1]" />
          <Item :data="items[1]" /> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "DetailsPage",
  data() {
    return {
      id: "",
      itemData: {},
      phone: '',
      relatedItems: []
    };
  },
  methods:{
    getData: function(){
      this.id = this.$route.params.id;

    fetch('https://aswanna.herokuapp.com/item/'+this.id, {method: 'GET'}).then(response => {
      return response.json();
    }).then(res => {
      if(res.status){
        this.itemData = res.data;
        this.phone = res.user.phone;

        // format the price
        this.formatPrice();
      }else{
        alert('Item not found!')
      }
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
      alert(err.message)
    });
    },
    formatPrice(){
      if(this.itemData.unit_price.toString().split('.').length<=1){
        this.itemData.unit_price += '.00';
      }else{
        if(this.itemData.unit_price.toString().split('.')[1].length == 1){
          this.itemData.unit_price += '0';
        }
      }
    }
  },
  mounted() {
    this.getData()
  },
  watch:{
		$route (){
			this.getData()
		}
	} 
};
</script>

<style scoped>
/* Global css */
@import url("../assets/css/styles.css");

.image {
  width: 90%;
}
.name{
	font-weight: 700;
	font-size: 2.5rem;
  text-transform: capitalize;

}
.availablity{
	color: #aaa;
	font-size: 0.9rem;
}
.availablity span{
	font-size: 0.9rem;
}

.units{
	color: rgb(104, 104, 104);
}
.description pre{
	text-align: left;
    white-space: pre-line;
	font-family: "Open Sans", sans-serif;
}

.contact-details ul{
	list-style: none;
}

/* responsive css */
@media only screen and (max-width: 1000px){
	.name{
		font-size: 1.8rem;
	}
}
</style>
<template>
  <div>
    <section>
      <div class="container-fluid p-3 p-md-5">
        <div class="row">
          <div class="col-md-5">
            <b-card style="border-radius:7px;">
				<img :src="items[id].image" alt="" class="image mx-auto" />
			</b-card>
          </div>
          <div class="col-md-7 pl-0 pl-md-5">
            <h2 class="name pt-4 pt-md-0">{{ items[id].name }}</h2>
            <span class="availablity">
				Availability: 
				<strong>
					<span v-if="items[id].available" class="text-green">In Stock</span>
					<span v-else class="text-red">Out of Stock</span>
				</strong>
			</span>
			<hr>
			<h3>Rs. {{items[id].price}}</h3>
			<span class="units"><strong>Units - {{items[id].unit}}</strong></span>
			<br>
			<h3 class="mt-4 des-caption">Description</h3>
			<div class="description">
				<pre>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque felis odio, ut aliquam velit dignissim id. Duis et vestibulum justo. Suspendisse potenti. Fusce tempus tellus vel augue interdum placerat. Maecenas et dignissim ante. Integer sit amet magna volutpat, laoreet tellus eget, feugiat sem. Cras egestas porta viverra. Sed et eros viverra, iaculis lectus non, mattis lectus. Integer eleifend faucibus massa, et ornare massa venenatis ut. Nulla eu dui purus. Duis vitae sapien lacus. Aliquam erat volutpat. Nulla et felis ornare, facilisis sem suscipit, finibus nisi. 

Sed tristique, augue sed convallis volutpat, nunc enim congue arcu, vitae convallis ante odio ac risus. Ut aliquam consequat nunc, eu fermentum purus placerat ut. Vivamus rutrum augue vitae arcu commodo lobortis. Proin vitae lorem vitae justo iaculis eleifend. Curabitur vel risus in arcu sollicitudin tincidunt quis dictum ipsum. Nulla scelerisque ullamcorper fringilla. Vivamus porttitor malesuada augue at porta. Ut pretium luctus risus non ornare. Nullam at accumsan mi. 
				</pre>
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
						<td><span>+94789654563</span></td>
					</tr>
					<tr>
						<td class=""><i class="fas fa-map-marker-alt"></i></td>
						<td class="px-2"><strong>&nbsp;Location: </strong></td>
						<td><span>Dambulla</span></td>
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
          <Item :data="items[1]" />
          <Item :data="items[0]" />
          <Item :data="items[1]" />
          <Item :data="items[1]" />
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
      items: [
        {
          id: 0,
          sale: true,
          name: "Mukunuwanna",
          price: "152.75",
          unit: "200g",
          image:
            "https://cdn.shopify.com/s/files/1/0273/2477/6490/products/mukunuwenna_420x.jpg",
          saved: false,
          available: true,
        },
        {
          id: 1,
          sale: false,
          name: "Mukunuwanna",
          price: "300.00",
          unit: "400g",
          image:
            "https://cdn.shopify.com/s/files/1/0273/2477/6490/products/mukunuwenna_420x.jpg",
          saved: false,
          available: false,
        },
      ],
    };
  },
  mounted() {
    this.id = this.$route.params.id;
  },
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
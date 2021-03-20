<template>
	<div>
		<section>
			<div class="container-fluid p-3 p-md-5">
				<div class="row">
				<div class="col-md-4">
					<img :src="items[id].image" alt="" class="full-width mx-auto" />
				</div>
				<div class="col-md-8">
					<h2>{{ items[id].name }}</h2>
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
</style>
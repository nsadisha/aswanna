<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      fade
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="i in slides"
        :caption="i.caption"
        :text="i.text"
        class="carousel-slide"
        :img-src="i.image"
        :key="i.id">
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        slides:[
          {
            id: 0,
            caption: 'The love of gardening is a seed once sawn that never dies.',
            text: '~Gertrude Jekyll~',
            image: 'https://res.cloudinary.com/dxrhrbot0/image/upload/v1616695302/abb00_Home-and-Garden-Shoppers-BANNER_RAHEXLi_c3elcb.jpg'
          },
          {
            id: 1,
            caption: '',
            text: '',
            image: 'https://res.cloudinary.com/dxrhrbot0/image/upload/v1616695303/482109255-968x387_ybdkwp.jpg'
          },
          {
            id: 2,
            caption: '',
            text: '',
            image: 'https://res.cloudinary.com/dxrhrbot0/image/upload/v1616695301/GettyImages-1134719594-768x435_hpgvu2.jpg'
          },
          {
            id: 3,
            caption: '',
            text: '',
            image: 'https://res.cloudinary.com/dxrhrbot0/image/upload/v1616695300/gardening-1521662873_opfuym.jpg'
          }
          
        ]

      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
.carousel-slide{
    height: 350px !important;
}

@media only screen and (max-width: 768px) {
.carousel-slide{
    height: 300px !important;
}
}
@media only screen and (max-width: 450px) {
.carousel-slide{
    height: 200px !important;
}
}
</style>
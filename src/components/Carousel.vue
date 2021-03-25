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
      img-width="1024"
      img-height="400"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="i in slides"
        :caption="i.caption"
        :text="i.text"
        :style="{ 'background-image' : 'url(\'' + i.image + '\')' }"
        class="carousel-slide"
        :key="i.id"
      ></b-carousel-slide>

      <!-- <b-carousel-slide
        v-for="i in slides"
        :caption="i.caption"
        :text="i.image"
        class="carousel-slide"
        :key="i.id">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            :src="i.image"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->

      <!-- Slides with custom text -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54" class="carousel-slide">
        <h1>Hello world!</h1>
      </b-carousel-slide> -->

      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" class="carousel-slide"></b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image" class="carousel-slide">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
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
            caption: 'Slide 1',
            text: '',
            image: '../assets/images/logo.png'
          },
          {
            id: 1,
            caption: 'Slide 2',
            text: '',
            image: 'https://picsum.photos/1024/480/?image=54'
          },
          {
            id: 2,
            caption: 'Slide 3',
            text: '',
            image: 'https://picsum.photos/1024/480/?image=55'
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
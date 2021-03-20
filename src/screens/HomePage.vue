<template>
  <div>
    <section>
      <div class="container-fluid p-4">
        <div class="row">
          <div class="col-md-5 mx-auto">
            <b-input-group>
              <b-form-input placeholder="Search"></b-form-input>
              <b-input-group-append>
                <b-button variant="secondary">Search</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </div>
      </div>  
      <Carousel />
    </section>

    <section class="p-3 p-lg-5"><hr>
      <div class="container-fluid">
        <div class="row">
          <Item :data="items[0]"/>
          <Item :data="items[0]"/>
          <Item :data="items[1]"/>
          <Item :data="items[1]"/>
        </div>
      </div>
    </section>

    <section class="p-3 p-lg-5">
      <h2>FEATURED PRODUCTS</h2>
      <Chr />
      <div class="container-fluid">
        <div class="row">
          <Item :data="items[1]"/>
          <Item :data="items[0]"/>
          <Item :data="items[1]"/>
          <Item :data="items[1]"/>
        </div>
      </div>
    </section>

    <section class="p-3 p-lg-5">
      <h2>ARTICLES</h2>
      <Chr />
      <div class="container-fluid">
        <div class="row">
          <Article :data="articles[0]" />
          <Article :data="articles[1]" />
          <Article :data="articles[2]" />
          <Article :data="articles[3]" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'HomePage',
    data(){
      return{
        articles: [
          {
            title: 'Article 1',
            description: 'This is the short description for post 1. Please read this article.',
            img: 'https://img.allw.mn/thumbs/pv/nf/fcw84d9r5e34704a0bac4440210170_1080x1080.jpg',
            link: '#1'
          },
          {
            title: 'Article 2',
            description: 'This is the short description for post 2. Please read this article.',
            img: 'https://img.allw.mn/thumbs/pv/nf/fcw84d9r5e34704a0bac4440210170_1080x1080.jpg',
            link: '#2'
          },
          {
            title: 'Article 3',
            description: 'This is the short description for post 2. Please read this article.',
            img: 'https://img.allw.mn/thumbs/pv/nf/fcw84d9r5e34704a0bac4440210170_1080x1080.jpg',
            link: '#3'
          },
          {
            title: 'Article 4',
            description: 'This is the short description for post 4. Please read this article.',
            img: 'https://img.allw.mn/thumbs/pv/nf/fcw84d9r5e34704a0bac4440210170_1080x1080.jpg',
            link: '#4'
          },
        ],

        items: [
          {
            id: 0,
            sale: true,
            name: 'Mukunuwanna',
            price: '152.75',
            unit: '200g',
            image: 'https://cdn.shopify.com/s/files/1/0273/2477/6490/products/mukunuwenna_420x.jpg',
            saved: false
          },
          {
            id: 1,
            sale: false,
            name: 'Mukunuwanna',
            price: '300.00',
            unit: '400g',
            image: 'https://cdn.shopify.com/s/files/1/0273/2477/6490/products/mukunuwenna_420x.jpg',
            saved: false
          }
        ]
      }
    }
}
</script>

<style scoped>
/* Global css */
@import url('../assets/css/styles.css');

.carousel{
  width: 100%;
  height: 20%;
}
</style>
<template>
  <div class="container-fluid p-3">
      <div class="row">
          <div class="col-lg-3">
              <div class="pt-3">
                  <div class="avatar">
                      <i class="fas fa-user"></i>
                  </div>
                  <h5 class="mt-3 text-center">{{email}}</h5>
                  <ul class="mt-3" style="list-style: none;">
                      <li><Strong>Phone: </Strong>{{ phone }}</li>
                      <li><Strong>City: </Strong>{{ city }}</li>
                  </ul>
              </div>
          </div>
          <div class="col-lg-8">
              <b-tabs content-class="mt-3">
                    <b-tab title="Sell items" active>
                        <div class="row">
                            <Item :data="sellItems[0]"/>
                            <Item :data="sellItems[0]"/>
                            <Item :data="sellItems[1]"/>
                            <Item :data="sellItems[1]"/>
                            <Item :data="sellItems[0]"/>
                            <Item :data="sellItems[0]"/>
                            <Item :data="sellItems[1]"/>
                            <Item :data="sellItems[1]"/>
                        </div>
                    </b-tab>
                    <b-tab title="Saved items">
                        <div class="row">
                            <Item :data="savedItems[0]"/>
                            <Item :data="savedItems[0]"/>
                            <Item :data="savedItems[1]"/>
                            <Item :data="savedItems[1]"/>
                            <Item :data="savedItems[0]"/>
                            <Item :data="savedItems[0]"/>
                            <Item :data="savedItems[1]"/>
                            <Item :data="savedItems[1]"/>
                        </div>
                    </b-tab>
                    <b-tab title="Settings"><p>Settings</p></b-tab>
                </b-tabs>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AccountPage',
    data(){
        return{
            email: 'example@aswanna.com',
            phone: '0123598645',
            city: 'kalutara',
            total: 0,
            sellItems: [
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
            ],
            savedItems: [
          {
            id: 0,
            sale: true,
            name: 'Mukunuwanna',
            price: '152.75',
            unit: '200g',
            image: 'https://cdn.shopify.com/s/files/1/0273/2477/6490/products/mukunuwenna_420x.jpg',
            saved: true
          },
          {
            id: 1,
            sale: false,
            name: 'Mukunuwanna',
            price: '300.00',
            unit: '400g',
            image: 'https://cdn.shopify.com/s/files/1/0273/2477/6490/products/mukunuwenna_420x.jpg',
            saved: true
          }
            ],

            
        }
    },
}
</script>

<style scoped>
/* Global css */
@import url('../assets/css/styles.css');
.avatar{
    background: #ddd;
    width: 5rem;
    height: 5rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    display: grid;
    align-items: center;
    justify-content: center;
}
.avatar i{
    font-size: 2rem;
}

/* cart */
.close-button{
    font-size: 2rem;
    background: none;
    border: none;
    padding: 0;
    color: #bbb;
    transition: 0.1s;
}
.close-button:hover{
    color: black;
}
</style>
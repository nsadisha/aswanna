<template>
  <div>
    <section>
      <div class="container-fluid p-3 p-md-5">
        <div class="row">
          <div class="col-md-7 pl-0 pl-md-5">
            <div class="about">
              <h1 class="display-2">About Us</h1>
              <hr>
              <h3 class = "my-font text-green">We aspire to make home gardening a common practice in our country by giving a place for it to prosper.</h3>
              <br>
              <h3 class = "my-font text-green">We wish to serve both home gardeners who are looking for a way to earn an income from their hard work and the customers who want a convenient and easy place to buy fresh organic produce.</h3>
            </div>  
          </div>
          <div class="col-md-5 pl-0 pl-md-5 text-center">
            <img src="../assets/images/mango.jpeg" alt="Mango Tree" class="rounded-circle">  
          </div>
          <div class="row form-group">
          </div>
          <div class="row form-group">
          </div>    
        </div>
        <div class="row">
          <div class="col-md-5">
            <b-card style="border-radius:7px;">
              <img src="../assets/images/vegetable.jpeg" alt="Vegetables" class="rounded">
            </b-card>
          </div>
          <div class="col-md-7">
            <div class="story">
              <h1 class="display-3">Our Story</h1>
              <hr>
              <h4 class = "my-font">Home gardening has become very popular during the last few months. People had started to grow various kinds of vegetables, fruits, and many more agricultural goods on a small scale in their own gardens. But still, there is no way for them to distribute these goods properly. And finding a buyer has been challenging. Therefore the gardeners get excessive amounts of produce piled in their homes while others who need these produce have no way of getting them.
</h4>
            </div>  
          </div>
          <div class="row form-group">
          </div>
          <div class="row form-group">
          </div>      
        </div>
        <div class="row">
          <div class="col-md-7 pl-0 pl-md-5">
            <div class="team">
              <h1 class="display-2">Our Team</h1>
              <hr>
              <h4 class = "text-center">We are a dedicated team of undergraduates looking for a way to enhance the quality of life in our community.</h4>
              <br><br>
              <figure class="my-font text-center">
                <blockquote class="blockquote">
                  <h4>"The love of gardening is a seed once sawn that never dies."</h4>
                </blockquote>
                <figcaption class="blockquote-footer">
                  <cite title="Source Title">Gertrude Jekyll</cite>
                </figcaption>
              </figure>
            </div>  
          </div>
          <div class="col-md-5">
            <b-card style="border-radius:7px;">
              <img src="../assets/images/team.jpeg" alt="Team Work" class="rounded">
            </b-card>
          </div>
          <div class="row form-group">
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
  </div>  
</template>

<script>
export default {
    name: 'AboutPage'
}
</script>

<style scoped>
/* Global css */
@import url("../assets/css/styles.css");

.my-font{
    font-family: 'Indie Flower', cursive;
    text-align: center;
} 

.form-group {
    margin-bottom: 50px;
}

h1{
  font-family: 'Alex Brush', cursive;
}
</style>
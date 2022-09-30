<!--<template>-->
<!--  <div class="hello">-->
<!--    <h1>{{ msg }}</h1>-->
<!--    <p>-->
<!--      For a guide and recipes on how to configure / customize this project,<br>-->
<!--      check out the-->
<!--      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.-->
<!--    </p>-->
<!--    <h3>Installed CLI Plugins</h3>-->
<!--    <ul>-->
<!--      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>-->
<!--      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>-->
<!--    </ul>-->
<!--    <h3>Essential Links</h3>-->
<!--    <ul>-->
<!--      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>-->
<!--      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>-->
<!--      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>-->
<!--      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>-->
<!--      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>-->
<!--    </ul>-->
<!--    <h3>Ecosystem</h3>-->
<!--    <ul>-->
<!--      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>-->
<!--      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>-->
<!--      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>-->
<!--      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>-->
<!--      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>-->
<!--    </ul>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'HelloWorld',-->
<!--  props: {-->
<!--    msg: String-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->
<!--h3 {-->
<!--  margin: 40px 0 0;-->
<!--}-->
<!--ul {-->
<!--  list-style-type: none;-->
<!--  padding: 0;-->
<!--}-->
<!--li {-->
<!--  display: inline-block;-->
<!--  margin: 0 10px;-->
<!--}-->
<!--a {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->

<!--<link rel="stylesheet" href="style.css">-->
<template>
  <button
      type="button" class="btn btn-primary"
      data-toggle="modal" data-target="#exampleModal1">
    Add
  </button>
<div>

  <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Price</th>
      <th scope="col">Time</th>
      <th scope="col">Premiere Date</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      <th scope="col">Tickets</th>
      <th s cope="col">Production</th>
      <th scope="col">Director</th>
      <th scope="col">Actor</th>
    </tr>
  </thead>
  <tbody v-for="movie in movies" :key="movie.id">
    <tr>
      <th> {{movie.id}}</th>
      <td>{{ movie.name }}</td>
      <td>{{movie.type}}</td>
      <td>{{movie.price}}</td>
      <td>{{movie.time}}</td>
      <td>{{movie.premiereDate}}</td>
      <td>{{movie.description}}</td>
      <td>{{movie.statuss}}</td>
      <td>{{movie.tickets}}</td>
      <td>{{movie.production}}</td>
      <td>{{movie.director}}</td>
      <td>{{movie.actor}}</td>
      <td>
        <button @click="findMoviesById(movie.id)"
        type="button" class="btn btn-primary"
        data-toggle="modal" data-target = "#exampleModal">
          Edit
        </button>
        <button class="btn btn-danger" @click="deleteMovie(movie.id)">Delete</button>
      </td>
    </tr>
<!--    <tr>-->
<!--      <th scope="row">2</th>-->
<!--      <td>Jacob</td>-->
<!--      <td>Thornton</td>-->
<!--      <td>@fat</td>-->
<!--    </tr>-->

  </tbody>
</table>
  </div>



  <!----------------------------------------------------------------------------------------->
<!--  -->


  <!-- Edit Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Id</label>
              <input type="text" class="form-control" id="recipient-name" v-model="valueEdit.id">
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" v-model="valueEdit.name" >
              <label for="exampleFormControlInput1">Type</label>
              <input type="text" class="form-control" v-model="valueEdit.type" >
              <label for="exampleFormControlInput1">Price</label>
              <input type="text" class="form-control" v-model="valueEdit.price" >
              <label for="exampleFormControlInput1">Time</label>
              <input type="text" class="form-control" v-model="valueEdit.time" >
              <label for="exampleFormControlInput1">Premiere Date</label>
              <input type="text" class="form-control" v-model="valueEdit.premiereDate" >
              <label for="exampleFormControlInput1">Description</label>
              <input type="text" class="form-control" v-model="valueEdit.description" >
              <label for="exampleFormControlInput1">Status</label>
              <input type="text" class="form-control" v-model="valueEdit.statuss" >
              <label for="exampleFormControlInput1">Tickets</label>
              <input type="text" class="form-control" v-model="valueEdit.tickets" >
              <label for="exampleFormControlInput1">Production</label>
              <input type="text" class="form-control" v-model="valueEdit.production" >
              <label for="exampleFormControlInput1">Director</label>
              <input type="text" class="form-control" v-model="valueEdit.director" >
              <label for="exampleFormControlInput1">Actor</label>
              <input type="text" class="form-control" v-model="valueEdit.actor" >

            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateMovie">Save changes</button>
        </div>
      </div>
    </div>
  </div>


  <!----------------------------------------------------------------------------------------->


  <!-- Add Modal -->
  <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel1">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Id</label>
              <input type="text" class="form-control" v-model="valueAdd.id">
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" v-model="valueAdd.name" >
              <label for="exampleFormControlInput1">Type</label>
              <input type="text" class="form-control" v-model="valueAdd.type" >
              <label for="exampleFormControlInput1">Price</label>
              <input type="text" class="form-control" v-model="valueAdd.price" >
              <label for="exampleFormControlInput1">Time</label>
              <input type="text" class="form-control" v-model="valueAdd.time" >
              <label for="exampleFormControlInput1">Premiere Date</label>
              <input type="text" class="form-control" v-model="valueAdd.premiereDate" >
              <label for="exampleFormControlInput1">Description</label>
              <input type="text" class="form-control" v-model="valueAdd.description" >
              <label for="exampleFormControlInput1">Status</label>
              <input type="text" class="form-control" v-model="valueAdd.statuss" >
              <label for="exampleFormControlInput1">Tickets</label>
              <input type="text" class="form-control" v-model="valueAdd.tickets" >
              <label for="exampleFormControlInput1">Production</label>
              <input type="text" class="form-control" v-model="valueAdd.production" >
              <label for="exampleFormControlInput1">Director</label>
              <input type="text" class="form-control" v-model="valueAdd.director" >
              <label for="exampleFormControlInput1">Actor</label>
              <input type="text" class="form-control" v-model="valueAdd.actor" >

            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addMovie">Add</button>
        </div>
      </div>
    </div>
  </div>




</template>

<script src="./Repository.js"></script>



<template>
  <img alt="Vue logo" src="./assets/logo.png">'
  <div v-show="isTrue">
<!--    <FormSearch @search="search"/>-->
  </div>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
  </button>

  <HomePage :movieSearch = "movies"/>


</template>

<script>
// import axios from 'axios'
// import FormSearch from './components/search/FormSearch.vue'
import HomePage from "@/components/HomePage";
// const baseUrl = 'http://localhost:8051/swagger-resources/smovie';


export default {
  name: 'App',
  components: {
    HomePage,
    // FormSearch
  },
  data() {
    return {
      movies: [],
      isTrue: true
    }
  },
  // methods: {
  //   search(value) {
  //     axios.get(baseUrl +  '/find-any',{
  //       id: value.id,
  //       name: value.name,
  //       type: value.type,
  //       price: value.price,
  //       time: value.time,
  //       premiereDate: value.premiereDate,
  //       description: value.description,
  //       status: value.status,
  //       tickets: value.tickets,
  //       production: value.production,
  //       director: value.director,
  //       actor: value.actor,
  //       page: 0,
  //       size: 10
  //     })
  //       .then(res  => {
  //         console.log(res.data);
  //
  //         return this.movies = res .data;
  //       })
//     }
//   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

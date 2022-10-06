<template xmlns:float="http://www.w3.org/1999/xhtml">

<div v-show="isSearch">
  <div class="form-container" >
    <form class="form-search" >
      <div class="form-left">
        <div><label for="exampleFormControlInput1">Name</label>
          <input type="text"  v-model="valueSearchs.name" ></div>
        <div><label for="exampleFormControlInput1">Type</label>
          <input type="text"  v-model="valueSearchs.typee"></div>
        <div> <label for="exampleFormControlInput1">Price</label>
          <input type="text"  v-model="valueSearchs.price"></div>
        <div><label for="exampleFormControlInput1">Time</label>
          <!--    <input type="text" class="form-control" v-model="valueSearchs.time">-->
          <!--    <label for="exampleFormControlInput1">Premiere Date</label>-->
          <input type="text"  v-model="valueSearchs.premiereDate"></div>
        <div> <label for="exampleFormControlInput1">Description</label>
          <input type="text"  v-model="valueSearchs.description"></div>
      </div>
      <div class="form-right">
        <div> <label for="exampleFormControlInput1">Status</label>
          <input type="text"  v-model="valueSearchs.statuss"></div>
        <div><label for="exampleFormControlInput1">Tickets</label>
          <input type="text" v-model="valueSearchs.tickets"></div>
        <div><label for="exampleFormControlInput1">Production</label>
          <input type="text" v-model="valueSearchs.production"></div>
        <div><label for="exampleFormControlInput1">Director</label>
          <input type="text" v-model="valueSearchs.director"></div>
        <div><label for="exampleFormControlInput1">Actor</label>
          <input type="text"  v-model="valueSearchs.actor"></div>
      </div>
    </form>




    <button type="button" class="btn btn-primary" style="margin: 1%" data-dismiss="modal" @click="findMoviesByAny2">Search</button>
    <button
        @click="isSearch = false"
        type="button" class="btn btn-primary"
       >
      Cancel
    </button>
  </div>
</div>




  <div >
    <button type="button" class="btn btn-primary" style="margin: 1%" data-dismiss="modal" @click="isSearch = true" v-show="isSearch===false">Search</button>
    <button
        type="button" class="btn btn-primary"
        data-toggle="modal"  data-target="#exampleModal1">
      Add
    </button>
    <table class="table" style="margin-top: 100px">
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
        <th> {{ movie.id }}</th>
        <td>{{ movie.name }}</td>
        <td>{{ movie.type }}</td>
        <td>{{ movie.price }}</td>
        <td>{{ movie.time }}</td>
        <td>{{ getDate(movie.premiereDate) }}</td>
        <td>{{ movie.description }}</td>
        <td>{{ movie.statuss }}</td>
        <td>{{ movie.tickets }}</td>
        <td>{{ movie.production }}</td>
        <td>{{ movie.director }}</td>
        <td>{{ movie.actor }}</td>
        <td>
          <button @click="findMoviesById(movie.id)"
                  type="button" class="btn btn-primary"
                  data-toggle="modal" data-target="#exampleModal">
            Edit
          </button>
          <button class="btn btn-danger" @click="deleteMovie(movie.id)">Delete</button>
        </td>
      </tr>


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
<!--              <label for="recipient-name" class="col-form-label">Id</label>-->
<!--              <input type="text" class="form-control" id="recipient-name" v-model="valueEdit.id">-->
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" v-model="valueAdd.name" @blur="validate_name"  v-bind:class="{'is-invalid': errors.name}">
              <div class="invalid-feedback" v-if="errors.name">{{ errors.name }}</div>

              <label for="exampleFormControlInput1">Type</label>
              <input type="text" class="form-control" v-model="valueAdd.type" @blur="validate_type" v-bind:class="{'is-invalid': errors.type}">
              <div class="invalid-feedback" v-if="errors.type">{{ errors.type }}</div>

              <label for="exampleFormControlInput1">Price</label>
              <input type="number" class="form-control" v-model="valueAdd.price" @blur="validate_price" v-bind:class="{'is-invalid': errors.price}">
              <div class="invalid-feedback" v-if="errors.price">{{ errors.price }}</div>

              <label for="exampleFormControlInput1">Time</label>
              <input type="text" class="form-control" v-model="valueAdd.time">

              <label for="exampleFormControlInput1">Premiere Date</label>
              <input type="text" class="form-control" v-model="valueAdd.premiereDate">

              <label for="exampleFormControlInput1">Description</label>
              <input type="text" class="form-control" v-model="valueAdd.description" @blur="validate_description" v-bind:class="{'is-invalid': errors.description}">
              <div class="invalid-feedback" v-if="errors.description">{{ errors.description }}</div>

              <label for="exampleFormControlInput1">Status</label>
              <input type="number" class="form-control" v-model="valueAdd.statuss">

              <label for="exampleFormControlInput1">Tickets</label>
              <input type="number" class="form-control" v-model="valueAdd.tickets">

              <label for="exampleFormControlInput1">Production</label>
              <input type="text" class="form-control" v-model="valueAdd.production" @blur="validate_production" v-bind:class="{'is-invalid': errors.production}">
              <div class="invalid-feedback" v-if="errors.production">{{ errors.production }}</div>

              <label for="exampleFormControlInput1">Director</label>
              <input type="text" class="form-control" v-model="valueAdd.director" @blur="validate_director" v-bind:class="{'is-invalid': errors.director}">
              <div class="invalid-feedback" v-if="errors.director">{{ errors.director }}</div>

              <label for="exampleFormControlInput1">Actor</label>
              <input type="text" class="form-control" v-model="valueAdd.actor" @blur="validate_actor" v-bind:class="{'is-invalid': errors.actor}">
              <div class="invalid-feedback" v-if="errors.actor">{{ errors.actor }}</div>


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
          <h5 class="modal-title" id="exampleModalLabel1">Thêm mới phim</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
<!--              <label for="recipient-name" class="col-form-label">Id</label>-->
<!--              <input type="text" class="form-control" v-model="valueAdd.id">-->
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" v-model="valueAdd.name" @blur="validate_name"  v-bind:class="{'is-invalid': errors.name}">
              <div class="invalid-feedback" v-if="errors.name">{{ errors.name }}</div>

              <label for="exampleFormControlInput1">Type</label>
              <input type="text" class="form-control" v-model="valueAdd.typee" @blur="validate_type" v-bind:class="{'is-invalid': errors.typee}">
              <div class="invalid-feedback" v-if="errors.typee">{{ errors.typee }}</div>

              <label for="exampleFormControlInput1">Price</label>
              <input type="number" class="form-control" v-model="valueAdd.price" @blur="validate_price" v-bind:class="{'is-invalid': errors.price}">
              <div class="invalid-feedback" v-if="errors.price">{{ errors.price }}</div>

              <label for="exampleFormControlInput1">Time</label>
              <input type="text" class="form-control" v-model="valueAdd.time">

              <label for="exampleFormControlInput1">Premiere Date</label>
              <input type="text" class="form-control" v-model="valueAdd.premiereDate">

              <label for="exampleFormControlInput1">Description</label>
              <input type="text" class="form-control" v-model="valueAdd.description" @blur="validate_description" v-bind:class="{'is-invalid': errors.description}">
              <div class="invalid-feedback" v-if="errors.description">{{ errors.description }}</div>

              <label for="exampleFormControlInput1">Status</label>
              <input type="number" class="form-control" v-model="valueAdd.statuss">

              <label for="exampleFormControlInput1">Tickets</label>
              <input type="number" class="form-control" v-model="valueAdd.tickets">

              <label for="exampleFormControlInput1">Production</label>
              <input type="text" class="form-control" v-model="valueAdd.production" @blur="validate_production" v-bind:class="{'is-invalid': errors.production}">
              <div class="invalid-feedback" v-if="errors.production">{{ errors.production }}</div>

              <label for="exampleFormControlInput1">Director</label>
              <input type="text" class="form-control" v-model="valueAdd.director" @blur="validate_director" v-bind:class="{'is-invalid': errors.director}">
              <div class="invalid-feedback" v-if="errors.director">{{ errors.director }}</div>

              <label for="exampleFormControlInput1">Actor</label>
              <input type="text" class="form-control" v-model="valueAdd.actor" @blur="validate_actor" v-bind:class="{'is-invalid': errors.actor}">
              <div class="invalid-feedback" v-if="errors.actor">{{ errors.actor }}</div>

            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="resetForm">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addMovie">Add</button>
        </div>
      </div>
    </div>
  </div>


  <!----------------------------------------------------------------------------------------->


  <!-- SearchModal -->
  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel2">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
<!--              <label for="recipient-name" class="col-form-label">Id</label>-->
<!--              <input type="text" class="form-control" v-model="valueSearchs.id">-->
<!--              <label for="exampleFormControlInput1">Name</label>-->
<!--              <input type="text" class="form-control" v-model="valueSearchs.name">-->
<!--              <label for="exampleFormControlInput1">Type</label>-->
<!--              <input type="text" class="form-control" v-model="valueSearchs.typee">-->
<!--              <label for="exampleFormControlInput1">Price</label>-->
<!--              <input type="text" class="form-control" v-model="valueSearchs.price">-->
<!--              <label for="exampleFormControlInput1">Time</label>-->
<!--              <input type="text" class="form-control" v-model="valueSearchs.time">-->
<!--              <label for="exampleFormControlInput1">Premiere Date</label>-->
<!--              <input type="text" class="form-control" v-model="valueSearchs.premiereDate">-->
<!--              <label for="exampleFormControlInput1">Description</label>-->
<!--              <input type="text" class="form-control" v-model="valueSearchs.description">-->
<!--              <label for="exampleFormControlInput1">Status</label>-->
<!--              <input type="text" class="form-control" v-model="valueSearchs.statuss">-->
<!--              <label for="exampleFormControlInput1">Tickets</label>-->
<!--              <input type="text" class="form-control" v-model="valueSearchs.tickets">-->
<!--              <label for="exampleFormControlInput1">Production</label>-->
<!--              <input type="text" class="form-control" v-model="valueSearchs.production">-->
<!--              <label for="exampleFormControlInput1">Director</label>-->
<!--              <input type="text" class="form-control" v-model="valueSearchs.director">-->
<!--              <label for="exampleFormControlInput1">Actor</label>-->
<!--              <input type="text" class="form-control" v-model="valueSearchs.actor">-->

            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="findMoviesByAny2">Search</button>
        </div>
      </div>
    </div>
  </div>

<div class="content">
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item ">
        <a class="page-link" href="#" tabindex="-1" @click="setPage(this.page.page - 1)">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" @click="setPage(1)" href="#">1</a></li>
      <li class="page-item"><a class="page-link" @click="setPage(2)" href="#">2</a></li>
      <li class="page-item"><a class="page-link" @click="setPage(3)" href="#">3</a></li>
      <li class="page-item"><a class="page-link" @click="setPage(4)" href="#">4</a></li>
      <li class="page-item"><a class="page-link" @click="setPage(5)" href="#">5</a></li>
      <li class="page-item">
        <a class="page-link" href="#" @click="setPage(this.page.page + 1)">Next</a>
      </li>
    </ul>
  </nav>
</div>

</template>


<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-container{
  width: 100%;
  background: #ccc;
  transition-timing-function: ease-in-out
}
.form-search{
  display: flex;
  align-items: center;
  justify-content: center;
  padding:10px 20px;
  width:100%;
}
.form-left, .form-right {
  width:100%;
  display: flex;
  flex-direction: column;
  gap:20px;
}
.form-search input{
  width:100%;
  padding:10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-left:10px;
}

</style>
<script src="./Repository.js"></script>



import axios from 'axios';

const baseUrl = 'http://localhost:8051/swagger-resources/smovie';

export default {
    data() {
        return {
            movies: []
            , movie: {
                id: '',
                name: '',
                type: '',
                price: '',
                time: '',
                premiereDate: '',
                description: '',
                statuss: '',
                tickets: '',
                production: '',
                director: '',
                actor: '',

            },
            valueEdit: {
                id: '',
                name: '',
                type: '',
                price: '',
                time: '',
                premiereDate: '',
                description: '',
                statuss: '',
                tickets: '',
                production: '',
                director: '',
                actor: '',
            },
            valueAdd: {
                id: '',
                name: '',
                type: '',
                price: '',
                time: '',
                premiereDate: '',
                description: '',
                statuss: '',
                tickets: '',
                production: '',
                director: '',
                actor: '',
            }
        }
    },
    created() {
        this.getAll();
    },
    methods: {
        getAll() {
            axios.get(baseUrl + '/get-all')
                .then(response => {
                    console.log(response)
                    this.movies = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }, methods: {
            search() {
                axios.get(baseUrl + '/find-any',)
                    .then(response => {
                        console.log(response)
                        this.movies = response.data;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },

        deleteMovie(id) {
            axios.delete(`${baseUrl}/delete?id=${id}`)
                .then(
                    this.getAll()
                )
                .catch(error => {
                    console.log(error);
                })
        },
        findMoviesById(id) {
            axios.get(`${baseUrl}/search-by-id?id=${id}`)
                .then(response => {
                    console.log(response.data)
                    this.valueEdit.id = response.data.id;
                    this.valueEdit.name = response.data.name;
                    this.valueEdit.type = response.data.type;
                    this.valueEdit.price = response.data.price;
                    this.valueEdit.time = response.data.time;
                    this.valueEdit.premireDate = response.data.premiereDate;
                    this.valueEdit.description = response.data.description;
                    this.valueEdit.statuss = response.data.statuss;
                    this.valueEdit.tickets = response.data.tickets;
                    this.valueEdit.production = response.data.production;
                    this.valueEdit.director = response.data.director;
                    this.valueEdit.actor = response.data.actor;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        updateMovie() {
            axios.put(`${baseUrl}/update`, this.valueEdit)
                .then(response => {
                    console.log(response)
                    this.getAll();
                })
                .catch(error => {
                    console.log(error);
                })
        },
        addMovie() {
            axios.post(`${baseUrl}/save`, this.valueAdd)
                .then(response => {
                    console.log(response)
                    this.getAll();
                })
                .catch(error => {
                    console.log(this.valueAdd)
                    console.log(error);
                })
        }
    }
}


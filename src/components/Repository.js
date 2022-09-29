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
                    this.valueEdit = response.data[0];

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


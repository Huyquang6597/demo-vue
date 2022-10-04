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
            },
            valueSearchs: {
                id: '',
                name: '',
                typee: '',
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
            page:{
                page: 1,
                size: 5,
            }
        }
    },
    created() {
        this.getAll();
    },
    methods: {
        getAll() {
            axios.get(`${baseUrl}/get-all?page=${this.page.page}&size=${this.page.size}`)
                .then(response => {
                    console.log(response)
                    this.movies = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        },

        // findMoviesByAny() {
        //     axios.post(`${baseUrl}/find-any`, this.valueSearchs)
        //         .then(response => {
        //             console.log(response)
        //             this.movies = response.data.result;
        //
        //
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         })
        // },
        findMoviesByAny2() {
            axios.post(`${baseUrl}/search`, this.valueSearchs)
                .then(response => {
                    console.log(response)
                    this.movies = response.data.result;


                })
                .catch(error => {
                    console.log(error);
                })
        },

        setPage(page) {
            if (page > 0) {
                this.page.page = page;
                this.getAll();
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
                console.log(this.valueAdd)
                this.getAll();
            })
            .catch(error => {
                // console.log(this.valueAdd)
                console.log(error);
            })
    },
}
}


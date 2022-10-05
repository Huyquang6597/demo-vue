import axios from 'axios';
import moment from "moment";

const baseUrl = 'http://localhost:8051/swagger-resources/smovie';

export default {
    data() {
        return {
            showModal:false,
            isEdit:false,
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

            errors:{
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
            actor: ''
            },

            valueEdit: {
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

            valueAdd: {
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

            page: {
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
            this.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then ((movies) => {
                if (movies.value) {
                    axios.delete(`${baseUrl}/delete?id=${id}`)
                        .then(response => {
                            console.log(response)
                            this.getAll();
                            this.$swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        })
                        // .catch(error => {
                        //     console.log(error);
                        // })
                }
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
            axios.put(`${baseUrl}/update`, {
                id: this.valueAdd.id,
                name: this.valueAdd.name,
                type: this.valueAdd.type,
                price: this.valueAdd.price,
                time: this.valueAdd.time,
                premiereDate: this.valueAdd.premiereDate,
                description: this.valueAdd.description,
                statuss: this.valueAdd.statuss,
                tickets: this.valueAdd.tickets,
                production: this.valueAdd.production,
                director: this.valueAdd.director,
                actor: this.valueAdd.actor,
            })
                .then(response => {
                    console.log(response)
                    this.showMessage('success', 'Update!', 'Chỉnh sửa thành công');
                    this.getAll();
                })
                .catch(error => {
                    console.log(error);
                })
        },

        addMovie() {
            console.log(this.valueAdd)
            this.showModal = true;
            axios.post(`${baseUrl}/save`, {
                id: this.valueAdd.id,
                name: this.valueAdd.name,
                type: this.valueAdd.typee,
                price: this.valueAdd.price,
                time: this.valueAdd.time,
                premiereDate: this.valueAdd.premiereDate,
                description: this.valueAdd.description,
                statuss: this.valueAdd.statuss,
                tickets: this.valueAdd.tickets,
                production: this.valueAdd.production,
                director: this.valueAdd.director,
                actor: this.valueAdd.actor,

            })
                .then(response => {
                    console.log(response)
                    console.log(this.valueAdd)
                    this.showMessage('success', 'Create!', 'Tạo mới thành công');
                    this.getAll();
                    this.resetForm();

                })
                .catch(error => {
                    // console.log(this.valueAdd)
                    console.log(error);
                })
        },




        // Validate Form

        validate_name() {
            this.errors.name = ''
            if (!this.valueAdd.name) {
                this.errors.name = 'Tên phim không được để trống'
                return false
            }
            return true
        },

        validate_price() {
            this.errors.price = ''
            if (!this.valueAdd.price) {
                this.errors.price = 'Giá vé xem phim không được để trống'
                return false
            }
            if (this.valueAdd.price < 0) {
                this.errors.price = 'Giá vé xem phim không được âm'
                return false
            }
            return true
        },

        validate_description() {
            this.errors.description = ''
            if (!this.valueAdd.description) {
                this.errors.description = 'Mô tả phim không được để trống'
                return false
            }
            return true
        },

        validate_type() {
            this.errors.typee = ''
            if (!this.valueAdd.typee) {
                this.errors.typee = 'Thể loại phim không được để trống'
                return false
            }
        },

        validate_production() {
            this.errors.production = ''
            if (!this.valueAdd.production) {
                this.errors.production = 'Hãng phim không được để trống'
                return false
            }
        },

        validate_director() {
            this.errors.director = ''
            if (!this.valueAdd.director) {
                this.errors.director = 'Giám đốc sản xuất không được để trống'
                return false
            }
        },

        validate_actor() {
            this.errors.actor = ''
            if (!this.valueAdd.actor) {
                this.errors.actor = 'Diễn viên không được để trống'
                return false
            }
        },

        validate() {
            if (!this.validate_name()
                || !this.validate_price()
                || !this.validate_description()
                || !this.validate_type()
                || !this.validate_production()
                || !this.validate_director()
                || !this.validate_actor()
            )
                return false
            return true
        },

        getDate: function (premiereDate) {
            return moment(premiereDate, 'YYYY-MM-DD').format('DD/MM/YYYY');
        },

        resetSearch() {
            this.key = {
                name: '',
                typee: '',
                description: '',
                production: '',
                director: '',
                actor: '',
            }
            this.findMoviesByAny2()
        },

        resetForm() {
            this.valueAdd = {
                id:'',
                name:'',
                type:'',
                price:'',
                time:'',
                premiereDate:'',
                description:'',
                statuss:'',
                tickets:'',
                production:'',
                director:'',
                actor:'',
            }
            this.errors = {
                id:'',
                name:'',
                type:'',
                price:'',
                time:'',
                premiereDate:'',
                description:'',
                statuss:'',
                tickets:'',
                production:'',
                director:'',
                actor:'',
            }
        },

        resetFormEdit() {
            this.valueEdit = {
                id:'',
                name:'',
                type:'',
                price:'',
                time:'',
                premiereDate:'',
                description:'',
                statuss:'',
                tickets:'',
                production:'',
                director:'',
                actor:'',
            }
            this.errors = {
                id:'',
                name:'',
                type:'',
                price:'',
                time:'',
                premiereDate:'',
                description:'',
                statuss:'',
                tickets:'',
                production:'',
                director:'',
                actor:'',
            }
        },

        showMessage(icon, title, text) {
            this.$swal.fire({
                showConfirmButton: false,
                timer: 2000,
                icon: icon,
                title: title,
                text: text
            });

        }
    }

}


export default {
    props: ['movie'],
    data() {
        return {
            valueSearch: {
                id: '',
                name: '',
                type: '',
                price: '',
                time: '',
                premiereDate: '',
                description: '',
                status: '',
                tickets: '',
                production: '',
                director: '',
                actor: '',

            },
            movieEdit: {
                id: '',
                name: '',
                type: '',
                price: '',
                time: '',
                premiereDate: '',
                description: '',
                status: '',
                tickets: '',
                production: '',
                director: '',
                actor: '',
            }
        }
    }, methods: {
        search() {
            this.$emit('search', this.valueSearch);
        },
        check() {
            console.log(this.valueSearch);
            console.log(this.movieEdit);
        },
    },
}
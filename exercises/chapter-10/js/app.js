{
    'use strict';

    Vue.component('movie', {
        template: '#movie-raw',
        props: ['movie'],
        methods: {         
            saveMovie() {
                axios.post('http://localhost:3000/movies', this.movie)
                    .then(response => {
                        Vue.set(this.movie, 'id', vm.movies[vm.movies.length - 2].id + 1);
                        Vue.set(this.movie, '_id', response.data._id);
                        Vue.set(this.movie, 'editing', false);
                    });
            },
            updateMovie() {
                axios.put(`http://localhost:3000/movies/${this.movie._id}`, this.movie)
                    .then(() => Vue.set(this.movie, 'editing', false));
            },
            deleteMovie() {
                const index = vm.movies.indexOf(this.movie);
                vm.movies.splice(index, 1);
                axios.delete(`http://localhost:3000/movies/${this.movie._id}`);
            },
            editMovie() {
                this.movie.editing = !this.movie.editing;
            }
        },
    });

    const vm = new Vue({
        el: '#app',
        data: {
            movies: []
        },
        methods: {
            fetchMovies() {
                axios.get('http://localhost:3000/movies')
                    .then(response => { 
                        this.movies = response.data.map((movie, index) => { 
                            movie.editing = false;
                            movie.id = index + 1;
                            return movie;
                        });
                    });
            },
            createNewMovie() {
                this.movies.push({
                    title: '',
                    director: '',
                    editing: true
                });
            },
        },
        mounted() {
            this.fetchMovies();
        }
    })
}
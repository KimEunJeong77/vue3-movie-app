<template>
  <div class="container">
    <div class="inner">
      <div 
        class="movies"
        v-for="movie in movies"
        :key="movie.imdbID">
        <MovieItem :movie="movie" />
      </div>
    </div>
  </div>
</template>
<script>
import MovieItem from './MovieItem'

export default{
    components:{ MovieItem },
    computed:{
        movies(){
            return this.$store.state.movie.movies
        }
    }
}
</script>
<style lang="scss">
.inner{ 
    display:flex; 
    flex-wrap: wrap;
    justify-content: center;
}
</style>

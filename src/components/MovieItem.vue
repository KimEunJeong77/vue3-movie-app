<template>
  <div 
    class="movie"
    :style="{backgroundImage:`url(${movie.Poster})`}">
  </div>
</template>
<script>
export default{
    props:{
        movie:{
            type:Object,
            default:()=>({})
        }
    }
}
</script>
<style lang="scss">
@import "~/scss/main";
.movie{
    $width:200px;
    width:$width;
    height:$width * 3/2;
    margin:14px;
}
</style>
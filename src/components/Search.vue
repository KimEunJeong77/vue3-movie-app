<template>
  <div class="container">
    <input 
      type="text" 
      v-model="title"
      class="form-control" 
      @keyup.enter="apply"/>
    <div class="selects">
      <select
        v-for="filter in filters"
        :key="filter.name"
        v-model="$data[filter.name]"
        class="form-select">
        <option
          v-if="filter.name==='year'"
          value="">
          All Years
        </option>         
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option> 
      </select>
    </div>
    <button 
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>
<script>
export default{
    data(){
        return{
            title:'',
            type:'movie',
            number:10,
            year:'',
            filters:[
                {name:'type',items:['movie','series','episode']},
                {name:'number',items:[10,20,30]},
                {name:'year',items:(()=>{
                        const years=[]
                        const thisYear=new Date().getFullYear()
                        for(let i=thisYear; i>=1900; i--) years.push(i)
                        return years
                })()}
            ]
        }
    },
    methods:{
        async apply(){
            this.$store.dispatch('movie/searchMovies',{
                title:this.title,
                type:this.type,
                number:this.number,
                year:this.year            
            })
        }
    }
}
</script>
<style lang="scss">
.container{
    display:flex;
    .selects{ 
        display:flex; 
        select{ width:120px; }
    }
}
</style>
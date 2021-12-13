<template>
  <div class="container">
    <div class="nav nav-pills">
      <div 
        class="nav-item"
        v-for="nav in navigations"
        :key="nav.name">
        <RouterLink 
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}      
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script>
export default{
    data(){
        return {
            navigations:[
                {name:'Home',href:'/'},
                {name:'Movie',href:'/movie'},
                {name:'About',href:'/about'}
            ]
        }
    }
}
</script>

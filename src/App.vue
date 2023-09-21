<script setup>

</script>

<template>

<header class="bg-orange-100 shadow-md relative"> 
        <div class="container mx-auto p-4">
            <div class="flex justify-between items-center">          
                <router-link to="/"> <h1 class="text-2xl font-bold text-rose-600"> DailyShop</h1></router-link> 
                
            </div>
        </div>
    </header>


 
  <router-view></router-view>

  <div class="bg-gray-900 text-white text-center py-4">
    <p> &copy; 2023</p>
        
  </div>
</template>

<style scoped>

</style>

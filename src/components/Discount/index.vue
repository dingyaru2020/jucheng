<template>
    <div>
        <!-- 十大权益组件 -->
    </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   async mounted () {
        // console.log(this.$API.default.theater)
       const res =await this.$API.default.theater.getCardGroupList("6.1.1",2)
       console.log(res,2222)
    
   },
   components: {

   }
 }
</script>

<style>

 
</style>

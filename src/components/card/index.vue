<template>
    <div>
        <div class="entry-block margin-top">
                
                <div class="entry-block__title">
                    {{once_card.store_card[0].card_type_name}}
                <span class="entry-block__title__desc">{{once_card.store_title}}</span>
                </div>
                 <div class="entry-card-list">
                     <div class="card-list__item">
                         <div class="orange-plus">
                             <div class="card-cell">
                             <div class="image card-cell__bg-img">
                                 <img :src="once_card.store_card[0].card_image" class="ju-image ju-image--fill">
                             </div>
                             <div class="card-cell__desc">
                                 <div class="card-cell__desc__top">
                                {{once_card.store_card[0].name}}
                                </div>
                                <div class="card-cell__desc__middle">有效期： 长期有效</div>
                                <div class="card-cell__desc__bottom">
                                    <div class="orange-plus__price">
                                        <span class="orange-plus__price__num">¥{{once_card.store_card[0].card_price}}</span>
                                         <span class="orange-plus__price__give">赠VIP+</span>
                                    </div>
                                </div>
                             </div>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
    </div>
</template>

<script>
export default {
    name:"Card",
    props:{
        onceCard:{
            type:Object,
            default:{}
        },
    },
    mounted(){
        console.log(111,this.onceCard)
        // console.log(111,this.onceCard.cate_card)
    }
    
}
</script>

<style>

</style>
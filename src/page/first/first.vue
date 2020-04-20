<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2020-04-17 18:52:36
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2020-04-20 16:48:35
 -->

<template>
    <div>
        <input :value='custom' @input="handlerChange($event.target.value)"/>
    </div>
</template>

<script>
export default {
    props: ['custom'],
    model: {
        prop:'custom',
        event: 'handlerChange'
    },
    data(){
        return {
        }
    },
    methods:{
        handlerChange(val) {
            this.$emit('handlerChange',val)
        }
    }
}
</script>

<style scoped>

</style>
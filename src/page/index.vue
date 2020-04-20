<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2020-04-17 18:52:12
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2020-04-20 16:59:32
 -->
<template>
    <div>
        {{firstData}}
        <first v-model='firstData'/>
        <br/> 
        <el-button>aaaaa</el-button>
        <first :custom='firstData' @handlerChange='handlerChange'/>
    </div>
</template>

<script>
import first from './first/first'
export default {
    props: [],
    data() {
        return {
            firstData:''
        }
    },
    components: {
        first
    },
    methods:{
        handlerChange(val) {
            this.firstData = val
        }
    }
}
</script>

<style scoped>

</style>
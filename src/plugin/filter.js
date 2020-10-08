import { format } from 'core-js/fn/date'
import moment from 'moment'
import Vue from 'vue'

Vue.filter("dateString",(v,format)=>{
    return moment(v).format(format || 'YYY.MM.DD')
})
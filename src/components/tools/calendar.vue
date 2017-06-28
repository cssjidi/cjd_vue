<script>
import myDatepicker from 'vue-datepicker'
export default {
data () {
return {
startTime: {
time: '1977-01-01'
},
endtime: {
time: '2020-12-31'
},
option: {
type: 'day',
week: ['一', '二', '三', '四', '五', '六', '日'],
month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
format: 'YYYY-MM-DD',
placeholder: '2016-01-01',


buttons: {
ok: '确定',
cancel: '取消'
},
overlayOpacity: 0.5, // 0.5 as default
dismissible: true // as true as default
},
timeoption: {
type: 'min',
week: ['一', '二', '三', '四', '五', '六', '日'],
month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
format: 'YYYY-MM-DD HH:mm'
},
multiOption: {
type: 'multi-day',
week: ['一', '二', '三', '四', '五', '六', '日'],
month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
format:"YYYY-MM-DD HH:mm"
},
limit: [{
type: 'day',
available: [1, 2, 3, 4, 5]
},
{
type: 'fromto',
from: '1977-01-01',
to: '2026-12-31'
}]
}
},
components: {
'date-picker': myDatepicker
}
}
</script>
<template>
<div class="card">
<div class="row">
<date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
</div>

</div>
</template>
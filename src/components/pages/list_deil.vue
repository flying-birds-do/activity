<template>
	<div class="list_deil">
		<head-top title="详情" :isHasBack="true"></head-top>
        <deilHeader v-on:currentDate="currentDate" :activityTop="activityTop"></deilHeader>
        <deilForm :upValue="upValue"></deilForm>
	</div>
</template>
<script type="text/javascript">
export default {
	 created: function () {
     this.currentPath = this.baseUrl + '/activity/deail'
     const _this = this
     this.$http.post(this.currentPath, {
       userName: 'Fred'
    })
     .then(function (response) {
       _this.activityTop = response.data.activityTop
    })
    .catch(function (response) {
   })
  },
	data () {
     return {
     	upValue:'',
     	activityTop: ''

     }
	},
	methods:{
		currentDate (data) {
           this.upValue = data
           console.log(data)
           console.log(111)
		}
	}
}
</script>

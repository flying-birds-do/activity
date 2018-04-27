<template>
	<div class="history_deail">
		<head-top title="详情" :isHasBack="true"></head-top>
        <deilHeaderNo :isEnd="isEnd" :activityTop="activityTop"></deilHeaderNo>
        <addName :isEnd="isEnd" :siginUp="siginUp"></addName>
	</div>
</template>
<script type="text/javascript">
	export default {
		// created: function () {
		// 	let dateParms = this.$router.history.current.params.id
		//       // dateParms = dateParms.split(',')
		//       // dateParms = dateParms[0] + ' ' + dateParms[1]
		//       // this.dateParms1 = dateParms
		//       // 
		// },
		data () {
          return {
            currentPath:'',
            activityTop: {},
            siginUp: [],
			  isEnd: false
          }
		},
		created: function () {
           this.currentPath = this.baseUrl + '/activity/deail'
           const _this = this
           this.$http.post(this.currentPath, {
           userName: 'Fred'
        })
        .then(function (response) {
         _this.activityTop = response.data.activityTop
         _this.siginUp = response.data.siginUp
      })
        .catch(function (response) {
      })
  }
	}
</script>
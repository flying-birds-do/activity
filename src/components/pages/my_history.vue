<template>
	<div class="history_deail">
		<head-top title="详情" :isHasBack="true"></head-top>
        <deilHeaderNo :dateParms="dateParms1" :isEnd="isEnd"></deilHeaderNo>
        <addName :isEnd="isEnd"></addName>
	</div>
</template>
<script type="text/javascript">
	export default {
		created: function () {
			let dateParms = this.$router.history.current.params.id
		      dateParms = dateParms.split(',')
		      dateParms = dateParms[0] + ' ' + dateParms[1]
		      this.dateParms1 = dateParms
		},
		data () {
			return {
			  dateParms1: '',
			  isEnd: true
			}
		}
	}
</script>
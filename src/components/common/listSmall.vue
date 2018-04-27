<template>
	<div class="list_single">
		<ul>
			<li v-for="item in items" :key="item.id" @click.stop="routerGet(item.id, item.isSigin)" >
			<div class="list_top clearfix">
			<div class="left_content">
				<h3>{{item.title}}</h3>
				<span class="date_tip">{{item.currentDate}}</span>
			</div>
				<span class="icon_back icon-details" v-if="isDeail" ></span>
			</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default {
  props: ['isStart', 'items','DeilPath', 'isDeail', 'isSigin1'],
  methods: {
  	routerGet (id, isSigin) {
  		if (this.isSigin1) {
  			if (isSigin == true) {
             this.$router.push({ name: 'listDeil', params: { id: id }})
  			} else {
  				this.$router.push({ name: 'historyDeail', params: { id: id }})
  			}
  	  } else {
  	  	console.log(111)
  	  	this.$router.push({ name: 'historyDeail', params: { id: id }})
  	  }
  	}
  }
}
</script>
<style lang="less" scoped>
	.list_single {
		padding: 0 20px;
		margin-top: 20px;
		ul {
			width: 100%;
			li {
			  background: #fff;
			  border-radius: 8px;
			  padding: 30px 0;
			  box-shadow:1px 2px 5px 0 rgba(255,121,52,0.10);
			  margin-bottom: 20px;
			  .list_top {
			  padding: 0 30px;
			  }
			  .list_bottom {
			  	padding: 20px 30px 0;
			  	font-size: 0.28rem;
			  	border-top: 1px solid #ccc;

			  	.icon-edit {
			  		font-size:0.4rem;
			  		vertical-align: middle;
			  		margin-right: 0.1rem;
			  	}
			  	.icon-more {
			  		font-size:0.36rem;
			  		vertical-align: middle;
			  		margin-right: 0.1rem;
			  	}

			  }
			  .list_bottom_edit {
			  	float:left;
			  }
			  .list_bottom_xq {
			  	float:right;
			  }
			  .left_content {
			  	float: left;
			  }
			  h3 {
			  	font-size: 0.3rem;
			  	color:#333;
			  	margin-bottom: 20px;
			  }
			  span{
			  	&.date_tip{
			  		font-size:0.28rem;
			  		color:#999;
			  		text-align: left;
			  		display: block;
			  		padding-bottom: 20px;
			  	}
			  	&.icon_back {
			  		float:right;
			  		line-height: 1.02rem;
			  		font-size: 0.48rem;
			  	}
			  }
			}
		}
	}
</style>

<template>
<div class="header_top">
<span class="icon_back"  v-if="isHasBack" @click="goBack"></span>
  <h1>{{title}}</h1>
</div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
    	currentPath: ''
    }
  },
  props: ['title', 'isHasBack'],
  methods: {
  	goBack () {
  	  let dateParms = this.$route.path
  	   dateParms = dateParms.split(',')
	  var patt1 = new RegExp("hisDeail");
      var result = patt1.test(dateParms);
	   if (result) {
  	     history.go(-2)
	   } else {
         history.go(-1)
	   }
  	}
  }
}
</script>
<style lang="less" scoped>
	.header_top {
		width: 100%;
		height: 0.88rem;
		text-align: center;
		line-height: 0.88rem;
		background: #ffaf67;
		position: fixed;
        left: 0;
        top: 0;
		.icon_back {
			background:url('../../../static/images/return.png') no-repeat;
			width:0.45rem;
			height:0.5rem;
			position: absolute;
			left:0.3rem;
			top:0.19rem;
		}
		h1 {
		font-size: 0.36rem;
		color:#fff;
		}
	}
</style>

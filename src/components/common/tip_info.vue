<template>
	  	<div class="saveBox">
		  <p>{{info}}</p>
	</div>
</template>
<script type="text/javascript">
	export default {
      props: ['info']
	}
</script>
<style lang="less">
		.saveBox {
				background:rgba(0,0,0,0.6);
                border-radius:8px;
                width:4rem;
                height:1rem;
                position:absolute;
                left:50%;
                top:50%;
                margin-left: -2rem;
                margin-top: -0.5rem;
                line-height: 1rem;
                p {
                	font-family:PingFangSC-Regular;
                    font-size:28px;
                    color:#fff;
                }
			}
</style>
<template>
	<div class="sigin_up">
		<head-top title="可报名人员" :isHasBack="true"></head-top>
		<div class="show_people">
			<p class="left_content">
				<span class="show icon-icon3"></span>
				<span class="ml14">已选：用用交付一、应用交付二、企业资源管理</span>
			</p>
			<p class="right_content" @click="sureBack">
				<span class="icon-Determine"></span>
				确定
			</p>
		</div>
		<div class="z-tree">
		
		</div>
	</div>
</template>
<script type="text/javascript">
  export default {
    methods: {
      sureBack () {
       history.go(-1)
      }
    }
  }
</script>
<style lang="less">
	.sigin_up {
		.show_people {
			height: 1.2rem;
            background: #fff;
            	.left_content {
                 width:73%;
            	position: relative;
            	padding: 20px;
            	text-align: left;
            	font-size: 0.28rem;
            	padding-left: 30px;
            	float:left;
            	line-height: 44px;
              .icon-icon3{
            	width: 0.06rem;
            	height:0.26rem;
            	position:absolute;
            	left: 0.2rem;
            	top:0.3rem;
            }
            .ml14 {
            	margin-left: 20px;
            	display: block;
            }
           }
           .right_content {
           	width:27%;
           	float: right;
           	height: 1.2rem;
           	line-height: 1.2rem;
           	.icon-Determine {
           		font-size: 0.4rem;
           		vertical-align: middle;
           		margin-right: 0.08rem;
           	}
           }

		}
		.z-tree {
			background:#fff;
			padding:0.2rem;
		}
	}
</style>
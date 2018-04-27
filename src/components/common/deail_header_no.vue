<template>
		<div class="deail_content">
		     <div class="deail_content_top">
			   <h3>{{activityTop.title}}</h3>
			   <ul class="clearfix">
			   	<li class="fl">
			   		<h5 class="fl">发起人：</h5>
			   		<p class="head_box fl"><img src="../../assets/images/head_img.png"></p>
			   		<span>{{activityTop.originator}}</span>
			   	</li>
			   	<li class="fr ">
			   		<p class="fl">已报名：{{activityTop.alerady}}</p>
			   		<p class="fl ml50">{{activityTop.date}}</p>
			   	</li>
			   </ul>
			   <p  class="texInput">{{activityTop.descript}}</p>
			   <p class="end_date" :class="{active: isEnd}">截止日期：{{activityTop.endDate}}</p>
		     </div>
		 
		  </div>
</template>
<style lang="less">
		.deail_content {
			margin-top: 1.18rem;
			.deail_content_top {
				margin-bottom: 30px;
			padding: 0 20px 30px;
					background:#fff;
					font-family:PingFangSC-Regular;
				h3 {
					font-size: 0.3rem;
					color:#000;
					text-align: left;
					padding-top: 30px;
					margin-bottom: 20px;
				}
				.texInput {
					background:#f8f8f8;
					width:100%;
					margin-top: 20px;
					margin-bottom: 20px;
					padding:20px;
					color:#999;
					font-size: 0.28rem;
					text-align:left;
					font-family:PingFangSC-Regular;
				}
				.end_date {
					color:#333;
					text-align:left;
					&.active{
                    color:#999
					}
				}
				.head_box {
					background:#d8d8d8;
                    border:1px solid #cccccc;
                    width:60px;
                    height:60px;
                   border-radius:30px;
                   margin-left: 0.1rem;
                   margin-right: 0.2rem;
                   img {
                   	width:100%;
                   	vertical-align: top;
                   }
				}
				ul {
					li {
						color:#999;
						line-height: 60px;
						h5 {
			        font-size:0.28rem;
						}
					}
					.ml50 {
						margin-left: 0.5rem;
				   }
				}
			}
		
		}
</style>
<script type="text/javascript">
export default {
	props: [ 'isEnd', 'activityTop'],
	created: function () {}
}
</script>
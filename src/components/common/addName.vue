<template>
	<div class="addName">
		<h3>报名情况</h3>
		<div class="addName_list" :class="{active:isEnd}">
			<ul v-for="item in siginUp">
			<li>
				<p>姓名：{{item.name}}</p>
				<p>联系方式：{{item.telephone}}</p>
				<p>所属部门：{{item.partment}}</p>
			</li>
			</ul>
		</div>
	
	</div>
</template>
<script type="text/javascript">
	export default {
		props:['isEnd', 'siginUp'],
		methods: {

		}
	}
</script>
 <style lang="less">
 	.addName {
 		padding:30px 20px;
 		background:#fff;
 		font-family: PingFangSC-Regular;
 		h3 {
 		font-family:PingFangSC-Regular;
		font-size:0.28rem;
		color:#999999;
		text-align:left;
		margin-bottom: 20px;
 		}
 		.addName_list {
 		 border: 1px solid #f2f2f2;
 		 &.active {
 			ul {
 				li {
 					p{
 						color:#999;
 					}
 				}
 			}
 		}
 		}

 		ul {
 			padding:20px 30px;
 		&:nth-child(odd){
        background: #f2f2f2;
        }
         &:nth-child(even){
        background: #fff;
        }
 		}
 		li  {
 		font-size:0.28rem;
        color:#333333;
        text-align:left;
        font-family: PingFangSC-Regular;
    
        p {
        	margin-bottom: 20px;
        }
 		}
 	}
 </style>

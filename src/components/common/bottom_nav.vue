<template>
	<div class="bottom_nav">
		<ul class="clearfix">
			<li class="pt20">
			<router-link :to="{ name: 'index'}">
				<span class="icon-icon1-un"></span>
				<p>活动</p>
			</router-link>
			</li>
			<li ><router-link :to="{ name: 'addActive'}"><span class="icon-add"></span></router-link></li>
			<li class="pt20">
			<router-link :to="{ name: 'myScenter'}">
				<span class="icon-icon2-un"></span>
				<p>我的</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
</script>
<style lang="less">
	.bottom_nav {
		width: 100%;
		position: fixed;
		left:0;
		bottom:0;
		background:#f6f6f6;
		z-index: 100;
		margin-top:0.3rem;
		ul {
			height: 120px;
			li {
				width:33.33%;
				float: left;
				position:relative;
				height:100%;
				&.pt20 {
					padding-top: 20px;
				}
				.router-link-exact-active {
					color: #ff7934;
					.icon-icon1-un {
						&:before {
                         color: #ff7934;
						}
					}
					
				}
				.router-link-exact-active {
					color: #ff7934;
					.icon-icon2-un {
						&:before {
						  content:"\e906";
                          color: #ff7934;
						}
					}
					
				}
				
				span {
				font-size: 0.48rem;
				}
				p {
					font-size: 0.2rem;
					margin-top: 6px;
				}
				span.icon-add {
					width:1.4rem;
					height:1.4rem;
					display: inline-block;
					background: url('../../../static/images/icon_add.png') no-repeat;
					margin-top: -0.15rem;

				}
			}
		}
	}
</style>

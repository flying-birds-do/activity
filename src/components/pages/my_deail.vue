<template>
	<div class="my_deail">
		<head-top title="详情" :isHasBack="true"></head-top>
        <deilHeader :activityTop="activityTop"></deilHeader>
        <addName :siginUp="siginUp"></addName>
            <p class="bottom_btn" >
		     	<button class="dele_btn" @click="deleteMthod">删除</button>
		     	<button class="save_btn" @click="saveMethod">保存</button>
		     </p>
		     <div class="deleteMask" v-show="showMask">
		     	<div class="deleteBox">
		     		<p>确认删除此投票吗？</p>
		     		<button class="cancel" @click="cancelMask">取消</button>
		     		<button class="makeSure" @click="sureDele">确定</button>
		     	</div>
		     </div>
		     	<div class="saveBox" v-show="showSave">
		     		<p>保存成功</p>
		     	</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
          return {
          	showMask: false,
          	showSave: false,
            activityTop:{},
            siginUp: []

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
          console.log(response)
        })
       },
		methods: {
			deleteMthod () {
              this.showMask = true
			},
			cancelMask () {
              this.showMask = false
			},
			sureDele () {
              // 确定删除
              this.$router.push({name:'myScenter'})
			},
			saveMethod () {
				console.log('保存')
				this.showSave = true
				let _this = this
				setTimeout(function() {
				_this.$router.push({name:'myScenter'})
			},1000)
			}
		}
	}
</script>
<style lang="less">
.date_ctrl {
    position:fixed;
}
		.bottom_btn {
			width:100%;
			height:0.9rem;
			margin-top: 0.94rem;
			button {
				border: none;
				float: left;
				outline: none;
				color:#fff;
				font-size: 0.28rem;
			}
            .dele_btn {
            	background:#f46b6a;
            	width:36%;
            	height:100%;
            }
            .save_btn {
            	background:#ffaf67;
            	width:64%;
            	height:100%;
            }
			}
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
		.deleteMask {
			width:100%;
			height:100%;
			background:rgba(0,0,0,0.6);
			position: fixed;
			left:0;
			top:0;
			.deleteBox {
				background:#ffffff;
                border-radius:8px;
                width:6rem;
                height:2.7rem;
                position:absolute;
                left:50%;
                top:50%;
                margin-left: -3rem;
                margin-top: -1.35rem;
                padding:0.5rem;
                p {
                	text-align: left;
                	font-family:PingFangSC-Regular;
                    font-size:28px;
                    color:#333333;
                    margin-bottom: 0.5rem;
                }
                button {
                	font-size: 0;
                	outline:none;
                }
                .cancel {
                	background:#ffffff;
                    border:1px solid #ff7934;
                    box-shadow:1px 2px 4px 0 rgba(255,121,52,0.40);
                    border-radius:100px;
                    width:148px;
                    height:78px;
                    font-size: 0.28rem;
                    float:left;
                }
                .makeSure {
                	background:#ff7934;
                    box-shadow:1px 2px 4px 0 rgba(255,121,52,0.40);
                    border-radius:100px;
                    width:320px;
                    height:80px;
                    color:#fff;
                    font-size: 0.28rem;
                    float:right;
                }

			}
		}
</style>
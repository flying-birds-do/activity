<template>
	<div class="deil_form">
		   <div class="form_info">
        	<label><span>姓名：</span><input type="text" name="" v-model="nameInput" placeholder="请输入姓名" v-bind:class="{ active: isActive }"></label>
        	<label><span>联系方式：</span><input type="text" name="" placeholder="请输入联系方式" v-model="telephoneInput" v-bind:class="{ active: isTele }"></label>
        	<label class="mb0"><span>所属部门：</span><input type="text" name="" placeholder="请输入所属部门" v-model="departInput" v-bind:class="{ active: isDepart }"></label>
        </div>
         <div class="plr20"><p class="submit_btn" v-bind:class="{ active: isSubmit }" @click="submitMethod">提交</p></div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
               'nameInput':'', 
               'telephoneInput': '', 
               'departInput': '',
               'isActive': false,
               'isTele': false,
               'isDepart': false,
               'isSubmit': false
			}
		},
		props:['upValue'],
	    watch: {
            nameInput: function (newName, oldName) {
           if (newName !=='') {
                  this.isActive = true
                  this.isSubmit = true

          } else {
            	  this.isActive = false
            }
           },
           telephoneInput: function (newName, oldName) {
           if (newName !=='') {
                  this.isTele = true
                  this.isSubmit = true
          } else {
            	  this.isTele = false
            }
           },
          departInput: function (newName, oldName) {
           if (newName !=='') {
                  this.isDepart = true
                  this.isSubmit = true
          } else {
            	  this.isDepart = false
            }
           },
	},
	methods:{
		submitMethod () {
			if (this.isSubmit) {
				this.$router.push({name:'hisDeail'})
			}
		}
	}
}
</script>
<style lang="less">
			.form_info {
			background:#fff;
			text-align:left;
			padding:30px 20px 30px;
			label {
					height:60px;
					display:block;
					margin-bottom: 20px;
					&.mb0{
						margin-bottom: 0;
					}
				span{
					width:20%;
					display: inline-block;
					text-align:right;
				}
			}
			input {
				background:#f8f8f8;
                border-radius:4px;
                 width:80%;
               height:60px;
               padding:0 0.2rem;
               &.active {
               	background:#fff;
               	border: 1px solid #ccc;
               }
			}
		}
		.plr20 {
			padding:0 20px;
		}
		.submit_btn {
			width:100%;
			margin-top: 50px;
			background:#808080;
			height:91px;
			line-height: 91px;
			font-size: 0.28rem;
			color:#fff;
			border-radius:4px;
			&.active {
				background:#ff7934;
                box-shadow:1px 2px 4px 0 rgba(255,121,52,0.50);
                border-radius:8px;
			}
		}
</style>

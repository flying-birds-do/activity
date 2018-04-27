<template>
	<div class="addActive">
	<head-top title="详情" :isHasBack="true"></head-top>
	<div class="name_info">
		<p class="title_write"><input type="text" name="" value="" placeholder="请输入活动主题" v-model="nameTitle"></p>
	<p class="active_content"><textarea placeholder="请阐述活动内容" v-model="activeContent"></textarea></p>
	</div>
	<div class="sigin_list">
	<h4>报名信息</h4>
		<ul ref="siginBox">
		   <li class="clearfix">
		   	<p class="fl"><span class="left_title">姓名</span></p>
		   	<witch></witch>
		   </li>
          <li class="clearfix">
		   	<p class="fl"><span class="left_title">联系方式</span></p>
		   	<witch></witch>
		   </li>
		   <li class="clearfix" ref="getContent" v-for="( item, index) in  addInfoText" :key="index"><p class="fl"><span class="left_title">{{item.Text}}</span></p><span class="icon_delete" @click="clickDelete(index)"></span></li>
		
	    </ul>
	    <p class="add_new_info" @click="addInfo"><span class="icon-icon-add"></span>添加报名信息</p>
	</div>
	<ul class="mt20 mb20 bgfff">
	    	<li >
	    	 <p class="fl width100"><span class="left_title">截止日期</span><input type="text" name="" placeholder="选择日期" class="fr text_r" id="dateName" @click="choiceDate"></p>
	    	</li>
	    </ul>
	    <ul class="pb30">
		   <li class="clearfix bgfff border_1px">
		   <router-link :to="{ name: 'siginUp'}">
		   	<p class="fl width100"><span class="left_title">可报名人员</span>
		   	<span class="icon-more fr"></span>
		   	</p>
		   	</router-link>
		   </li>
		    <li class="clearfix bgfff ">
		   	<p class="fl width100 font24">
		   	应用交付一、应用交付二、企业资源管理事业部
		   	</p>
		   </li>
	    </ul>
	   <div class="plr20"><p class="submit_active" @click="publicActive">发起活动</p></div>
	   	     <div class="deleteMask" v-show="showMask">
		     	<div class="deleteBox">
		     		<div class="addNameInfo">
		     			<h4>添加报名信息</h4>
		     			<input type="text" name="" v-model="InfoText" :class="{active: isNull}">
		     		</div>
		     		<button class="cancel" @click="cancelMask">取消</button>
		     		<button class="makeSure" @click="sureAdd" :class="{active: isClick}">确定</button>
		     	</div>
		     </div>
	<tipInfo :info="info" v-show="isCome"></tipInfo>
	</div>
</template>
<script type="text/javascript">
import witch from '../common/switch'
import tipInfo from '../common/tip_info.vue'
import  '../../assets/css/LCalendar.css'
import LCalendar from '../../assets/js/LCalendar.js'
export default {
  data () {
    return {
    	showMask: false,
    	addInfoText: [],
    	InfoText: '',
    	isNull: false,
    	isClick: false,
        nameTitle:'',
        activeContent:'',
        info:'请输入标题和内容',
        isCome: false

    }
  },
  components: { witch, tipInfo },
  watch: {
    InfoText: function (newval) {
       if (newval !=='') {
       	this.isNull = false
       	this.isClick = true
       } else {
       	this.isClick = false
       }
    }
  },
  methods: {
  			choiceDate () {
			var calendar1 = new LCalendar()
            calendar1.init({
            'trigger': '#dateName',//标签id
            'type': 'datetime',//date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择
            'minDate':'2018-3-1',//最小日期 注意：该值会覆盖标签内定义的日期范围
            'maxDate':'2019-12-31'//最大日期 注意：该值会覆盖标签内定义的日期范围
          })

		},
		addInfo () {
		 this.showMask = true
		},
		cancelMask () {
         this.showMask = false
		},
		clickDelete (index) {
         this.addInfoText.splice(index, 1)
		},
        publicActive () {
            if (this.activeContent !=='' & this.nameTitle !=='') {
              this.$router.push({ name: 'index'})
            } else {
               this.isCome = true
               const _this = this
               setTimeout(function () {
                 _this.isCome = false
               },2000)
            }
        },
		sureAdd () {
          if (this.InfoText !== '') {
          	 this.showMask = false
            this.addInfoText.push({'Text': this.InfoText})
            this.InfoText = ''
            this.isNull = false
            this.isClick = true
           
          } else {
          this.isNull = true
          this.isClick = false
          }
		}
  }
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
	.addActive {
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
                height:3.54rem;
                position:absolute;
                left:50%;
                top:50%;
                margin-left: -3rem;
                margin-top: -1.77rem;
                padding:0.5rem;
                p {
                	text-align: left;
                	font-family:PingFangSC-Regular;
                    font-size:28px;
                    color:#333333;
                    margin-bottom: 0.5rem;
                }
                .addNameInfo {
                	h4 {
                		font-family:PingFangSC-Regular;
                        font-size:28px;
                        color:#333333;
                        text-align:left;
                        margin-bottom: 0.3rem;
                	}
                	input {
                		background:#ffffff;
                        border:1px solid #eeeeee;
                        border-radius:8px;
                        width:4.98rem;
                        height:0.72rem;
                        margin-bottom:0.5rem;  
                        outline:none;
                        padding-left:0.2rem; 
                        &.active {
                         border:1px solid red;	
                        } 
                	}
                }
                button {
                	font-size: 0;
                	outline:none;
                }
                .cancel {
                	background:#ffffff;
                    border:1px solid #ff7934;
                    border-radius:100px;
                    width:148px;
                    height:78px;
                    font-size: 0.28rem;
                    float:left;
                }
                .makeSure {
                	background:#808080;
                    border-radius:100px;
                    width:320px;
                    height:80px;
                    color:#fff;
                    font-size: 0.28rem;
                    float:right;
                    &.active {
                	background:#ff7934;
                    box-shadow:1px 2px 4px 0 rgba(255,121,52,0.40);
                    outline:none;
                    border:none;
                    }
                }

			}
		}
		.name_info {
			padding: 0 20px;
		margin-top: 1.2rem;
		}
		.mt20 {
			margin-top: 20px;
		}
		.mb20 {
			margin-bottom: 20px;
		}
		.title_write {
			background:#ffffff;
            border-radius:8px;
            height:80px;
            font-size:28px;
            color:#999999;
            text-align:left;
            padding:0 20px;
            line-height: 80px;
            font-size: 0.28rem;
		}
		.active_content {
			background:#ffffff;
            border-radius:8px;
            width:710px;
            height:160px;
            text-align:left;
            padding:20px;
            margin-top: 20px;
		}
	.border_1px {
	border-bottom: 1px solid #ccc;
	}
	.pb30 {
		padding-bottom: 30px;
	}
	.font24 {
		font-size: 0.24rem;
	}
		.sigin_list {
			background:#fff;
			margin-top: 20px;
			.icon_delete {
				width:0.4rem;
				height:0.4rem;
				background:url('../../assets/images/icon_delete.png') no-repeat;
				background-size: 100%;
				position:absolute;
				right:0.2rem;
				top:0.3rem;
			}
			.add_new_info {
				height:136px;
				width:100%;
				line-height: 136px;
				font-size:28px;
                color:#ff7934;
                padding:0 20px;
                text-align:left;
                .icon-icon-add {
                	font-size:0.4rem;
                	margin-right: 0.2rem;
                	vertical-align:middle;
                }
			}
			h4 {
				font-family:PingFangSC-Regular;
                font-size:0.28rem;
                color:#999999;
                text-align:left;
                border-bottom: 1px solid #ccc;
                height:1rem;
                line-height: 1rem;
                padding:0 20px;
			}
			li {
				height:1rem;
				line-height: 1rem;
				border-bottom: 1px solid #ccc;
				padding: 0 20px;
				position:relative;
			p {
		     color:#333333;
             text-align:left;
             font-size:0.28rem;
             width:80%;
             .left_title {
             	width:30%;
             	display:inline-block;
             }
           input {
           	height:0.9rem;
           	width:350px;
           	padding-left: 20px;
				}
           }
			}
		}
		.bgfff {
			background:#fff;
		}
		     .width100 {
             	width:100%;
             }
             .text_r {
             	text-align:right;
             	color:#000;
             }
             	li {
				height:1rem;
				line-height: 1rem;
				padding: 0 20px;
				p{
		     color:#333333;
             text-align:left;
             font-size:0.28rem;
             width:80%;
             .left_title {
             	width:30%;
             	display:inline-block;
             }
           input {
           	height:0.9rem;
           	width:350px;
           	padding-left: 20px;
				}
           }
			}
		.icon-more {
				vertical-align:middle;
				line-height: 1rem;
			}
		 .plr20 {
			padding:0 20px;
		}
		.submit_active {
			width:100%;
			margin-top: 50px;
			height:91px;
			line-height: 91px;
			font-size: 0.28rem;
			color:#fff;
			background:#ff7934;
            box-shadow:1px 2px 4px 0 rgba(255,121,52,0.50);
           border-radius:8px;
           margin-bottom: 22px;
		}
	}
</style>

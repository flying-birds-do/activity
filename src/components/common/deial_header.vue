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
			   <textarea ref="textdes" class="textInput">{{activityTop.descript}}</textarea>
			   <p class="end_date_choice"   @click="choiceDate"><span class="date_title">截止日期</span> <input class="date_choice fr" id="dateChoice" v-model="activityTop.date" data-lcalendar="2010-01-11,2019-12-31" placeholder="请选择日期"></p>
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
				h3 {
					font-size: 0.3rem;
					color:#000;
					text-align: left;
					padding-top: 30px;
					margin-bottom: 20px;
				}
				.textInput {
					height:180px;
					background:#f8f8f8;
					width:100%;
					margin-top: 20px;
					margin-bottom: 20px;
					padding:20px;
					color:#999;
					font-size: 0.28rem;
					font-family:PingFangSC-Regular;
				}
				.end_date_choice {
					text-align:left;
					.date_title {
                    font-size:28px;
                    color:#ffaf67;
                    text-align:left;
                    }
                    .date_choice {
                    	color:#ffaf67;
                    	text-align:right;
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
import  '../../assets/css/LCalendar.css'
import LCalendar from '../../assets/js/LCalendar.js'

export default {
	props: ['activityTop'],
	methods: {
		choiceDate () {
			var calendar = new LCalendar()
            calendar.init({
            'trigger': '#dateChoice',//标签id
            'type': 'datetime',//date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择
            'minDate':'2018-3-1',//最小日期 注意：该值会覆盖标签内定义的日期范围
            'maxDate':'2019-12-31'//最大日期 注意：该值会覆盖标签内定义的日期范围
          })
            // var currentDate = document.getElementById('dateChoice').value

		}
	},
	watch: {
    currentDate: function (newValue, oldValue) {
     newValue = newValue.split(" ")
      if (newValue) {
          this.$emit('currentDate', newValue.toString())
      }
    }
	}
}
</script>

<template>
	<div class="tab_cut">
		<ul class="clearfix">
			<li v-bind:class="{active:isActive}" @click="cutTab('sigin')">{{nameLeft}}</li>
			<li @click="cutTab('history')" v-bind:class="{active:!isActive}">{{nameRight}}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      isActive: true
    }
  },
  props: ['nameLeft', 'nameRight'],
  methods: {
  	cutTab (sigin) {
  		if (sigin === 'sigin') {
  		  this.isActive = true
  		} else {
  		  this.isActive = false
  		}
      this.$emit('currentShow', sigin)
  	}
  }
}
</script>
<style lang="less" scoped>
	.tab_cut {
		width: 66.6%;
		margin: 1.18rem auto 0;
		ul {
			li {
				float: left;
				width:50%;
				height: 0.64rem;
				line-height: 0.64rem;
		        border: 1px solid #ffaf67;
				&:first-child {
				  border-top-left-radius: 8px;
				  border-bottom-left-radius: 8px;
				}
				&:nth-child(2) {
	              border-top-right-radius: 8px;
				  border-bottom-right-radius: 8px;
				}
				&.active {
					background: #ffaf67;
				    color: #fff;
				    border:none;
				}
			}
		}
	}
</style>

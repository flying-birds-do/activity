<template>
	<div class="myScenter">
	<head-top title="活动" :isHasBack="false"></head-top>
	<tabCut :nameLeft="nameLeft" :nameRight="nameRight" v-on:currentShow="currentShow"></tabCut>
	<div class="sigin_history">
     <listSingle  v-if="isSigin" :isStart="isStartMy" :items="itemsCurrent" :DeilPath="myDeail" :isDeail="false"></listSingle>
     <listSmall  v-if="!isSigin" :isStart="isStart" :items="itemsHistory" :isDeail="true" :DeilPath="myHistory"></listSmall>
</div>
	<bottom-nav></bottom-nav>
	</div>
</template>
<script type="text/javascript">
import tabCut from '../common/tab_cut'
import listSingle from '../common/list_single'
import listSmall from '../common/listSmall'
export default {
  data () {
    return {
	  nameRight: '已报名的',
      nameLeft: '我发布的',
      isSigin: true,
      isStartMy: true,
      isStart: false,
      myDeail:'myDeail',
      myHistory:'myHistory',
      itemsCurrent: [],
      itemsHistory: []
    }
  },
  created: function () {
     this.currentPath = this.baseUrl + '/activty/sigining/list'
     const _this = this
     this.$http.post(this.currentPath, {
       userName: 'Fred'
    })
     .then(function (response) {
       _this.itemsCurrent = response.data.myName
       _this.itemsHistory = response.data.myPublic

    })
    .catch(function (response) {
   })
  },
  components: { tabCut, listSingle , listSmall},
  methods: {
  	    currentShow (sigin) {
      if (sigin === 'sigin') {
        this.isSigin = true
      } else if (sigin === 'history') {
        this.isSigin = false
      }
  	}
  }
}
</script>

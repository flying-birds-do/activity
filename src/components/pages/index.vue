<template>
<div>
<head-top title="活动" :isHasBack="false"></head-top>
	<tab-cut v-on:currentShow="currentShow" :nameLeft="nameLeft" :nameRight="nameRight"></tab-cut>
<div class="sigin_history">
<listSmall  v-if="isSigin" :isStart="isStart" :items="itemsCurrent" :DeilPath="listDeil" :isDeail="true" :isSigin1="true"></listSmall>
<listSmall  v-if="!isSigin" :isStart="isStart" :items="itemsHistory" :DeilPath="historyDeail"  :isDeail="true" :isSigin1="false"></listSmall>
</div>
<bottom-nav></bottom-nav>
</div>
</template>
<script type="text/javascript">
import tabCut from '../common/tab_cut'
import listSmall from '../common/listSmall'
export default {
  data () {
    return {
    	isSigin: false,
    	isStart: false,
      isHasBack: false,
      nameRight: '历史活动',
      nameLeft: '报名中',
      listDeil:'listDeil',
      historyDeail:'historyDeail',
      currentPath: '',
    	itemsCurrent: [],
    	itemsHistory: []
    }
  },
  components: {tabCut, listSmall},
  props: [],
  created: function () {
     this.currentPath = this.baseUrl + '/activty/sigining/list'
     const _this = this
     this.$http.post(this.currentPath, {
       userName: 'Fred'
    })
     .then(function (response) {
       _this.itemsCurrent = response.data.data
       _this.itemsHistory = response.data.itemsHistory

    })
    .catch(function (response) {
      console.log(response)
   })
  },
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
<style type="text/css">
  .sigin_history {
    margin-bottom: 2rem;
  }
</style>

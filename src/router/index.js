import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Index from '@/components/pages/index'
import addActive from '@/components/pages/add_active'
import myScenter from '@/components/pages/my_scenter'
import listDeil from '@/components/pages/list_deil'
import myDeail from '@/components/pages/my_deail'
import historyDeail from '@/components/pages/history_deail'
import hisDeail from '@/components/pages/history_deail'
import myHistory from '@/components/pages/my_history'
import siginUp from '@/components/pages/sigin_up'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [

        
        {
          path: '/listDeil/:id',
          name: 'listDeil',
          component: listDeil
        },
        {
          path: '/addActive',
          name: 'addActive',
          component: addActive
        },
        {
          path: '/myScenter',
          name: 'myScenter',
          component: myScenter
        },
        {
          path: '/myDeail',
          name: 'myDeail',
          component: myDeail
          
        },
        {
          path: '/historyDeail/:id',
          name: 'historyDeail',
          component: historyDeail
          
        },
         {
          path: '/hisDeail/:id',
          name: 'hisDeail',
          component: hisDeail
          
        },
         {
          path: '/myHistory/:id',
          name: 'myHistory',
          component: myHistory
        },
        {
          path: '/siginUp',
          name: 'siginUp',
          component: siginUp
        }
      ]
    },
    {
          path: '/',
          name: 'index',
          component: Index
    }
  
  ]
})

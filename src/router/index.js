import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Class from '@/pages/class/Class'
import Study from '@/pages/study/Study'
import User from '@/pages/user/User'
import CourseDetail from '@/pages/coursedetail/CourseDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    },
    {
      path: '/study',
      name: 'Study',
      component: Study
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/coursedetail',
      name: 'CourseDetail',
      component: CourseDetail
    }
  ]
})

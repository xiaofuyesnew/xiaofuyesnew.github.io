import SvgIcon from './Icons/SvgIcon.vue'
import Iconify from './Icons/Iconify.vue'
import AutoIcon from './Icons/AutoIcon.vue'

const components = [
  {
    name: 'SvgIcon',
    component: SvgIcon
  },
  {
    name: 'Iconify',
    component: Iconify
  },
  {
    name: 'AutoIcon',
    component: AutoIcon
  }
]

export const setupGlobalComponents = (app) => {
  components.forEach(item => {
    const { name, component } = item
    app.component(name, component)
  })
}

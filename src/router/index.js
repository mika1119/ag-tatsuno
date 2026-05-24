import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import GeneralMaintenance from '@/views/GeneralMaintenance.vue'
import Insurance from '@/views/Insurance.vue'
import NewCarSales from '@/views/NewCarSales.vue'
import SheetMetalPaint from '@/views/SheetMetalPaint.vue'
import StoreGuide from '@/views/StoreGuide.vue'
import UsedCarSales from '@/views/UsedCarSales.vue'
import VehicleInspection from '@/views/VehicleInspection.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/general-maintenance', name: 'GeneralMaintenance', component: GeneralMaintenance },
  { path: '/insurance', name: 'Insurance', component: Insurance },
  { path: '/new-car-sales', name: 'NewCarSales', component: NewCarSales },
  { path: '/sheet-metal-paint', name: 'SheetMetalPaint', component: SheetMetalPaint },
  { path: '/store-guide', name: 'StoreGuide', component: StoreGuide },
  { path: '/used-car-sales', name: 'UsedCarSales', component: UsedCarSales },
  { path: '/vehicle-inspection', name: 'VehicleInspection', component: VehicleInspection },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
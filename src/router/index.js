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
  {
    path: '/', name: 'Home', component: Home,
    meta: {
      title: '福岡県飯塚市の車検・整備・板金塗装',
      description: '福岡県飯塚市のオートガレージTATSUNOは、車検整備・一般整備・板金塗装・電装整備・ボディーコーティング・レッカー業務・新車中古車販売まで対応しています。お車のことならお気軽にご相談ください。',
    }
  },
  {
    path: '/general-maintenance', name: 'GeneralMaintenance', component: GeneralMaintenance,
    meta: {
      title: '一般整備',
      description: 'オートガレージTATSUNOの一般整備ページです。オイル交換やタイヤ交換などのクイック整備から、エンジンのオーバーホールなどの重整備まで何でもおまかせください。',
    }
  },
  {
    path: '/insurance', name: 'Insurance', component: Insurance,
    meta: {
      title: '保険',
      description: 'オートガレージTATSUNOの保険ページです。東京海上日動火災保険の代理店として、自動車保険をはじめ各種保険のご相談に対応しております。お客様に最適なプランをご提案いたします。',
    }
  },
  {
    path: '/new-car-sales', name: 'NewCarSales', component: NewCarSales,
    meta: {
      title: '新車販売',
      description: 'オートガレージTATSUNOの新車販売ページです。スズキ株式会社の代理店として、軽自動車や普通車をはじめ、商用車や福祉車両まで幅広く取り扱っております。お客様のライフスタイルや用途に合わせた最適なお車をご提案いたします。',
    }
  },
  {
    path: '/sheet-metal-paint', name: 'SheetMetalPaint', component: SheetMetalPaint,
    meta: {
      title: '板金塗装',
      description: 'オートガレージTATSUNOの板金塗装ページです。小さなキズやヘコミから大きな破損まで、幅広い処理に対応しております。福岡県飯塚市で板金塗装のことならお気軽にご相談ください。',
    }
  },
  {
    path: '/store-guide', name: 'StoreGuide', component: StoreGuide,
    meta: {
      title: '店舗案内',
      description: 'オートガレージTATSUNOの店舗案内ページです。福岡県飯塚市で車検整備・一般整備・板金塗装・新車中古車販売などを行っています。お車のことならお気軽にご相談ください。',
    }
  },
  {
    path: '/used-car-sales', name: 'UsedCarSales', component: UsedCarSales,
    meta: {
      title: '中古車販売',
      description: 'オートガレージTATSUNOの中古車販売ページです。業者専門オークションや独自のルートなど月間75万台以上の流通ネットワークから「お客様のご予算とご希望にあった、お客様だけのための1台」をお探しします。',
    }
  },
  {
    path: '/vehicle-inspection', name: 'VehicleInspection', component: VehicleInspection,
    meta: {
      title: '車検整備',
      description: 'オートガレージTATSUNOの車検整備ページです。福岡県飯塚市で国産車、輸入車問わず、乗用車からトラック、バイクにも対応しております。車検のお見積りやご相談はお気軽にお問い合わせください。',
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          top: 0,
          behavior: 'auto'
        })
      }, 400)
    })
  }
})

export default router
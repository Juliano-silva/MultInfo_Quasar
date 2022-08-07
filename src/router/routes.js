
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/components/Conteúdo/MyConteúdo.vue') },
      { path:'MyApi',component:() => import('src/components/Adicionar/MyApi.vue') },
      { path:'Portfolio',component:() => import('src/components/Portfolio/MyPortfolio.vue') },
      {path:'Conteudo',component:()=> import ('src/components/Adicionar/ContéudoItem.vue')},
      { path:'Sobre',component:() => import('src/components/Sobrenós/MySobrenós.vue') },
      { path:'Relogio',component:() => import('src/components/Relógio/MyRelógio.vue') }
    ]
  },
]

export default routes

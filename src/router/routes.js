const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/HomePage.vue') },
      { path: 'about', component: () => import('src/pages/AboutPage.vue') },
      { path: 'contact', component: () => import('src/pages/ContactPage.vue') },
      { path: 'home', component: () => import('src/pages/HomePage.vue') },
      { path: 'technology', component: () => import('src/pages/TechPage.vue') },
      { path: 'sports', component: () => import('src/pages/SportPage.vue') },
      { path: 'movies', component: () => import('src/pages/MoviePage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

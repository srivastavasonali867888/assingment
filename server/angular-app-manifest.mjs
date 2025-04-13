
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/assingment/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/assingment"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 502, hash: '1f5689e2e76b6b8b3f906e9dcb8a20d5b6742e0a1f3db865cb66cf26c9b524d8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: 'a6e975f22864abe0efbcb81ab38cc9cd4cc9455614b91e5dd3a3b6f194c0ea56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3396, hash: 'b8658ac167bddb9f0113c0f3d4e4b0ca98820c36683ebe409d3dcb1865c774fd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

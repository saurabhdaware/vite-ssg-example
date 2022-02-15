const fs = require('fs');
const path = require('path');
const { createServer } = require('vite');

const INDEX_HTML_PATH = path.resolve(__dirname, 'dist/static/index.html');
const ENTRY_SERVER_PATH = `${true ? './dist/server' : '/src'}/entry-server.js`;


(async () => {
  const vite = await createServer({
    server: { middlewareMode: 'ssr' }
  })
  const url = '/';
  // 1. Read
  let template = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

  // 2. Render
  template = await vite.transformIndexHtml(url, template)
  const { render } = require(ENTRY_SERVER_PATH);
  const appHtml = await render(url)
  
  // 5. Inject the app-rendered HTML into the template.
  const html = template.replace(`<!--server-outlet-->`, appHtml)
  // 3. Write
  fs.writeFileSync(INDEX_HTML_PATH, html);
  console.log('Generated index.html');
  console.log('`npx serve dist/static` to run static server');
  vite.close();
})();
# Hello World Vite SSG

Vanilla SSG setup using Vite

## Install Dependencies

```sh
yarn
```

## Run Dev Server

```sh
node server.js # or yarn dev
```

## SSR Output

```sh
yarn build # builds server and client code
NODE_ENV=production node server.js # or yarn serve
```

## SSG Output

```sh
yarn generate
npx serve dist/static # to run static server
```

Built while following [Vite SSR docs](https://vitejs.dev/guide/ssr.html)
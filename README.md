# 👷‍♀️🦀🕸️ Rust Markdown Cloudflare Worker

This is based on the tutorial here: https://workers.cloudflare.com/docs/tutorials/build-a-rustwasm-function/

Currently running on markdown.rita.workers.dev

### 🐑 Use `wrangler generate` to Clone this Template

[Learn more about `wrangler generate` here.](https://github.com/cloudflare/wrangler)

```
wrangler generate wasm-worker  https://github.com/cloudflare/rustwasm-worker-template.git
cd wasm-worker
```

### 🛠️ Build with `wasm-pack build`

```
wasm-pack build
```

### Upload to Workers with `wrangler publish`

```
wrangler publish
```

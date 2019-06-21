addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  if(request.method == 'GET') {
    return new Response(`<html>
    <body>
    
    <form action="/" method="post" enctype="multipart/form-data">
        Select markdown to upload:<br>
        <textarea name="markdown" rows = "5" cols = "50">Hello world, this is a ~~complicated~~ *very simple* example.</textarea>
        <br><input type="submit" value="Upload Markdown" name="submit">
    </form>
    
    </body>
    </html>`, {status: 200, headers: new Headers({"Content-type": "text/html"})})
  }
  else {
    let parseString = await request.formData();
    let markdown = parseString.get('markdown')
    const { parse } = wasm_bindgen;
    await wasm_bindgen(wasm)
    const html = parse(markdown)
    return new Response(html, {status: 200, headers: new Headers({"Content-type": "text/html"})})
  }
}

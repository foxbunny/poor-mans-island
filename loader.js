{
let load = $ => import($.dataset.module || `/components/${$.tagName.toLowerCase()}.js`)
let io = new IntersectionObserver(es => {
  for (let e of es) if (e.isIntersecting) {
    io.unobserve(e.target)
    load(e.target)
  }
})
for (let $ of document.querySelectorAll('*'))
  if ($.tagName.includes('-')) io.observe($)
}

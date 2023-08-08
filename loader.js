let io = new IntersectionObserver(es => {
  for (let e of es) if (e.isIntersecting) {
    io.unobserve(e.target)
    import(e.target.dataset.module || `/components/${e.target.tagName.toLowerCase()}.js`)
  }
})
for (let $ of document.querySelectorAll('*')) if ($.tagName.includes('-')) io.observe($)

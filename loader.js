{
let
  $d = document,
  load = $ => $d.head.append(Object.assign(
    $d.createElement('script'),
    {async: 1, src: $.dataset.src || `components/${$.tagName.toLowerCase()}.js`}
  )),
  io = new IntersectionObserver(es => {
    for (let e of es)
      if (e.isIntersecting) {
        io.unobserve(e.target)
        load(e.target)
      }
  })
for (let $ of $d.querySelectorAll('*')) if ($.tagName.includes('-')) io.observe($)
}

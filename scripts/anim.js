// give credits for the idea smh
function animateTitle() {
  const K = document.title,
    n = [
      'f|',
      'fe|',
      'fem|',
      'femb|',
      'fembo|',
      'femboy',
      'femboyg|',
      'femboyga',
      'femboygan|',
      'femboygang',
      'femboygang',
      'femboygan',
      'femboyga',
      'femboyg',
      'femboy',
      'fembo',
      'femb',
      'fem',
      'fe',
      'f',
    ]
  let U = 0
  function f() {
    document.title = n[U] + '.lol'
    U = (U + 1) % n.length
  }
  const C = setInterval(f, 600)
}
animateTitle()

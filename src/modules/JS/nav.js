export function debounce(func, wait = 15, immediate = true) {
  var timeout
  return function () {
    var context = this,
      args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

// TODO: make changeColors accept class names
export function changeColors(element) {
  if (window.scrollY > 50) {
    element.classList.add('active')
    element.classList.add('has-shadow')
  } else {
    element.classList.remove('active')
    element.classList.remove('has-shadow')
  }
  console.log('window.scrollY: ', window.scrollY)
}

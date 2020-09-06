const replaceElement = (target, html) => {
  // Based on https://stackoverflow.com/a/13388745/8182578
  let i, elm, last
  // create a temporary div
  const tmp = document.createElement('div')
  // fill that div with our html, this generates our children
  tmp.innerHTML = html
  // step through the temporary div's children and insertBefore our target
  i = tmp.childNodes.length
  last = target
  while (i--) {
    target.parentNode.insertBefore((elm = tmp.childNodes[i]), last)
    last = elm
  }
  // remove the target.
  target.parentNode.removeChild(target)
}

export default replaceElement

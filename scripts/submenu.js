window.addEventListener("load", () => {
    let lateral = document.getElementsByClassName('lateral')[0]
    let open_submenu = document.createElement('div')
    open_submenu.textContent = '>'
    open_submenu.className = 'lateral-open'
    lateral.insertAdjacentElement('beforebegin', open_submenu)

})
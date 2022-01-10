window.addEventListener("load", () => {
    let lateral = document.getElementsByClassName('lateral')[0]
    let open_submenu = document.createElement('div')
    open_submenu.textContent = '<'
    open_submenu.className = 'lateral-open'
    lateral.insertAdjacentElement('beforebegin', open_submenu)
    open_submenu.onclick = () => {
        lateral.classList.toggle('lateralx')
        open_submenu.classList.toggle('lateral-close')
        if (open_submenu.className == 'lateral-open lateral-close') {
            open_submenu.textContent = '>'
        } else {
            open_submenu.textContent = '<'
        }
    }

})
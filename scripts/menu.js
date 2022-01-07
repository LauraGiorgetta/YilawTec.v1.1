/*************************************
 **************************************/
//Ejecutamos el codigo al inicio una vez carga el codigo html

window.addEventListener("load", () => {
    createMenu()
    menu() //Lo creamos aparte para que solo se ejecute 1 vez
})

//Funcion que crea el Menu responsive
function createMenu() {
    //Crea el menu

    box_menu = document.createElement('div') /*Caja contenedora de las 3 barras */
    menu_bar_top = document.createElement('div')
    menu_bar_middle = document.createElement('div')
    menu_bar_bottom = document.createElement('div')


    /* Insertamos las barras en el menu */
    box_menu.appendChild(menu_bar_top)
    box_menu.appendChild(menu_bar_middle)
    box_menu.appendChild(menu_bar_bottom)

    /* Le ponemos class para editarlo en css */
    box_menu.className = 'box-menu'
    menu_bar_top.className = 'menu-bar-top'
    menu_bar_middle.className = 'menu-bar-middle'
    menu_bar_bottom.className = 'menu-bar-bottom'

    /* Insertamos el menu en el header */
    let header = document.querySelector('header')
    header.appendChild(box_menu)
}


function menu() {

    /* Aparecer menu */
    let box_menu = document.querySelector('.box-menu')

    //Cuando hacemos click sobre la caja de las tres barras...
    box_menu.addEventListener('click', showMenu)



    function showMenu() {
        let menu_bar_top = document.getElementsByClassName('menu-bar-top')[0]
        let menu_bar_middle = document.getElementsByClassName('menu-bar-middle')[0]
        let menu_bar_bottom = document.getElementsByClassName('menu-bar-bottom')[0]

        //Seleccionamos el padre del div anterior
        let menu_list = document.querySelector('header nav')

        //Mostramos el menu completo
        menu_list.classList.toggle('menu-show')

        //Le asignamos las clases x a las barra para que se transformen en x
        menu_bar_top.classList.toggle('menu-bar-topx')
        menu_bar_middle.classList.toggle('menu-bar-middlex')
        menu_bar_bottom.classList.toggle('menu-bar-bottomx')
    }
}
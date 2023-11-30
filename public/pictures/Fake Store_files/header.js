//side menu open
    function openSideMenu() {
        document.querySelector('.side-menu').style.width = '250px';
    }

//side menu close
    function closeSideMenu() {
        document.querySelector('.side-menu').style.width = '0';
    }

//toggle side menu
    document.getElementById('menu-toggle').addEventListener('click', openSideMenu);
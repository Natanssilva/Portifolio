
function openMenu(){
    const mobileMenu = document.querySelector('.menu-mobile');
    if(mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        document.querySelector('.icon').src = 'assets/images/image-menu-mobile.svg';
    }else{
        mobileMenu.classList.add('open');
        document.querySelector('.icon').src = 'assets/images/menu-mobile-exit.svg';
    }
}
const navMenu =  document.querySelector('.menu')
const navMobile = document.querySelector('.collapse-menu')
navMenu.addEventListener('click',()=>{
navMenu.classList.toggle('openNav');
if (navMenu.classList.contains('openNav')) {
    navMobile.classList.add('show-collapse-menu')
}else{
    navMobile.classList.remove('show-collapse-menu')

}
})
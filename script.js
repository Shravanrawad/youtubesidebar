const showsidebar = (toggleid, sidebarid) => {
    const toggle = document.getElementById(toggleid),
          sidebar = document.getElementById(sidebarid)  

    
    if(toggle && sidebar){
       toggle.addEventListener('click', () => {
          sidebar.classList.toggle('show-sidebar')
       }) 
    }      
}
showsidebar('header-toggle', 'sidebar')

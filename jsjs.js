// Mobile menu toggle
document.addEventListener('click', function(e){
  const mobileBtn = document.getElementById('mobileBtn');
  const menu = document.querySelector('.menu');
  if(!mobileBtn) return;
  if(e.target.closest('#mobileBtn')){
    menu.classList.toggle('active');
  }
});

// Close mobile menu when nav link clicked & handle page transition
document.querySelectorAll('.nav-link, .page-link').forEach(link => {
  link.addEventListener('click', function(e){
    // internal navigation only
    const href = this.getAttribute('href');
    if(!href || href.startsWith('http') ) return;

    // close mobile menu if open
    document.querySelector('.menu').classList.remove('active');

    // add exit animation then navigate
    e.preventDefault();
    document.body.classList.add('page-exit');
    setTimeout(()=> { window.location = href; }, 260);
  });
});

// On load: show enter animation
window.addEventListener('load', function(){
  // remove any exit class left
  document.body.classList.remove('page-exit');
  // ensure enter state
  setTimeout(()=> { document.body.classList.add('page-enter'); }, 10);

  // highlight active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a=>{
    if(a.getAttribute('href') === path){
      a.classList.add('active');
    }
  });
});

// small helper: AOS will be initialized on each page (index uses its own AOS init)

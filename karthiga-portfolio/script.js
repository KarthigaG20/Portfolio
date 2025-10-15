// small helpers
document.getElementById('year').innerText = new Date().getFullYear();

// smooth scroll for nav links
document.querySelectorAll('.nav a, .btn').forEach(el=>{
  el.addEventListener('click', (e)=>{
    const href = el.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

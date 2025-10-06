// small helper: smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const href=a.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const el=document.querySelector(href);
      if(el) window.scrollTo({top:el.offsetTop-50,behavior:'smooth'});
    }
  });
});

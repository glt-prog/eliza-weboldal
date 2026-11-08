
(function(){
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
function closeMenu(){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.innerHTML='Menü <span aria-hidden="true">☰</span>';}
toggle.addEventListener('click',function(){const opened=toggle.getAttribute('aria-expanded')==='true';nav.classList.toggle('is-open',!opened);toggle.setAttribute('aria-expanded',String(!opened));toggle.innerHTML=opened?'Menü <span aria-hidden="true">☰</span>':'Bezárás <span aria-hidden="true">×</span>';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-open')){closeMenu();toggle.focus();}});
document.querySelectorAll('a[href="#adatkezeles"]').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#adatkezeles').open=true;}));
document.querySelector('#contact-form').addEventListener('submit',e=>{e.preventDefault();document.querySelector('#contact-status').textContent='Ez egy bemutató: az üzenetet nem küldtük el, időpontkérés nem történt. Az adataid nem kerültek továbbításra.';});
document.querySelector('#newsletter-form')?.addEventListener('submit',e=>{e.preventDefault();document.querySelector('#newsletter-status').textContent='Ez egy bemutató: feliratkozás nem történt, az adataid nem kerültek továbbításra. Az Arcápolási Kisokos még készül, jelenleg nem tölthető le.';});
})();

document.querySelectorAll('[data-treatment]').forEach(link=>link.addEventListener('click',()=>{const field=document.querySelector('#contact-message');if(field){field.value='Erről szeretnék érdeklődni: '+link.dataset.treatment+'.';}}));
window.addEventListener('pageshow',()=>{const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.main-nav');if(toggle&&nav){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');}});

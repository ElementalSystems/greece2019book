function start() {
  let ce=document.getElementById('main_c');

  document.getElementById('main_a').addEventListener('click', function() {
    document.getElementById('main_a').classList.toggle('act', true);
    if (ce) ce.classList.toggle('act', false);
  });

  if (ce)
    ce.addEventListener('click', function() {
      document.getElementById('main_c').classList.toggle('act', true);
      document.getElementById('main_a').classList.toggle('act', false);
    });

  let zoom = document.getElementById('zoom');
  let zoomimg = document.getElementById('zoomimg');
  document.querySelectorAll('.imgframe img').forEach(e => {
    e.addEventListener('click', function(ev) {
        zoom.style.setProperty('--startx',(e.offsetLeft+e.offsetWidth/2)+'px')
        zoom.style.setProperty('--starty',(e.offsetTop+e.offsetHeight/2)+'px')
        zoomimg.src = e.src;
        zoom.classList.toggle('prepare', true);
        setTimeout(()=>zoom.classList.toggle('show', true),10);


      })
    });
  zoom.addEventListener('click', function() {
    zoom.classList.toggle('prepare', false);
    zoom.classList.toggle('show', false);
  });

}

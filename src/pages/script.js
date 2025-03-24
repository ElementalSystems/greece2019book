function start() {

  let ce = document.getElementById('main_c');
  if (ce) {
    document.getElementById('main_a').addEventListener('click', function() {
      document.getElementById('main_a').classList.toggle('act', true);
      ce.classList.toggle('act', false);
    });

    ce.addEventListener('click', function() {
      ce.classList.toggle('act', true);
      document.getElementById('main_a').classList.toggle('act', false);
    });
  }

  let zoom = document.getElementById('zoom');
  let zoomimg = document.getElementById('zoomimg');
  document.querySelectorAll('.imgframe img').forEach(e => {
    e.addEventListener('click', function(ev) {
      zoomimg.src = e.src;
      zoom.classList.toggle('show', true);
    })
  });
  zoom.addEventListener('click', function() {
    zoom.classList.toggle('show', false);
  });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("reveal")) document.body.classList.add("reveal");

}

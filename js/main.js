  //mediaQuery con JS
  var consulta = window.matchMedia('(max-width: 500px)');
  consulta.addListener(mediaQuery);
  //Initial variables
  var $burgerBtn = document.getElementById('burger-btn');
  var $menu = document.getElementById('menu');
  function toggleMenu(){
    $menu.classList.toggle('active');
    $burgerBtn.classList.toggle('icon-close');
  };

  //Functions
  function mediaQuery(){
    if (consulta.matches){
      console.log("Se cumplio");
      $burgerBtn.addEventListener('touchstart', toggleMenu);
    }else{
      console.log("No se cumplio");
      $burgerBtn.removeEventListener('touchstart', toggleMenu);
    }
  }
  mediaQuery();

  function showMenu(){
    $menu.classList.add('active');
  }
  function hideMenu(){
    $menu.classList.remove('active');
  }
  //lazyloading
  var bLazy = new Blazy({
  // options
  selector: "img"
  });

  //Hammer js gestos en pantallas touch
  var $body = document.body;
  var gestos = new Hammer($body);
  gestos.on('swipeleft', hideMenu);
  gestos.on('swiperight', showMenu);

window.addEventListener('scroll', function () {
   let foliage = document.querySelector('.foliage');
   let sky = document.querySelector('.sky');
   let tree = document.querySelector('.tree');
   let title = document.querySelector('.title');
   let x = window.scrollY / 2000 ;
   
   title.style.top = `${50 + (window.scrollY / 20)}%`
   sky.style.top = 0.5 * window.scrollY + 'px';
   sky.style.transform = `scale(${1 + x/2})`;
   foliage.style.right =  0.2 * -window.scrollY + 'px'
   foliage.style.top =  0.4 * -window.scrollY + 'px'
   tree.style.left =  0.4 * -window.scrollY + 'px'
   tree.style.transform =  `scale(${1 + x})`;

});

//progress bar
let progres = document.querySelector('.progres__inner');

window.addEventListener('scroll', function () {
   var win = document.body.scrollTop || document.documentElement.scrollTop;
   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   var procent = (win / height) * 100;
   progres.style.width = procent + '%'

})
const icon = document.querySelector('.icon input');
const sus = document.querySelector('.navigasi');
const navi= document.querySelector('.navigasi div');


icon.addEventListener('click', function(){
  navi.classList.toggle('slide');
})

sus.addEventListener('click', function(){
  navi.classList.toggle('slide');
})


function fungsi() {
    var space = document.getElementById("space");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");

    // sebelum dipencet
    if (space.style.display === "none") {
      space.style.display = "inline";
      btnText.innerHTML = "More"; 
      moreText.style.display = "none";
    } 
    

    //sesudah di pencet
    else {
      space.style.display = "none";
      btnText.innerHTML = "Close"; 
      moreText.style.display = "inline";
    }
}

document.querySelectorAll('.srt img').forEach(image =>{
  image.onclick = () =>{
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () =>{
   document.querySelector('.popup-image').style.display = 'none';
}

document.querySelector('.popup-image img').onclick = () =>{
  document.querySelector('.popup-image').style.display = 'none';
}

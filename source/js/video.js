// блок родитель
const openVideo = document.querySelector('.gym__video');

// блок кнопки
const openButton = openVideo.querySelector('.gym__video-button');

// кнопка ссыли
const openLink = document.querySelector('.gym__video-link');

const videoSrc = 'https://www.youtube.com/embed/9TZXsZItgdw?si=EIWmPhl5YhnnsCG8&autoplay=1';

function videoShow (){
  openLink.remove();

  openButton.addEventListener('click', () => {
    const ifraime = createIfraime();

    openButton.remove();
    openVideo.appendChild(ifraime);
  });
}

function createIfraime (){
  const ifraime = document.createElement('iframe');

  ifraime.setAttribute('src', videoSrc);
  ifraime.setAttribute('frameborder', '0');
  ifraime.setAttribute('allow', 'autoplay', 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  ifraime.setAttribute('allowfullscreen', 'true');
  return ifraime;
}

videoShow();

let boom = new Audio('./assets/musics/vineboom.mp3');

document.getElementById('zombie-word').addEventListener('click', () => {
    const zombieImage = document.getElementById('zombie-flash');
    zombieImage.style.display = 'block';
    zombieImage.style.opacity = 1;
    boom.cloneNode(true).play();
  
    setTimeout(() => {
      zombieImage.style.opacity = 0;
    }, 400); // starts fading after 100ms
  
    setTimeout(() => {
      zombieImage.style.display = 'none';
    }, 5000); // completely gone after 300ms
  });
  
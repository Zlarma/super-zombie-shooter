document.getElementById('zombie-word').addEventListener('click', () => {
    const zombieImage = document.getElementById('zombie-flash');
    zombieImage.style.display = 'block';
    zombieImage.style.opacity = 1;
  
    setTimeout(() => {
      zombieImage.style.opacity = 0;
    }, 100); // starts fading after 100ms
  
    setTimeout(() => {
      zombieImage.style.display = 'none';
    }, 300); // completely gone after 300ms
  });
  
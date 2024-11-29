
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
  ];
  
  let currentIndex = 0;
  
 
  const galleryImage = document.getElementById('galleryImage');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  

  function updateImage() {
    galleryImage.src = images[currentIndex];
  
  
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === images.length - 1;
  }
  

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateImage();
    }
  });
  

  nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateImage();
    }
  });
  

  updateImage();
  
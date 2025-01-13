// JavaScript for Interactive Modal and Carousel
const stories = {
    meeting: {
      title: "How We Met 💌",
      images: [
        { src: "fm1.JPG", caption: "Pertama kali ketemu Rere (Face to Face) setelah jemput dia dari stasiun Gambir. Jujur gue deg2an abis takut dia ngeliat gw ga kaya ekspektasi dia. Ternyata pas ketemu malah dia yang lebih malu dong HAHA, i will never forget her genuine shyness and smile that night. Mana lupa isi e-money lagi pas pulang jadi minjem mobil belakang, untung koko-nya baik hati ya HAHAHA" },
        { src: "fm2.JPG", caption: "Selama diperjalanan kita masih malu-malu kucing, and that night too is the very first time i hold her hand. It was so soft and i just couldn't took my palm off from her. We laugh at each other corny jokes but we surely felt love that night. And then i dropped her off in the Hotel Maya where she stays (luckily i got that Hotel on a steal deal too for the suite room!) " },
      ],
    },
    first_date: {
      title: "Our First Date 🌸",
      images: [
        { src: "fm3.jpg", caption: "Well technically our first date was 'Kondangan Date' but it's never really a date isn't it? So yeah the next day we to IRUUM which is a korean restaurant that got viral recently. We check this one out and it has a lot of activities to do, one of them is that we took a photo studio with korean uniform theme and the result is so damn good!" },
        { src: "fm4.JPG", caption: "This is the result, she looks so cute right? on the other hand i look like one of those back-seaters boys who just go sleeping all day long. Sejujurnya gue lebih mirip kaya anak STM yang pacaran sama anak swasta ya gak sih? wkwkwkwk" },
      ],
    },
    milestones: {
      title: "Our Milestones 🌟",
      images: [
        { src: "aq4.jpg", caption: "Our first achievement kayanya pas di Jakarta Aquarium sih. Jujur gue kaget ni cewe kok berani banget woy dipeluk uler piton gitu? i mean just look at the photo lol gua yang fotoin aja sampe merinding tapi ni cewe ngga? heran sih wkwkwkwk gak sengaja juga malah ketemu temen kampusnya dia disini, Rere seems so happy :)" },
        { src: "rt5.jpg", caption: "Our first Road Trip! Jujur ini juga road trip TERPANJANG pertama kalinya buat gue, ini bayangin aja Cilacap - Bandung yang jaraknya 300 kilo lebih dan gue bawa mobil dia sendiri HAHA tapi hebatnya si Rere menolak untuk tidur dan malah nemenin gue selama perjalanan. Thank you ya walaupun sebenernya tidur juga gapapa sih biar lagunya bisa diganti non K-Pop HAHAHA JK i love Park Shin Hye :)" },
        { src: "rt3.JPG", caption: "Our First Concert soon?" },
    ],
    },
  };
  
  let currentStory = null;
  let currentImageIndex = 0;
  
  function showModal(key) {
    currentStory = stories[key];
    currentImageIndex = 0;
  
    // Set modal title and initialize carousel
    document.getElementById("modal-title").textContent = currentStory.title;
    updateCarousel();
  
    // Get the modal and overlay elements
    const modal = document.getElementById("story-modal");
    const overlay = document.getElementById("modal-overlay");
  
    // Make the modal and overlay visible
    modal.style.display = "block";
    overlay.style.display = "block";
  
    // Trigger animations after a slight delay for the transitions
    setTimeout(() => {
      overlay.classList.add("show"); // Fade-in overlay
      modal.classList.add("show"); // Slide-up modal
    }, 10);
  }
  
  function closeModal() {
    const modal = document.getElementById("story-modal");
    const overlay = document.getElementById("modal-overlay");
  
    // Trigger animations for fade-out and slide-down
    modal.classList.remove("show");
    overlay.classList.remove("show");
  
    // Hide modal and overlay after animations finish
    setTimeout(() => {
      modal.style.display = "none";
      overlay.style.display = "none";
    }, 400); // Match transition duration
  }
  
  function updateCarousel() {
    const image = currentStory.images[currentImageIndex];
    const carouselImage = document.getElementById("carousel-image");
    const carouselCaption = document.getElementById("carousel-caption");
  
    // Update image and caption
    carouselImage.src = image.src;
    carouselCaption.textContent = image.caption;
  
    // Add active class for animation
    carouselImage.classList.remove("active", "previous");
    setTimeout(() => {
      carouselImage.classList.add("active");
    }, 50);
  }
  
  function nextImage() {
    const carouselImage = document.getElementById("carousel-image");
    carouselImage.classList.remove("active");
    carouselImage.classList.add("previous");
  
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % currentStory.images.length;
      updateCarousel();
    }, 400); // Match transition duration in CSS
  }
  
  function prevImage() {
    const carouselImage = document.getElementById("carousel-image");
    carouselImage.classList.remove("active");
    carouselImage.classList.add("previous");
  
    setTimeout(() => {
      currentImageIndex =
        (currentImageIndex - 1 + currentStory.images.length) %
        currentStory.images.length;
      updateCarousel();
    }, 400); // Match transition duration in CSS
  }
  
  
  function updateCarousel() {
    const image = currentStory.images[currentImageIndex];
    const carouselImage = document.getElementById("carousel-image");
    const carouselCaption = document.getElementById("carousel-caption");
  
    // Update image and caption
    carouselImage.src = image.src;
    carouselCaption.textContent = image.caption;
  
    // Add active class for animation
    carouselImage.classList.remove("active", "previous");
    setTimeout(() => {
      carouselImage.classList.add("active");
    }, 50);
  }
  
  function nextImage() {
    const carouselImage = document.getElementById("carousel-image");
    carouselImage.classList.remove("active");
    carouselImage.classList.add("previous");
  
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % currentStory.images.length;
      updateCarousel();
    }, 400); // Match the CSS transition duration
  }
  
  function prevImage() {
    const carouselImage = document.getElementById("carousel-image");
    carouselImage.classList.remove("active");
    carouselImage.classList.add("previous");
  
    setTimeout(() => {
      currentImageIndex =
        (currentImageIndex - 1 + currentStory.images.length) %
        currentStory.images.length;
      updateCarousel();
    }, 400); // Match the CSS transition duration
  }
  
  let uniqueCurrentIndex = 0; // Track the current index
const uniqueCarousel = document.querySelector(".unique-carousel");
const uniquePhotos = document.querySelectorAll(".unique-carousel-photo");
const uniqueTotalPhotos = uniquePhotos.length;

// Function to move to the next photo
function uniqueNextPhoto() {
  uniqueCurrentIndex++;
  if (uniqueCurrentIndex === uniqueTotalPhotos) {
    uniqueCurrentIndex = 0; // Loop back to the first image
  }
  uniqueUpdateCarousel();
}

// Function to move to the previous photo
function uniquePreviousPhoto() {
  uniqueCurrentIndex--;
  if (uniqueCurrentIndex < 0) {
    uniqueCurrentIndex = uniqueTotalPhotos - 1; // Loop to the last image
  }
  uniqueUpdateCarousel();
}

// Function to update the carousel position
function uniqueUpdateCarousel() {
  const offset = -uniqueCurrentIndex * 100; // Shift by 100% of the viewport
  uniqueCarousel.style.transform = `translateX(${offset}%)`;
}

// Auto-slide every 3 seconds
setInterval(uniqueNextPhoto, 3000);

console.log ("hello everyone")

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 30) {
            header.style.backgroundColor = '#aaa';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    const footer = document.querySelector('.footerall');
    footer.addEventListener('click', function() {
        this.classList.toggle('highlight');
    });

    const contentImage = document.querySelector('.content__image');
    contentImage.addEventListener('mouseenter', function() {
        this.style.border = '1px solid #f00';
    });
    contentImage.addEventListener('mouseleave', function() {
        this.style.border = 'none';
    });

    const title = document.querySelector('.content__title');
    title.addEventListener('click', function() {
        alert('Welcome to my website!');
    });

    const contentText = document.querySelector('.content__text');
    contentText.addEventListener('dblclick', function() {
        const currentFontSize = parseInt(window.getComputedStyle(this).fontSize);
        this.style.fontSize = (currentFontSize + 2) + 'px'; 
    });

    const logo = document.querySelector('.header__logo');
    logo.addEventListener('click', function() {
        const comment = prompt('Add your comment:');
        if (comment) {
            const newComment = document.createElement('p');
            newComment.textContent = comment;
            newComment.classList.add('user-comment');
            document.body.appendChild(newComment);
        }
    });


    const blockImage = document.querySelector('.block__image');
    blockImage.addEventListener('mouseenter', function() {
        this.style.border = '1px solid #f00'; 
    });
    blockImage.addEventListener('mouseleave', function() {
        this.style.border = 'none'; 
    });
});








const images = document.querySelectorAll('.block__image');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.classList.add('hover');
  });
  image.addEventListener('mouseout', () => {
    image.classList.remove('hover');
  });



  window.addEventListener('load', () => {
    const introText = document.querySelector('#intro_text');
    introText.classList.add('fade-in'); 
  });

  
});

const videos = document.querySelectorAll('.block__video');

videos.forEach(video => {
  const playButton = video.querySelector('.play-button');
  const pauseButton = video.querySelector('.pause-button');

  playButton.addEventListener('click', () => video.play());
  pauseButton.addEventListener('click', () => video.pause());
});


window.addEventListener('scroll', () => {
    const blocks = document.querySelectorAll('.block'); 
  
    blocks.forEach(block => {
      const scrollTop = window.scrollY;
      const blockTop = block.offsetTop;
  
      if (scrollTop > blockTop - 200) {
        block.classList.add('animated');
      } else {
        block.classList.remove('animated');
      }
    });
  });
  
  const certificates = document.querySelectorAll('.ach__image');
  
  certificates.forEach(certificate => {
    certificate.addEventListener('click', () => {
    });
  });
  

  
const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');


  if (!nameInput.value) {
    alert("no name ")
    console.error("no name ")
  } else if (!emailInput.value) {
    alert("no email adress")
    console.error("no email adress ")
  } else if (!messageInput.value) {
    console.error("no message ")
    alert("no message ")
  } else {
  }
});

const contactInfo = document.querySelector('.cont'); 

contactInfo.addEventListener('mouseover', () => {
});
contactInfo.addEventListener('mouseout', () => {
});



const introText = document.querySelector('.content__text');

introText.classList.add('fade-in');

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('hover');
  });
  link.addEventListener('mouseout', () => {
    link.classList.remove('hover');
  });

      const logo = document.querySelector('.header__logo');
      logo.addEventListener('click', function() {
          const comment = prompt('Add your comment:');
          if (comment) {
              const newComment = document.createElement('p');
              newComment.textContent = comment;
              newComment.classList.add('user-comment');
              document.body.appendChild(newComment);
          }
      });
});

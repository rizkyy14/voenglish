// JavaScript
const navbar = document.querySelector('nav');

window.onscroll = () => {
  if (window.scrollY > 90) {
    navbar.classList.add('border-bottom');
  } else {
    navbar.classList.remove('border-bottom');
  }
  if (window.scrollY > 400) {
    totop.classList.add('active');
  } else {
    totop.classList.remove('active');
  }
};

const checkoutButton = document.querySelector('#kirim');
const form = document.querySelector('#formPesan');
// kirim data
checkoutButton.addEventListener('click', function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  const message = formatMessage(objData);
  window.open('http://wa.me/6281263769470?text=' + encodeURIComponent(message));
});

// format pesan wa
const formatMessage = (obj) => {
  return `Data Customer
  Name  : ${obj.name}
  Email : ${obj.email}
  Phone : ${obj.phone}
  Alamat : ${obj.address}
  Saya ingin mengetahui lebih lanjut tentang program les ini, terima kasih`;
};

//Get the button
let mybutton = document.getElementById('btn-back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

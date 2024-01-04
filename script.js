// JavaScript
const navbar = document.querySelector('nav');
const totop = document.querySelector('.totop');

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

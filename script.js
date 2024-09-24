document.getElementById('profile-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const classSection = document.getElementById('class').value;

  

  document.getElementById('profile-section').style.display = 'none';
  document.getElementById('home-page').style.display = 'block';
});

window.onload = function () {
  // Check if name and class are already stored
  const storedName = localStorage.getItem('name');
  const storedClass = localStorage.getItem('class');

  if (storedName && storedClass) {
    document.getElementById('profile-section').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
  } else {
    document.getElementById('profile-section').style.display = 'block';
  }
};

function showPage(pageId) {
  var sections = document.getElementsByClassName('section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
  document.getElementById(pageId).style.display = 'block';
}

function openPDF(pdfFile) {
  window.open(pdf
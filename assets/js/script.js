document.querySelector('#expense-data').addEventListener('submit', function (event) {
  event.preventDefault(); 

  var formData = new FormData(event.target);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://script.google.com/macros/s/AKfycbxaP3snnD8mxms-x_AdK4yWoR7NYg84dlSEkDQVFTBtPSWLGy6-dtBMFmChF0REchiWzg/exec', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
  xhr.onload = function () {
  };
  var params = new URLSearchParams(formData).toString();
  xhr.send(params);

  var form = document.getElementById('expense-data');
  form.reset();

  var selectElements = form.querySelectorAll('select');
  selectElements.forEach(function(select) {
      select.selectedIndex = 0;
  });

  var inputElements = form.querySelectorAll('input[type="number"], textarea');
  inputElements.forEach(function(input) {
      input.value = '';
  });
});

  const showMoreLink = document.getElementById('showMoreLink');
  const moreSection = document.getElementById('more');

  showMoreLink.addEventListener('click', function(event) {
      event.preventDefault();
      moreSection.classList.toggle('hide');
  });
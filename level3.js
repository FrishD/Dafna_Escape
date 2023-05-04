const codeInput = document.getElementById('codeInput');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
  const code = codeInput.value;
  if (code === '303') {
    window.location.href = "video2.html";
  } else {
    alert('קוד שגוי, נסה שוב');
    codeInput.value = '';
  }
});

const homeButton = document.getElementById('homeButton');

homeButton.addEventListener('click', () => {
  window.location.href = "video2.html";
});


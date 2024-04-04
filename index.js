console.log('bobbyhadz.com');

document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    console.log('Enter key pressed');
  }
});

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const kbEvent = new KeyboardEvent('keydown', {
    bubbles: true,
    cancelable: true,
    key: 'Enter',
  });

  document.body.dispatchEvent(kbEvent);
});

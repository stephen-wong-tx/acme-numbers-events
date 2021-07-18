console.log('hi');

const button = document.getElementById('main-button');

function toggle(event) {
  console.log('clicked! again!');
  const button = event.target;
  console.log(button);
  // if (button.tagName === 'INPUT') {
  if (button.id === "main-button") {  
    if (button.className === 'clicked') button.className = "reset";
    else button.className = 'clicked';
  }
}

const clickButton = addEventListener('click', toggle);
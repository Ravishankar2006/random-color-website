const button = document.getElementById('ColorButton');
    const colorCode = document.getElementById('colorCode');

    button.addEventListener('click', () => {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
      colorCode.textContent = `Color Code: ${randomColor}`;
    });
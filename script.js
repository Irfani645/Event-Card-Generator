const badgeForm = document.getElementById('badgeForm');
const downloadBadge = document.getElementById('dwnBadge');

badgeForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formcontainer = document.getElementById('formContainer')
  formcontainer.style.display = 'none';
  const eventname = document.getElementById('eventname').value;
  const name = document.getElementById('name').value;
  const designation = document.getElementById('designation').value;
  const company = "" + document.getElementById('company').value;
  const access = document.getElementById('access').value;

  const id = 'ID' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');

  $('#badgeEvent').text(eventname);
  $('#badgeName').text(name);
  $('#badgeDesignation').text(designation);
  $('#badgecontainer').text(company);
  $('#badgeAccess').text(access);

  $('#qrcode').empty();

  $('#qrcode').qrcode({
    text: `ID: ${id}\Event: ${eventname}\nName: ${name}\nDesignation: ${designation}\nCompany: ${company}\nAccess: ${access}`,
    width: 150,
    height: 150
  });

  $('#badge').css('display', 'block');
  $('#dwnBadge').css('display', 'block');
});

document.getElementById('dwnBadge').addEventListener('click', function () {
  const badgeElement = document.getElementById('badge');

  // Increase the scale to make the image larger (e.g., 2x)
  const scaleFactor = 2; // You can adjust this to make the image larger or smaller

  htmlToImage.toPng(badgeElement, { 
      width: badgeElement.clientWidth * scaleFactor, 
      height: badgeElement.clientHeight * scaleFactor, 
      style: {
          transform: `scale(${scaleFactor})`,
          transformOrigin: 'top left'
      }
  })
  .then(function (dataUrl) {
      let link = document.createElement('a');
      link.download = 'badge.png';
      link.href = dataUrl;
      link.click();
  });
});

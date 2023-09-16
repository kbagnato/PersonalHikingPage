// TODO implement class variable to store gearlist
// var gearList = [];
getGear();

$('document').ready(function() {
  $('.carousel-item')[0].classList.add('active')
});

/* get Bagadonuts gear list from server */
function getGear() {
  $.ajax({
    url: '/api/bagadonuts',
    type: 'GET',
    success: function(data) {
      // gearList = data;
      populateList(data);
      return data;
    },
    error: function (error) {
      console.log('Error: ' + error);
    }
  });
}

// add Bootstrap Cards to the doc
function populateList(list) {
  console.log(list);
  let gearCard;

  for (idx in list) {
    gearCard = `<div class='card gear-card' id='item-list[idx].id' >`;
    if (list[idx].pictures)
      gearCard += `<img class='card-img-top' src='/images/gear/${list[idx].pictures[0]}.jpg' alt="Image coming soon">`;
    else
      gearCard += '<p>No image found.</p>' 
    gearCard += `
      <a href='/gear/${list[idx].id}'><span class='gear-card-link'></span></a>
      <div class='card-body'>
          <h5 class='card-title'>${list[idx].name}</h5
          <h6 class='card-subtitle.text-muted'>${list[idx].desc}</h6>
        </div>
    </div>`; // end card
    
    $('.bagadonuts-cards').append(gearCard);
  }
}

/* manually set image from thumbnails */
function setActivePic(index) {
  let thumbnails = $('.carousel-item');
  for (let i = 0; i < thumbnails.length; i++) {
    $('.carousel-item')[i].classList.remove('active')
  }

  $('.carousel-item')[index].classList.add('active')
}
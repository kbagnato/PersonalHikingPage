getGear();

/* get Bagadonuts gear list from server */
function getGear() {
  $.ajax({
    url: '/api/bagadonuts',
    type: 'GET',
    success: function(data) {
      console.log(data);
      return data;
    },
    error: function (error) {
      console.log('Error: ' + error);
    }
  });
}

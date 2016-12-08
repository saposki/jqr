// Attach a button listener to the button
$('.btn').on('click', function(){
  // On click on the button, make an AJAX request to reddit for results of cute puppies
  $.ajax({
    type:'GET',
    url:'https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true',
    success:function(data){
      $('.text').html('');
      // For each of the elements in data.children, append a new <img> element to .text with the src as the child.data.thumbnail
      for( var j = 0; j < data.data.children.length; j++){
        // console.log('here too!!!')
        var pup = '<img src="' +
            data.data.children[j].data.thumbnail +
            '"/>';
        console.log(pup)
        $('.text').append(pup);
      }
    },
  });
});

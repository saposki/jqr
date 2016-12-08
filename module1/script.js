$('.desc').hide();
  $('.item').on('mouseover',function(){
    $('.desc').show();
  }).on('mouseleave', function(){
    $('.desc').hide();
});

$('.tester').text('Magic').css('background-color', 'blue');

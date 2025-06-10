$(document).ready(function() {
  // Animação do menu
  $('#navigation li a').hover(function() {
    $(this).addClass('animated');
  }, function() {
    $(this).removeClass('animated');
  });

  // Animação do formulário de postagem
  $('#post-button').click(function() {
    $('#post-form').addClass('animated');
  });
});

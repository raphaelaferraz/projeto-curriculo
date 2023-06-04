// Quando o documento HTML é totalmente carregado, define os eventos para o interruptor e os elementos de zoom
$(document).ready(function () {
  // PRIMEIRO EVENTO
  // Evento de clique para o interruptor '#onoff1'
  $('#onoff1').click(function () {
    // Verifica se o interruptor está marcado
    if ($('#onoff1').is(':checked')) {
      // Caso esteja marcado, aplica estilos de cores de fundo e texto para o modo escuro
      $('body').css('background', '#bbbbbb');
      $('.cabecalho__div-container').css('background', '#878484');
      $('.cabecalho__div-container').css(
        'box-shadow',
        '0px 10px 15px -3px rgba(0,0,0,0.5)'
      );
      $('.cabecalho__div-container__titulo').css('color', '#dcdcdc');
      $('.cabecalho__div-container__div-linha').css('background', '#dcdcdc');
      $('.cabecalho__div-container__subtitulo').css('color', '#dcdcdc');
      $(
        '.cabecalho__div-container__div-informacoes__lista__item__paragrafo'
      ).css('color', '#dcdcdc');
      $('.lista__item__titulo').css('color', '#FFFFFF');
      $('.lista__item__titulo__div-linha').css('background', '#dcdcdc');
      $('.lista__item__secao__paragrafo-principal').css('color', '#320a48');
    } else {
      // Caso contrário (se não estiver marcado), aplica estilos de cores de fundo e texto para o modo claro
      $('body').css('background', '#FFFFFF');
      $('.cabecalho__div-container').css('background', '#F4F4F4');
      $('.cabecalho__div-container__titulo').css('color', '#545454');
      $('.cabecalho__div-container__div-linha').css('background', '#545454');
      $('.cabecalho__div-container__subtitulo').css('color', '#545454');
      $(
        '.cabecalho__div-container__div-informacoes__lista__item__paragrafo'
      ).css('color', '#545454');
      $('.lista__item__titulo').css('color', '#545454');
      $('.lista__item__titulo__div-linha').css('background', '#949494');
      $('.lista__item__secao__paragrafo-principal').css('color', '#6f4586');
    }
  });

  // SEGUNDO EVENTO
  // Eventos de entrada e saída do mouse para elementos com a classe '.zoom'
  $(document).ready(function () {
    // Evento de entrada do mouse
    $('.zoom').mouseenter(function () {
      $(this).css('font-size', '20px'); // Define o tamanho da fonte como 20px quando o mouse entra
    });
    // Evento de saída do mouse
    $('.zoom').mouseleave(function () {
      $(this).css('font-size', '16px'); // Define o tamanho da fonte como 16px quando o mouse sai
    });
  });
});

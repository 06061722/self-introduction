new fullpage('#fullpage', {
  anchors: ['page1', 'page2', 'page3', 'page4'],
  navigationTooltips: ['fullPage', 'Open', 'Easy', 'Touch'],
  css3: true,
  sectionsColor: ['#1da1f2', 'rgb(252, 108, 124)', 'rgb(255, 95, 69)', 'whitesmoke'],
  scrollingSpeed: 700,
  navigation: false,
  slidesNavigation: true,
  responsiveHeight: 330,
  dragAndMove: true,
  dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
  controlArrows: false,
  verticalCentered: false,
  afterRender: function () {
    $('h1').hide()
    $('.section_1 h1').fadeIn(1000)
  },
  afterLoad: function (origin, destination) {
    if (destination.index === 0) {
      $('.section_1 h1').fadeIn(1000)
    }
    if (destination.index === 1) {
      $('.section_2').find('h1').fadeIn(1000)
      $('.skill').animate({margin:"0"},1000);
      $('.book').animate({margin:"0"},1000);
    }
    if (destination.index === 2) { }
    if (destination.index === 3) { }
  },
  onLeave: function (origin) {
    console.log(origin)
    if (origin.index === 0) {
      $('.section_1 h1').fadeOut(100)
    }
    if (origin.index === 1) {
      $('.section_2 h1').fadeOut(100)
      $('.skill').animate({margin:"0 0 0 -100%"},500);
      $('.book').animate({margin:"0 0 0 -100%"},500);
    }
  }
}
)

$(function () {
  $('#menu > li > a').on('click', function () {
    console.log(233)
  })
});

$(window).bind('hashchange', function () {
  console.log(window.location.href)
  var hash = window.location.href.split('#')[1]
  console.log(hash)
  $('#menu > li').attr('class', '')
  $('[data-menuanchor="' + hash + '"]').attr('class', 'active')
});
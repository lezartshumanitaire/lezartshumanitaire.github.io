---
layout: null
---
// target='_blank' on url that are not par of the current domain
// see http://stackoverflow.com/questions/4425198/markdown-target-blank
(function() {
    let links = document.links
    for (let i = 0, linksLength = links.length; i < linksLength; i++) {
       if (links[i].hostname != window.location.hostname) {
           links[i].target = '_blank'
           links[i].className += ' externalLink'
       }
    }
})();

// cookie agreement
$(function() {
  if ( $.cookie('cookiesAgreement') == undefined ){
    $('.cookiesAgreement').show('slow');
    $('.agreeCockies').click(
      function(){
        $.cookie('cookiesAgreement', 'http://www.youtube.com/watch?v=MMb3fd7fwec', { expires: 365, path: '/' });
        $('.cookiesAgreement').hide('slow');
      }
    );
  }
});

// GOOGLE ANALYTICS CODE >> moved to _includes/head.hmtl


// $(document).ready(function() {
//   $('.post-images').magnificPopup({
//     delegate: 'a',
//     type: 'image',
//     gallery:{
//       enabled:true
//     }
//   });
// });


if ($(".windowWidth").length) {
  $(window).resize(function() {
    printWidth();
  });

  $(document).ready(function() {
    printWidth();
  });

  function printWidth(){
    const width = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;
    const widthString = "width :" + width + "px";
    $(".windowWidth").text(widthString);
  }
}

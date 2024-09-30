$(document).ready(function(){
  $('#mobile_btn').on('click', function() {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });

  const sections = $("section");
  const navItens = $(".nav-item")

  $(window).on("scroll", function(){
    const header = $("header");
    let activeSectionIndex = 0;
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    if(scrollPosition <=0){
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 1px 5px");
    }

    sections.each(function(i){
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      if(scrollPosition >= sectionTop && scrollPosition <= sectionBottom){
        activeSectionIndex = i;
        return false;
      } 
    })
    navItens.removeClass("active")
    $(navItens[activeSectionIndex]).addClass("active");
  });
});

function verCardapio(){
  let verCardapio = document.getElementById("verCardapio");
  verCardapio.click();
};

function favoritar(){
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
}

$(document).ready(function() {
  $('.heart-icon').on('click', function() {
    $(this).toggleClass('liked');
  });
});
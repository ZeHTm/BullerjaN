$(function() {

   const worksSlider = $('[data-slider="slick"]')

   /* Mobile nav */

   const navToggle = $("#navToggle");
   const nav = $("#nav");
   const nav1 = $("#nav1");
   const nav2 = $("#nav2");
   const nav3 = $("#nav3");

   navToggle.on("click", function(event) {
      event.preventDefault();

      nav.toggleClass("show");
      nav1.toggleClass("show");
      nav2.toggleClass("show");
      nav3.toggleClass("show");
   });


   /*Modal*/
   const modalCall = $("[data-modal]");
   const modalClose = $("[data-close]");

   modalCall.on("click", function(event) {
      event.preventDefault();

      let $this = $(this);
      let modalId = $this.data('modal');

      $(modalId).addClass('show')
      $('body').addClass('no-scroll');

      setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
            transform: "rotateX(0)"
         });
      }, 200);

      worksSlider.slick('setPosition');

   });


   modalClose.on("click", function(event) {
      event.preventDefault();

      let $this = $(this);
      let modalParent = $this.parents('.modal');

      modalParent.find(".modal__dialog").css({
         transform: "rotateX(90deg)"
      });

      setTimeout(function() {
         modalParent.removeClass('show')
         $('body').removeClass('no-scroll');
      }, 200);


   });


   $(".modal").on("click", function(event) {
      let $this = $(this);

      $this.find(".modal__dialog").css({
         transform: "rotateX(90deg)"
      });

      setTimeout(function() {
         $this.removeClass('show')
         $('body').removeClass('no-scroll');
      }, 200);

   });

   $(".modal__dialog").on("click", function(event) {
      event.stopPropagation();
   });



   /* Slider: https://kenwheeler.github.io/slick/ */

   worksSlider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      dots: true,
   });

   $(".slickPrev").on("click", function(event) {
      event.preventDefault();

      let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

      currentSlider.slick("slickPrev")
   });

   $(".slickNext").on("click", function(event) {
      event.preventDefault();

      let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

      currentSlider.slick("slickNext")
   });

});

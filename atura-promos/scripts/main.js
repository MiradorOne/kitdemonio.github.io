"use strict";$(document).ready(function(){$(".owl-carousel").owlCarousel({loop:!0,responsiveClass:!0,responsive:{0:{items:1,nav:!1,dots:!0},768:{items:1,lup:!0,nav:!1,fallbackEasing:!0},1e3:{items:1,nav:!0,loop:!0,dots:!0,animateIn:!0}}}),$(".img-slider").slick({accessibility:!1,infinite:!1,speed:300,slidesToShow:4,slidesToScroll:1,centerMode:!1,arrows:!0,variableWidth:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1,arrows:!1}},{breakpoint:769,settings:{slidesToShow:2,slidesToScroll:2,arrows:!1,autoplay:!0,autoplaySpeed:2e3,infinite:!0}},{breakpoint:426,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]})});
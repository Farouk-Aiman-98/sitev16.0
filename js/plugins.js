/*global $*/
(function () {
	'use strict';
	$('.carousel').carousel({
		interval: 2000000
	});
	$('body').css({
		"padding-top": $('.navbar').height() + 16
	});
	$(".Portfolio .work").mouseenter(function () {
		$(this).children(".Portfolio .work .over").hide(500);
		$(this).children(".Portfolio .work .overlay").show(500);
	});
	$(".Portfolio .work").mouseleave(function () {
		$(this).children(".Portfolio .work .over").show(500);
		$(this).children(".Portfolio .work .overlay").delay().fadeOut(500);
	});
	$(".navbar .collapse .navbar-nav li").click().addClass("active").siblings().removeClass("active");
	$(".itemTwo").click(function () {
		$("html , body").animate({
			scrollTop: $("#features").offset().top - $('.navbar').height() - 16
		}, 500);
	});
	$(".itemThree").click(function () {
		$("html , body").animate({
			scrollTop: $("#pricing").offset().top - $('.navbar').height() - 16
		}, 500);
	});
	$(".itemFour").click(function () {
		$("html , body").animate({
			scrollTop: $("#review").offset().top - $('.navbar').height() - 16
		}, 500);
	});
	$(".itemFive").click(function () {
		$("html , body").animate({
			scrollTop: $(".form").offset().top - $('.navbar').height() - 16
		}, 700);
	});
}());

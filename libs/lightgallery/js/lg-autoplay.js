// build time:Thu Sep 03 2020 10:43:50 GMT+0800 (CST)
(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var t;if(typeof window!=="undefined"){t=window}else if(typeof global!=="undefined"){t=global}else if(typeof self!=="undefined"){t=self}else{t=this}t.LgAutoplay=e()}})(function(){var e,t,r;return function o(e,t,r){function s(i,u){if(!t[i]){if(!e[i]){var n=typeof require=="function"&&require;if(!u&&n)return n(i,!0);if(l)return l(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var c=t[i]={exports:{}};e[i][0].call(c.exports,function(t){var r=e[i][1][t];return s(r?r:t)},c,c.exports,o,e,t,r)}return t[i].exports}var l=typeof require=="function"&&require;for(var i=0;i<r.length;i++)s(r[i]);return s}({1:[function(t,r,o){(function(t,r){if(typeof e==="function"&&e.amd){e([],r)}else if(typeof o!=="undefined"){r()}else{var s={exports:{}};r();t.lgAutoplay=s.exports}})(this,function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r){if(Object.prototype.hasOwnProperty.call(r,o)){e[o]=r[o]}}}return e};var t={autoplay:false,pause:5e3,progressBar:true,fourceAutoplay:false,autoplayControls:true,appendAutoplayControlsTo:".lg-toolbar"};var r=function o(r){this.el=r;this.core=window.lgData[this.el.getAttribute("lg-uid")];if(this.core.items.length<2){return false}this.core.s=e({},t,this.core.s);this.interval=false;this.fromAuto=true;this.canceledOnTouch=false;this.fourceAutoplayTemp=this.core.s.fourceAutoplay;if(!this.core.doCss()){this.core.s.progressBar=false}this.init();return this};r.prototype.init=function(){var e=this;if(e.core.s.autoplayControls){e.controls()}if(e.core.s.progressBar){e.core.outer.querySelector(".lg").insertAdjacentHTML("beforeend",'<div class="lg-progress-bar"><div class="lg-progress"></div></div>')}e.progress();if(e.core.s.autoplay){e.startlAuto()}utils.on(e.el,"onDragstart.lgtm touchstart.lgtm",function(){if(e.interval){e.cancelAuto();e.canceledOnTouch=true}});utils.on(e.el,"onDragend.lgtm touchend.lgtm onSlideClick.lgtm",function(){if(!e.interval&&e.canceledOnTouch){e.startlAuto();e.canceledOnTouch=false}})};r.prototype.progress=function(){var e=this;var t;var r;utils.on(e.el,"onBeforeSlide.lgtm",function(){if(e.core.s.progressBar&&e.fromAuto){t=e.core.outer.querySelector(".lg-progress-bar");r=e.core.outer.querySelector(".lg-progress");if(e.interval){r.removeAttribute("style");utils.removeClass(t,"lg-start");setTimeout(function(){utils.setVendor(r,"Transition","width "+(e.core.s.speed+e.core.s.pause)+"ms ease 0s");utils.addClass(t,"lg-start")},20)}}if(!e.fromAuto&&!e.core.s.fourceAutoplay){e.cancelAuto()}e.fromAuto=false})};r.prototype.controls=function(){var e=this;var t='<span class="lg-autoplay-button lg-icon"></span>';e.core.outer.querySelector(this.core.s.appendAutoplayControlsTo).insertAdjacentHTML("beforeend",t);utils.on(e.core.outer.querySelector(".lg-autoplay-button"),"click.lg",function(){if(utils.hasClass(e.core.outer,"lg-show-autoplay")){e.cancelAuto();e.core.s.fourceAutoplay=false}else{if(!e.interval){e.startlAuto();e.core.s.fourceAutoplay=e.fourceAutoplayTemp}}})};r.prototype.startlAuto=function(){var e=this;utils.setVendor(e.core.outer.querySelector(".lg-progress"),"Transition","width "+(e.core.s.speed+e.core.s.pause)+"ms ease 0s");utils.addClass(e.core.outer,"lg-show-autoplay");utils.addClass(e.core.outer.querySelector(".lg-progress-bar"),"lg-start");e.interval=setInterval(function(){if(e.core.index+1<e.core.items.length){e.core.index++}else{e.core.index=0}e.fromAuto=true;e.core.slide(e.core.index,false,false)},e.core.s.speed+e.core.s.pause)};r.prototype.cancelAuto=function(){clearInterval(this.interval);this.interval=false;if(this.core.outer.querySelector(".lg-progress")){this.core.outer.querySelector(".lg-progress").removeAttribute("style")}utils.removeClass(this.core.outer,"lg-show-autoplay");utils.removeClass(this.core.outer.querySelector(".lg-progress-bar"),"lg-start")};r.prototype.destroy=function(){this.cancelAuto();if(this.core.outer.querySelector(".lg-progress-bar")){this.core.outer.querySelector(".lg-progress-bar").parentNode.removeChild(this.core.outer.querySelector(".lg-progress-bar"))}};window.lgModules.autoplay=r})},{}]},{},[1])(1)});
//rebuild by neat 
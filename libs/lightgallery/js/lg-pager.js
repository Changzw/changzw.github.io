// build time:Tue Jun 02 2020 17:36:12 GMT+0800 (CST)
(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var r;if(typeof window!=="undefined"){r=window}else if(typeof global!=="undefined"){r=global}else if(typeof self!=="undefined"){r=self}else{r=this}r.LgPager=e()}})(function(){var e,r,t;return function n(e,r,t){function o(i,a){if(!r[i]){if(!e[i]){var l=typeof require=="function"&&require;if(!a&&l)return l(i,!0);if(s)return s(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[i]={exports:{}};e[i][0].call(u.exports,function(r){var t=e[i][1][r];return o(t?t:r)},u,u.exports,n,e,r,t)}return r[i].exports}var s=typeof require=="function"&&require;for(var i=0;i<t.length;i++)o(t[i]);return o}({1:[function(r,t,n){(function(r,t){if(typeof e==="function"&&e.amd){e([],t)}else if(typeof n!=="undefined"){t()}else{var o={exports:{}};t();r.lgPager=o.exports}})(this,function(){"use strict";var e=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}return e};var r={pager:false};var t=function n(t){this.el=t;this.core=window.lgData[this.el.getAttribute("lg-uid")];this.core.s=e({},r,this.core.s);if(this.core.s.pager&&this.core.items.length>1){this.init()}return this};t.prototype.init=function(){var e=this;var r="";var t;var n;var o;e.core.outer.querySelector(".lg").insertAdjacentHTML("beforeend",'<div class="lg-pager-outer"></div>');if(e.core.s.dynamic){for(var s=0;s<e.core.s.dynamicEl.length;s++){r+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+e.core.s.dynamicEl[s].thumb+'" /></div></span>'}}else{for(var i=0;i<e.core.items.length;i++){if(!e.core.s.exThumbImage){r+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+e.core.items[i].querySelector("img").getAttribute("src")+'" /></div></span>'}else{r+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+e.core.items[i].getAttribute(e.core.s.exThumbImage)+'" /></div></span>'}}}n=e.core.outer.querySelector(".lg-pager-outer");n.innerHTML=r;t=e.core.outer.querySelectorAll(".lg-pager-cont");for(var a=0;a<t.length;a++){(function(r){utils.on(t[r],"click.lg touchend.lg",function(){e.core.index=r;e.core.slide(e.core.index,false,false)})})(a)}utils.on(n,"mouseover.lg",function(){clearTimeout(o);utils.addClass(n,"lg-pager-hover")});utils.on(n,"mouseout.lg",function(){o=setTimeout(function(){utils.removeClass(n,"lg-pager-hover")})});utils.on(e.core.el,"onBeforeSlide.lgtm",function(e){for(var r=0;r<t.length;r++){utils.removeClass(t[r],"lg-pager-active");if(e.detail.index===r){utils.addClass(t[r],"lg-pager-active")}}})};t.prototype.destroy=function(){};window.lgModules.pager=t})},{}]},{},[1])(1)});
//rebuild by neat 
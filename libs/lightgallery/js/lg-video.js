// build time:Wed Jun 10 2020 16:05:32 GMT+0800 (CST)
(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var o;if(typeof window!=="undefined"){o=window}else if(typeof global!=="undefined"){o=global}else if(typeof self!=="undefined"){o=self}else{o=this}o.LgVideo=e()}})(function(){var e,o,i;return function r(e,o,i){function t(s,a){if(!o[s]){if(!e[s]){var d=typeof require=="function"&&require;if(!a&&d)return d(s,!0);if(l)return l(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var n=o[s]={exports:{}};e[s][0].call(n.exports,function(o){var i=e[s][1][o];return t(i?i:o)},n,n.exports,r,e,o,i)}return o[s].exports}var l=typeof require=="function"&&require;for(var s=0;s<i.length;s++)t(i[s]);return t}({1:[function(o,i,r){(function(o,i){if(typeof e==="function"&&e.amd){e([],i)}else if(typeof r!=="undefined"){i()}else{var t={exports:{}};i();o.lgVideo=t.exports}})(this,function(){"use strict";var e=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var r in i){if(Object.prototype.hasOwnProperty.call(i,r)){e[r]=i[r]}}}return e};var o={videoMaxWidth:"855px",youtubePlayerParams:false,vimeoPlayerParams:false,dailymotionPlayerParams:false,vkPlayerParams:false,videojs:false,videojsOptions:{}};var i=function r(i){this.el=i;this.core=window.lgData[this.el.getAttribute("lg-uid")];this.core.s=e({},o,this.core.s);this.videoLoaded=false;this.init();return this};i.prototype.init=function(){var e=this;utils.on(e.core.el,"hasVideo.lgtm",function(o){e.core.___slide[o.detail.index].querySelector(".lg-video").insertAdjacentHTML("beforeend",e.loadVideo(o.detail.src,"lg-object",true,o.detail.index,o.detail.html));if(o.detail.html){if(e.core.s.videojs){try{videojs(e.core.___slide[o.detail.index].querySelector(".lg-html5"),e.core.s.videojsOptions,function(){if(!e.videoLoaded){this.play()}})}catch(i){console.error("Make sure you have included videojs")}}else{e.core.___slide[o.detail.index].querySelector(".lg-html5").play()}}});utils.on(e.core.el,"onAferAppendSlide.lgtm",function(o){if(e.core.___slide[o.detail.index].querySelector(".lg-video-cont")){e.core.___slide[o.detail.index].querySelector(".lg-video-cont").style.maxWidth=e.core.s.videoMaxWidth;e.videoLoaded=true}});var o=function r(o){if(utils.hasClass(o.querySelector(".lg-object"),"lg-has-poster")&&o.querySelector(".lg-object").style.display!=="none"){if(!utils.hasClass(o,"lg-has-video")){utils.addClass(o,"lg-video-playing lg-has-video");var i;var r;var t=function u(i,r){o.querySelector(".lg-video").insertAdjacentHTML("beforeend",e.loadVideo(i,"",false,e.core.index,r));if(r){if(e.core.s.videojs){try{videojs(e.core.___slide[e.core.index].querySelector(".lg-html5"),e.core.s.videojsOptions,function(){this.play()})}catch(t){console.error("Make sure you have included videojs")}}else{e.core.___slide[e.core.index].querySelector(".lg-html5").play()}}};if(e.core.s.dynamic){i=e.core.s.dynamicEl[e.core.index].src;r=e.core.s.dynamicEl[e.core.index].html;t(i,r)}else{i=e.core.items[e.core.index].getAttribute("href")||e.core.items[e.core.index].getAttribute("data-src");r=e.core.items[e.core.index].getAttribute("data-html");t(i,r)}var l=o.querySelector(".lg-object");o.querySelector(".lg-video").appendChild(l);if(!utils.hasClass(o.querySelector(".lg-video-object"),"lg-html5")){utils.removeClass(o,"lg-complete");utils.on(o.querySelector(".lg-video-object"),"load.lg error.lg",function(){utils.addClass(o,"lg-complete")})}}else{var s=o.querySelector(".lg-youtube");var a=o.querySelector(".lg-vimeo");var d=o.querySelector(".lg-dailymotion");var c=o.querySelector(".lg-html5");if(s){s.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}else if(a){try{$f(a).api("play")}catch(n){console.error("Make sure you have included froogaloop2 js")}}else if(d){d.contentWindow.postMessage("play","*")}else if(c){if(e.core.s.videojs){try{videojs(c).play()}catch(n){console.error("Make sure you have included videojs")}}else{c.play()}}utils.addClass(o,"lg-video-playing")}}};if(e.core.doCss()&&e.core.items.length>1&&(e.core.s.enableSwipe&&e.core.isTouch||e.core.s.enableDrag&&!e.core.isTouch)){utils.on(e.core.el,"onSlideClick.lgtm",function(){var i=e.core.___slide[e.core.index];o(i)})}else{for(var i=0;i<e.core.___slide.length;i++){(function(i){utils.on(e.core.___slide[i],"click.lg",function(){o(e.core.___slide[i])})})(i)}}utils.on(e.core.el,"onBeforeSlide.lgtm",function(o){var i=e.core.___slide[o.detail.prevIndex];var r=i.querySelector(".lg-youtube");var t=i.querySelector(".lg-vimeo");var l=i.querySelector(".lg-dailymotion");var s=i.querySelector(".lg-vk");var a=i.querySelector(".lg-html5");if(r){r.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}else if(t){try{$f(t).api("pause")}catch(d){console.error("Make sure you have included froogaloop2 js")}}else if(l){l.contentWindow.postMessage("pause","*")}else if(a){if(e.core.s.videojs){try{videojs(a).pause()}catch(d){console.error("Make sure you have included videojs")}}else{a.pause()}}if(s){s.setAttribute("src",s.getAttribute("src").replace("&autoplay","&noplay"))}var c;if(e.core.s.dynamic){c=e.core.s.dynamicEl[o.detail.index].src}else{c=e.core.items[o.detail.index].getAttribute("href")||e.core.items[o.detail.index].getAttribute("data-src")}var n=e.core.isVideo(c,o.detail.index)||{};if(n.youtube||n.vimeo||n.dailymotion||n.vk){utils.addClass(e.core.outer,"lg-hide-download")}});utils.on(e.core.el,"onAfterSlide.lgtm",function(o){utils.removeClass(e.core.___slide[o.detail.prevIndex],"lg-video-playing")})};i.prototype.loadVideo=function(e,o,i,r,t){var l="";var s=1;var a="";var d=this.core.isVideo(e,r)||{};if(i){if(this.videoLoaded){s=0}else{s=1}}if(d.youtube){a="?wmode=opaque&autoplay="+s+"&enablejsapi=1";if(this.core.s.youtubePlayerParams){a=a+"&"+utils.param(this.core.s.youtubePlayerParams)}l='<iframe class="lg-video-object lg-youtube '+o+'" width="560" height="315" src="//www.youtube.com/embed/'+d.youtube[1]+a+'" frameborder="0" allowfullscreen></iframe>'}else if(d.vimeo){a="?autoplay="+s+"&api=1";if(this.core.s.vimeoPlayerParams){a=a+"&"+utils.param(this.core.s.vimeoPlayerParams)}l='<iframe class="lg-video-object lg-vimeo '+o+'" width="560" height="315"  src="//player.vimeo.com/video/'+d.vimeo[1]+a+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'}else if(d.dailymotion){a="?wmode=opaque&autoplay="+s+"&api=postMessage";if(this.core.s.dailymotionPlayerParams){a=a+"&"+utils.param(this.core.s.dailymotionPlayerParams)}l='<iframe class="lg-video-object lg-dailymotion '+o+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+d.dailymotion[1]+a+'" frameborder="0" allowfullscreen></iframe>'}else if(d.html5){var c=t.substring(0,1);if(c==="."||c==="#"){t=document.querySelector(t).innerHTML}l=t}else if(d.vk){a="&autoplay="+s;if(this.core.s.vkPlayerParams){a=a+"&"+utils.param(this.core.s.vkPlayerParams)}l='<iframe class="lg-video-object lg-vk '+o+'" width="560" height="315" src="http://vk.com/video_ext.php?'+d.vk[1]+a+'" frameborder="0" allowfullscreen></iframe>'}return l};i.prototype.destroy=function(){this.videoLoaded=false};window.lgModules.video=i})},{}]},{},[1])(1)});
//rebuild by neat 
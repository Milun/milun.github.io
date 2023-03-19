!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(o){"use strict";Number.isNaN=Number.isNaN||function(t){return"number"==typeof t&&t!=t};var t,r="rangeslider",h=0,a=((t=document.createElement("input")).setAttribute("type","range"),"text"!==t.type),l={polyfill:!0,orientation:"horizontal",rangeClass:"rangeslider",disabledClass:"rangeslider--disabled",activeClass:"rangeslider--active",horizontalClass:"rangeslider--horizontal",verticalClass:"rangeslider--vertical",dirRTLClass:"rangeslider__rtl",dirTTBClass:"rangeslider__ttb",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"]},d={orientation:{horizontal:{dimension:"width",direction:{ltr:"left",rtl:"right"},directionStyle:{ltr:"left",rtl:"right"},coordinate:"x"},vertical:{dimension:"height",direction:{btt:"top",ttb:"bottom"},directionStyle:{btt:"bottom",ttb:"top"},coordinate:"y"}}};function e(t,i){var e=function(t){for(var i,e=[],n=t.parentNode;(i=n)&&(0===i.offsetWidth||0===i.offsetHeight||!1===i.open);)e.push(n),n=n.parentNode;return e}(t),n=e.length,s=[],o=t[i];function r(t){void 0!==t.open&&(t.open=!t.open)}if(n){for(var h=0;h<n;h++)s[h]=e[h].style.cssText,e[h].style.setProperty?e[h].style.setProperty("display","block","important"):e[h].style.cssText+=";display: block !important",e[h].style.height="0",e[h].style.overflow="hidden",e[h].style.visibility="hidden",r(e[h]);for(var o=t[i],a=0;a<n;a++)e[a].style.cssText=s[a],r(e[a])}return o}function n(t,i){t=parseFloat(t);return Number.isNaN(t)?i:t}function s(t){return t.charAt(0).toUpperCase()+t.substr(1)}function u(t,i){if(this.$window=o(window),this.$document=o(document),this.$element=o(t),this.options=o.extend({},l,i),this.polyfill=this.options.polyfill,this.orientation=this.$element[0].getAttribute("data-orientation")||this.options.orientation,this.dir=(t=this.$element,i=this.orientation,t=t[0].getAttribute("data-direction")||("vertical"===i?"btt":"ltr"),d.orientation[i].direction[t]?t:"vertical"===i?"btt":"ltr"),this.onInit=this.options.onInit,this.onSlide=this.options.onSlide,this.onSlideEnd=this.options.onSlideEnd,this.DIMENSION=d.orientation[this.orientation].dimension,this.DIRECTION=d.orientation[this.orientation].direction[this.dir],this.DIRECTION_STYLE=d.orientation[this.orientation].directionStyle[this.dir],this.COORDINATE=d.orientation[this.orientation].coordinate,this.polyfill&&a)return!1;this.identifier="js-"+r+"-"+h++,this.startEvent=this.options.startEvent.join("."+this.identifier+" ")+"."+this.identifier,this.moveEvent=this.options.moveEvent.join("."+this.identifier+" ")+"."+this.identifier,this.endEvent=this.options.endEvent.join("."+this.identifier+" ")+"."+this.identifier,this.toFixed=(this.step+"").replace(".","").length-1,this.$fill=o('<div class="'+this.options.fillClass+" "+("ttb"===this.dir&&"vertical"===this.orientation?this.options.dirTTBClass:"")+'" />'),this.$handle=o('<div class="'+this.options.handleClass+'" />'),this.$range=o('<div class="'+this.options.rangeClass+" "+("rtl"===this.dir&&"horizontal"===this.orientation?this.options.dirRTLClass:"")+" "+this.options[this.orientation+"Class"]+'" id="'+this.identifier+'" />').insertAfter(this.$element).prepend(this.$fill,this.$handle),this.$element.css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",opacity:"0"}),this.handleDown=o.proxy(this.handleDown,this),this.handleMove=o.proxy(this.handleMove,this),this.handleEnd=o.proxy(this.handleEnd,this),this.init();var e,n,s=this;this.$window.on("resize."+this.identifier,(e=function(){!function(t,i){var e=Array.prototype.slice.call(arguments,2);setTimeout(function(){return t.apply(null,e)},i)}(function(){s.update(!1,!1)},300)},n=(n=20)||100,function(){var t;return e.debouncing||(t=Array.prototype.slice.apply(arguments),e.lastReturnVal=e.apply(window,t),e.debouncing=!0),clearTimeout(e.debounceTimeout),e.debounceTimeout=setTimeout(function(){e.debouncing=!1},n),e.lastReturnVal})),this.$document.on(this.startEvent,"#"+this.identifier+":not(."+this.options.disabledClass+")",this.handleDown),this.$element.on("change."+this.identifier,function(t,i){i&&i.origin===s.identifier||(t=t.target.value,t=s.getPositionFromValue(t),s.setPosition(t))})}return u.prototype.init=function(){this.update(!0,!1),this.onInit&&"function"==typeof this.onInit&&this.onInit()},u.prototype.update=function(t,i){(t=t||!1)&&(this.min=n(this.$element[0].getAttribute("min"),0),this.max=n(this.$element[0].getAttribute("max"),100),this.value=n(this.$element[0].value,Math.round(this.min+(this.max-this.min)/2)),this.step=n(this.$element[0].getAttribute("step"),1)),this.handleDimension=e(this.$handle[0],"offset"+s(this.DIMENSION)),this.rangeDimension=e(this.$range[0],"offset"+s(this.DIMENSION)),this.maxHandlePos=this.rangeDimension-this.handleDimension,this.grabPos=this.handleDimension/2,this.position=this.getPositionFromValue(this.value),this.$element[0].disabled?this.$range.addClass(this.options.disabledClass):this.$range.removeClass(this.options.disabledClass),this.setPosition(this.position,i)},u.prototype.handleDown=function(t){var i,e;t.preventDefault(),this.$document.on(this.moveEvent,this.handleMove),this.$document.on(this.endEvent,this.handleEnd),this.$range.addClass(this.options.activeClass),-1<(" "+t.target.className+" ").replace(/[\n\t]/g," ").indexOf(this.options.handleClass)||(i=this.getRelativePosition(t),e=this.$range[0].getBoundingClientRect()[this.DIRECTION],t=this.getPositionFromNode(this.$handle[0])-e,e="vertical"===this.orientation?this.maxHandlePos-(i-this.grabPos):i-this.grabPos,this.setPosition(e),t<=i&&i<t+this.handleDimension&&(this.grabPos=i-t))},u.prototype.handleMove=function(t){t.preventDefault();t=this.getRelativePosition(t),t="vertical"===this.orientation?this.maxHandlePos-(t-this.grabPos):t-this.grabPos;this.setPosition(t)},u.prototype.handleEnd=function(t){t.preventDefault(),this.$document.off(this.moveEvent,this.handleMove),this.$document.off(this.endEvent,this.handleEnd),this.$range.removeClass(this.options.activeClass),this.$element.trigger("change",{origin:this.identifier}),this.onSlideEnd&&"function"==typeof this.onSlideEnd&&this.onSlideEnd(this.position,this.value)},u.prototype.cap=function(t,i,e){return t<i?i:e<t?e:t},u.prototype.setPosition=function(t,i){var e;void 0===i&&(i=!0),e=this.getValueFromPosition(this.cap(t,0,this.maxHandlePos)),t=this.getPositionFromValue(e),this.$fill[0].style[this.DIMENSION]=e==this.max?"100%":t+this.grabPos+"px",this.$handle[0].style[this.DIRECTION_STYLE]=t+"px",this.setValue(e),this.position=t,this.value=e,i&&this.onSlide&&"function"==typeof this.onSlide&&this.onSlide(t,e)},u.prototype.getPositionFromNode=function(t){for(var i=0;null!==t;)i+=t.offsetLeft,t=t.offsetParent;return i},u.prototype.getRelativePosition=function(t){var i=s(this.COORDINATE),e=this.$range[0].getBoundingClientRect()[this.DIRECTION],n=0;return void 0!==t.originalEvent["client"+i]?n=t.originalEvent["client"+i]:t.originalEvent.touches&&t.originalEvent.touches[0]&&void 0!==t.originalEvent.touches[0]["client"+i]?n=t.originalEvent.touches[0]["client"+i]:t.currentPoint&&void 0!==t.currentPoint[this.COORDINATE]&&(n=t.currentPoint[this.COORDINATE]),"rtl"===this.dir||"ttb"===this.dir?e-n:n-e},u.prototype.getPositionFromValue=function(t){t=(t-this.min)/(this.max-this.min);return Number.isNaN(t)?0:t*this.maxHandlePos},u.prototype.getValueFromPosition=function(t){var t=t/(this.maxHandlePos||1),t=this.step*Math.round(t*(this.max-this.min)/this.step)+this.min;return Number(t.toFixed(this.toFixed))},u.prototype.setValue=function(t){t===this.value&&""!==this.$element[0].value||this.$element.val(t).trigger("input",{origin:this.identifier})},u.prototype.destroy=function(){this.$document.off("."+this.identifier),this.$window.off("."+this.identifier),this.$element.off("."+this.identifier).removeAttr("style").removeData("plugin_"+r),this.$range&&this.$range.length&&this.$range[0].parentNode.removeChild(this.$range[0])},o.fn[r]=function(e){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var t=o(this),i=t.data("plugin_"+r);i||t.data("plugin_"+r,i=new u(this,e)),"string"==typeof e&&i[e].apply(i,n)})},"rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"});
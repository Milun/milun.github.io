"undefined"==typeof Worker||"undefined"!=typeof location&&"file:"===location.protocol?"undefined"!=typeof global&&"undefined"!=typeof require?this.LZMAFactory=function(n){return require(n||"./lzma_worker.js").LZMA}:"undefined"!=typeof window&&window.document?function(){function e(n){var t;return o(n),t={compress:function(n,o,e,r){a.LZMA_WORKER?a.LZMA_WORKER.compress(n,o,e,r):setTimeout(function(){t.compress(n,o,e,r)},50)},decompress:function(n,o,e){a.LZMA_WORKER?a.LZMA_WORKER.decompress(n,o,e):setTimeout(function(){t.decompress(n,o,e)},50)},worker:function(){return null}}}var a,r=this,o=function(n){var o=document.createElement("script");o.type="text/javascript",o.src=n,o.onload=function(){r.LZMAFactory=e},document.getElementsByTagName("head")[0].appendChild(o)};"undefined"!=typeof window?a=window:global&&(a=global),r.LZMA=e}():console.error("Can't load the worker. Sorry."):this.LZMAFactory=function(n){var i={},c=new Worker(n||"./lzma_worker-min.js");return c.onmessage=function(n){3===n.data.action?i[n.data.cbn]&&"function"==typeof i[n.data.cbn].on_progress&&i[n.data.cbn].on_progress(n.data.result):i[n.data.cbn]&&"function"==typeof i[n.data.cbn].on_finish&&(i[n.data.cbn].on_finish(n.data.result,n.data.error),delete i[n.data.cbn])},c.onerror=function(n){var o,e=Error(n.message+" ("+n.filename+":"+n.lineno+")");for(o in i)i[o].on_finish(null,e);console.error("Uncaught error in lzma_worker",e)},{compress:function(n,o,e,r){t(1,n,o,e,r)},decompress:function(n,o,e){t(2,n,!1,o,e)},worker:function(){return c}};function t(n,o,e,r,t){for(var a;a=Math.floor(1e7*Math.random()),void 0!==i[a];);i[a]={on_finish:r,on_progress:t},c.postMessage({action:n,cbn:a,data:o,mode:e})}};
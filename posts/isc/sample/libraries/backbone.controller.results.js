define("backbone.controller.results",["underscore.results","backbone.controller"],function(e,t){t=[t.View,t.Model,t.Collection,t.Controller];function r(){var t=Array.prototype.slice.call(arguments,0);return t.unshift(this.prototype),e.resultExtend.apply(this,t)}function n(){var t=Array.prototype.slice.call(arguments,0);return t.unshift(this),e.resultExtend.apply(this,t)}e.each(t,function(t){t.resultExtend=r,t.prototype.resultExtend=n})});
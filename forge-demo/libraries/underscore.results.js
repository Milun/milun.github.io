define("underscore.results",["underscore"],(function(_){_.mixin({resultExtend:function(instance,propertyName,withData,context){var result;var attrValue=instance[propertyName];if(typeof attrValue==="function"){result=attrValue.call(context||instance,propertyName)}else{result=_.result(instance,propertyName)}var resultType=result instanceof Array?"array":typeof result;if(!withData){switch(resultType){case"array":return result.slice(0);case"object":return _.extend({},result);default:throw"Incorrect types in resultExtend"}}var withType=withData instanceof Array?"array":typeof withData;if(!result){switch(withType){case"array":result=[];resultType="array";break;case"object":result={};resultType="object";break;default:throw"Incorrect types in resultExtend"}}if(resultType!==withType){throw"Incorrect types in resultExtend"}switch(resultType){case"array":return result.slice(0).concat(withData);case"object":return _.extend({},result,withData)}throw"Incorrect types in resultExtend"}});return _}));
// Module pattern

var myModule = function (params) {
	// información privada del módulo
	var moduleVar = params.moduleVar;
	
	// información pública del módulo
	return {
		getVar : function () {
			return moduleVar;
		},
		setVar : function (params) {
			moduleVar = params.moduleVar;
		}
	};
};

var myVar = myModule({'moduleVar': 'foobar'});
console.log(myVar.getVar());
myVar.setVar({'moduleVar': 'foobar2'});
console.log(myVar.getVar());
console.log(myVar);

// Revealing Module pattern

var myRevealingModule = (function (params) {
	// información privada del módulo
	var moduleVar = params.moduleVar;
	
	// información pública del módulo
	return {
		getVar : function () {
			return moduleVar;
		},
		setVar : function (params) {
			moduleVar = params.moduleVar;
		}
	};
})({'moduleVar' : 'foo bar revealingModule'});

console.log(myRevealingModule.getVar());
console.log(myRevealingModule);


// Definir una clase
var myClass = function(params) {

  this.id = params.id || 'Undefined';
  this.name = params.name || 'Undefined'
  
  this.getId = function() {
    return this.id;
  }
  this.getName = function() {
    return this.name;
  }
  this.printNice = function() {
    console.log('Id:' + this.id);
    console.log('Name:' + this.name);
  }
  return this;
};

var myObject1 = new myClass({'id':'1234', 'name':'Obj 1234'});
myObject1.printNice();
console.log(myObject1.getName());
var myObject2 = new myClass({'id':'5678', 'name':'Obj 5678'});
myObject2.printNice();
console.log(myObject2.getName());

// Modificamos atributos definidos del prototipo
myClass.prototype.name = "FOO";

console.log(myObject1.getName());
console.log(myObject2.getName());
// Aquí se guardan los atributos "sobrescritos"
console.log(myObject1.__proto__.name);


// Definimos una clase que hereda de la anterior

var myExtendedClass = function(params) {
  this.newAttr = params.newAttr || 'Undefined';
  this.getNewAttr = function () {
    return this.newAttr;
  };
  // Herencia
  myClass.call(this, params);
};

myExtendedObject = new myExtendedClass({'id':'1111', 'name':'Obj 1111', 'newAttr':'foobar'});
myExtendedObject.printNice();
console.log(myExtendedObject.getNewAttr());

// Definir clases en ES6

(function() {
	'use strict';
	class myClassEC6 {
		constructor (params) {
			this.name = params.name || 'Undefined';
			this.id = params.id || 'Undefined';
		}
		getId() {
			return this.id;
		}
	};
	
	var myObjectES6 = new myClassEC6({'name': 'foobar', 'id':'blablebli'});
	console.log(myObjectES6.getId());
})();


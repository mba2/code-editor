// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
if (module.hot) {
	module.hot.accept();
}

import "knockout";

let initialCats = [
	{
		clickCount : 0,
		name : ("Kitty"),
		imgSrc : ('src/img/main.png'),
		imgAttr : 'Testing 01',
		nickNames : ['Jesse', 'Skarlet', 'Pinkman' ]
	},
	{
		clickCount : 0,
		name : ("Kitty 2"),
		imgSrc : ('src/img/webpack.svg'),
		imgAttr : 'Testing 03',
		nickNames : ['Gustavo', 'Frings', 'Los Poyos Hermanos' ]
	},
	{
		clickCount : 0,
		name : ("Kitty 3"),
		imgSrc : ('src/img/angular.png'),
		imgAttr : 'Testing 03',
		nickNames : ['DEA', 'Hank', 'Rocks' ]
	}
];

let Cat = function(data) {
	let self = this;

	self.clickCount = ko.observable(data.clickCount);
	self.name = ko.observable(data.name);
	self.imgSrc = ko.observable(data.imgSrc);
	self.imgAttr = ko.observable(data.imgAttr);
	self.nickNames = ko.observable(data.nickNames);

	self.level = ko.computed(function() {
		let level,
			clicks = self.clickCount();

		if(clicks < 10) level = 'infant';
		else if(clicks < 20) level = 'child';
		else if(clicks < 30) level = 'anoying';
		else if(clicks < 40) level = 'teen';
		else level = 'Adult';	

		return level;
	});
};

let ViewModel = function() {
	let self = this;
	self.catList = ko.observableArray([]);

	initialCats.forEach(function(currentCat) {
		self.catList.push( new Cat( currentCat ) );
	});
	
	this.currentCat = ko.observable( self.catList()[0] );
	
	this.incrementCounter = function() {
		self.currentCat().clickCount( self.currentCat().clickCount() + 1 );
	};

	this.changeCat = function() {
		self.currentCat(this);
	};
};


window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	console.log("I'm the one who knocks!!!");

	ko.applyBindings(new ViewModel());

});
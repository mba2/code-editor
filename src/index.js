// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
if (module.hot) {
	module.hot.accept();
}

import "knockout";



window.addEventListener('DOMContentLoaded', () => {
	console.log("I'm the one who knocks!");

	let ViewModel = function(){
		this.clickCount = ko.observable(0);
		this.name = ko.observable("Kitty");
		this.imgSrc = ko.observable('src/img/main.png');
		this.imgAttr = ko.observable('Testing');
		
		this.incrementeCounter = function() {
			this.clickCount(this.clickCount() + 1);
		};
	};




	ko.applyBindings(new ViewModel());

});
// VIEWS
export const v_auth_box = {
	cacheElements : function() {
		this.authBox = document.querySelector(".auth-box");
		this.authBoxCloseBtn = document.querySelector(".auth-box .btn--close");
	},
	bindView : () => controller.views.push(this)

};
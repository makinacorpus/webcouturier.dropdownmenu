window.jQuery&&define("jquery",[],function(){return window.jQuery}),require(["jquery"],function(n){"use strict";jQuery(function(n){n("#portal-globalnav .noClick").click(function(n){n.preventDefault()});var e="menu-open";n("ul.nav li.dropdown .opener").click(function(o){o.preventDefault(),n(this).toggleClass(e),n(this).parent().next(".dropdown-menu").toggleClass(e),n(this).parents("li").siblings().each(function(){n(this).find("."+e).each(function(){n(this).toggleClass(e)})})})})}),define("/Users/mhilbert/Sandbox/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/dropdown.js",function(){});
//# sourceMappingURL=dropdownmenu-compiled.js.map
jQuery(document).ready(function(){

// Einstellungen des Dropdowns
var config = {    
     sensitivity: 3, // number = sensitivity threshold (must be 1 or higher)    
     interval: 100, // number = milliseconds for onMouseOver polling interval    
     over: fadeInSubMenu, // function = onMouseOver callback (REQUIRED)    
     timeout: 300, // number = milliseconds delay before onMouseOut    
     out: fadeOutSubMenu // function = onMouseOut callback (REQUIRED)    
};

jQuery(".mainnav").hoverIntent(config)

});

// Blende Unternavigation ein
function fadeInSubMenu(){  

	var that = jQuery(this);
	that.children(".sub_menu").fadeIn('fast');
		
}

// Blende Unternavigation aus
function fadeOutSubMenu(){ 

	var that = jQuery(this);
	that.children(".sub_menu").fadeOut('fast');
}
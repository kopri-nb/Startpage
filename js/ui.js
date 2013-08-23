// postition won't work correctly if you
// use a custom userChrome.css that modifies
// the browsers default content display.
// UI mods should not affect it.
$(document).ready(function() {
	$( "#container" ).draggable().position({
	my: "center",
	at: "center",
	of: window
	});
});

// Need to update this to reposition on window resize !!
// Might not be needed, as its going to be dragged anyway.

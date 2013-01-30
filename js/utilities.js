
function adjustContentSection() {
    return false;
	/* Some orientation changes leave the scroll position at something
     * that isn't 0,0. This is annoying for user experience. */
    scroll(0, 0);

    /* Calculate the geometry that our content area should take */
    var header = $('div[data-role="header"]:visible'), headerHeight = 0,
    footer = $('div[data-role="footer"]:visible') || 0,
    content = $('div[data-role="content"]:visible');
    
    /* Adds height of multiple header*/
    for(i=0; i<header.length; i++){
	 	headerHeight += $(header[i]).outerHeight();
	}

    var viewport_height = $(window).height();
    
    var content_height = viewport_height - headerHeight - footer.outerHeight();
    
    /* Trim margin/border/padding height */
    content_height -= (content.outerHeight() - content.height());
    
    content.height(content_height);
  }; /* fixgeometry */
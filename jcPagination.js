var jcPagination = function(option) {

	// set value
	item = option.item; // pagination item class
	navigation = option.navigation; // pagination navigation id
	perPage = option.perPage; // how many items to display per page
	// optional
	// defaults
	navigation_pane = (option.navigation_pane!=null)?option.navigation_pane:'pagenav'; // pagination inner wrapper id
	navigation_links = (option.navigation_links!=null)?option.navigation_links:'jnav_id'; // pagination links id
	prev = (option.prev!=null)?option.prev:'jprev'; // prev arrow id
	next = (option.next!=null)?option.next:'jnext'; // next arrow id
	navigation_pane_width = (option.navigation_pane_width!=null)?option.navigation_pane_width:80; // pagination navigation width
	sprev = (option.sprev!=null)?option.sprev:4000; // previous scroll speed in milliseconds
	snext = (option.snext!=null)?option.snext:4000; // next scroll speed in milliseconds
	
	// pagination script
	// hides all item on 1st load		
	jQuery("."+item+"").hide();	
	// show 1st 10
	var i;
	for(i=0;i<perPage;i++){
		jQuery("."+item+"").eq(i).fadeIn();
	}

	// get pagination number
	var jlen = jQuery("."+item+"").length;
	var jlen2 = Math.ceil(jlen/perPage);

	// create pagination mark-up
	var str="";
	for(x=1;x<=jlen2;x++){
		str += "<a href=\"javascript:void(0);\" style=\"margin: 0 3px;\" id='"+navigation_links+""+x+"'>"+x+"</a>";
	}
			
	if(jlen2!=1){
		// generate pagination to page
		jQuery("#"+navigation+"").html("<a id=\""+prev+"\" style=\"float: left;\" href=\"javascript:void(0);\">&lt;</a><div id=\""+navigation_pane+"\" style=\"float:left;margin: 0 9px;\">"+str+"</div><a id=\""+next+"\" href=\"javascript:void(0);\">&gt;</a>");			
	}
			
	// when pagination number are clicked
	jQuery("#"+navigation_pane+" a").click(function(){	
		// highlight current page number
		jQuery("#"+navigation_pane+" a").css("font-weight","normal");
		jQuery(this).css("font-weight","bold");

		// set back to default state which is hidden
		jQuery("."+item+"").hide();
						
		// pagination number
		var jnav = jQuery(this).html();
		var jnavint = parseInt(jnav);
		var end = jnavint*perPage;
		var start = end-perPage;
						
		// mark last item in the current page - global variable
		nav = end;				
						
		// loop through items
		var i = 1;
		jQuery("."+item+"").each(function(){						
			if(i>=start+1 && i<=end){
				jQuery(this).fadeIn();
			}
			i++;
		});			
	});
			
	// when the next navigation is clicked
	// set default 
	nav = perPage;
	jQuery("#"+next+"").click(function(){									
		// avoid exceeding maximum number
		if(nav<(jlen2*perPage)){						
			var end = nav + perPage;
			var start = end - perPage;	
			
			// set back to default state which is hidden
			jQuery("."+item+"").hide();	
			
			// loop through items
			var i = 1;
			jQuery("."+item+"").each(function(){							
				if(i>=start+1 && i<=end){
					jQuery(this).fadeIn();
				}
				i++;
			});
								
			// highlight current page number
			jQuery("#"+navigation_pane+" a").css("font-weight","normal");
			jQuery("#"+navigation_links+""+(end/perPage)).css("font-weight","bold");
											
			// increment by page numer
			nav = nav + perPage;						
		}		
	});
			
	// when the previous navigation is clicked
	jQuery("#"+prev+"").click(function(){		
			
		// avoid browsing to previous of 1st page
		if(nav>perPage){						
			var end = nav - perPage;
			var start = end - perPage;
								
			// set back to default state which is hidden
			jQuery("."+item+"").hide();
														
			// loop through items
			var i = 1;
			jQuery("."+item+"").each(function(){					
				if(i>=start+1 && i<=end){
					jQuery(this).fadeIn();
				}
				i++;
			});
												
			// highlight current page number
			jQuery("#"+navigation_pane+" a").css("font-weight","normal");
			jQuery("#"+navigation_links+""+(end/perPage)).css("font-weight","bold");
								
			// decrement by page number
			nav = nav - perPage;						
		}		
	});	
	
	// navigation link script
	// get navigation width
	var width = jQuery("#"+navigation_pane+"").width();
	// hides overlapping links
	if(width>navigation_pane_width){
		jQuery("#"+navigation_pane+"").css("width",navigation_pane_width+"px");
		jQuery("#"+navigation_pane+"").css("overflow","hidden");
	}

	// get scroll height
	var scrollWidth = jQuery("#"+navigation_pane+"").prop("scrollWidth");
		
	// hover up
	jQuery("#"+next+"").hover(function() {  
		jQuery("#"+navigation_pane+"").animate( { scrollLeft : scrollWidth }  , sprev );
	}, function() {
		jQuery("#"+navigation_pane+"").stop();
	} );
	
	//hover down	
	jQuery("#"+prev+"").hover(function() {  
		jQuery("#"+navigation_pane+"").animate( { scrollLeft : 0 } , snext );
	}, function() {
		jQuery("#"+navigation_pane+"").stop();
	} ); 
	
};
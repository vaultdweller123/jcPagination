var jcPagination = function(option) {
		// set value
		container = option.container;
		page = option.page;
		pagination = option.pagination;
		
		// hides all item on 1st load		
		jQuery("."+container+"").hide();	
		// show 1st 10
		var i;
		for(i=0;i<page;i++){
			jQuery("."+container+"").eq(i).fadeIn();
		}

		// get pagination number
		var jlen = jQuery("."+container+"").length;
		var jlen2 = Math.ceil(jlen/page);

		// create pagination mark-up
		var str="";
		for(x=1;x<=jlen2;x++){
			str += "<a href=\"javascript:void(0);\" style=\"margin: 0 3px;\" id='jnav_id"+x+"'>"+x+"</a>";
		}
				
		if(jlen2!=1){
			// generate pagination to page
			jQuery("#"+pagination+"").html("<a id=\"jprev\" style=\"float: left;\" href=\"javascript:void(0);\">&lt;</a><div id=\"pagenav\" style=\"float:left;margin: 0 9px;\">"+str+"</div><a id=\"jnext\" href=\"javascript:void(0);\">&gt;</a>");			
		}

				
		// when pagination number are clicked
		jQuery("#pagenav a").click(function(){
				
			// highlight current page number
			jQuery("#pagenav a").css("font-weight","normal");
			jQuery(this).css("font-weight","bold");

			// set back to default state which is hidden
			jQuery("."+container+"").hide();
							
			// pagination number
			var jnav = jQuery(this).html();
			var jnavint = parseInt(jnav);
			var end = jnavint*page;
			var start = end-page;
							
			// mark last item in the current page - global variable
			nav = end;
							
							
			// loop through items
			var i = 1;
			jQuery("."+container+"").each(function(){
							
				if(i>=start+1 && i<=end){
					jQuery(this).fadeIn();
				}
				i++;

			});
						

		});
				
		// when the next navigation is clicked
		// set default 
		nav = page;
		jQuery("#jnext").click(function(){
							
				
			// avoid exceeding maximum number
			if(nav<(jlen2*page)){
							
					
				var end = nav + page;
				var start = end - page;
									
				// set back to default state which is hidden
				jQuery("."+container+"").hide();
									
				// loop through items
				var i = 1;
				jQuery("."+container+"").each(function(){
									
					if(i>=start+1 && i<=end){
						jQuery(this).fadeIn();
					}
					i++;

				});
									
				// highlight current page number
				jQuery("#pagenav a").css("font-weight","normal");
				jQuery("#jnav_id"+(end/page)).css("font-weight","bold");
							
									
									
				// increment by page numer
				nav = nav + page;
							
			}
				
		});
				
		// when the previous navigation is clicked
		jQuery("#jprev").click(function(){
				
				
			// avoid browsing to previous of 1st page
			if(nav>page){
							
				
				var end = nav - page;
				var start = end - page;
									
				// set back to default state which is hidden
				jQuery("."+container+"").hide();
									
									
				// loop through items
				var i = 1;
				jQuery("."+container+"").each(function(){
									
					if(i>=start+1 && i<=end){
						jQuery(this).fadeIn();
					}
					i++;

				});
									
									
									
				// highlight current page number
				jQuery("#pagenav a").css("font-weight","normal");
				jQuery("#jnav_id"+(end/page)).css("font-weight","bold");
									
				// decrement by page number
				nav = nav - page;
							
			}
				
		});
		

		
			id = option.id;
			pageNavWidth = option.pageNavWidth;
			prev = option.prev;
			next = option.next;
			spup = option.spup;
			spdown = option.spdown;
			
		

		var width = jQuery("#"+id+"").width();
		//console.log(width);
		if(width>pageNavWidth){
			console.log('wee');
			jQuery("#"+id+"").css("width",pageNavWidth+"px");
			jQuery("#"+id+"").css("overflow","hidden");
		}

		// get scroll height
		var scrollWidth = jQuery("#"+id+"").prop("scrollWidth");
			
		// hover up
		jQuery("#"+next+"").hover(function() {  
			jQuery("#"+id+"").animate( { scrollLeft : scrollWidth }  , spup );
		}, function() {
			jQuery("#"+id+"").stop();
		} );

		
		//hover down	
		jQuery("#"+prev+"").hover(function() {  
			jQuery("#"+id+"").animate( { scrollLeft : 0 } , spdown );
		}, function() {
			jQuery("#"+id+"").stop();
		} ); 
	};
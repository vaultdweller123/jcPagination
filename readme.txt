[ABOUT]
a simple javascript pagination using jquery
	
[HOW-TO]
include external javascript files:
<script type="text/javascript" src="/javascript/jquery/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/javascript/jcpagination/jcPagination.js"></script>

html mark up:
pagination items:
<div class="mydiv">
html content 1
</div>
<div class="mydiv">
html content 2
</div>
<div class="mydiv">
html content 3
</div>
	
pagination links:
<div id="pagination">&nbsp;</div>
	
function call:
jcPagination({
		'item':'mydiv',
		'navigation':'pagination',
		'perPage':3
	});
			
[EXAMPLE]
<html>
<head>
<title>jcPagination</title>
<script type="text/javascript" src="/javascript/jquery/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/javascript/jcpagination/jcPagination.js"></script>
<script>
jQuery(document).ready(function(){
	jcPagination({
		'item':'mydiv',
		'navigation':'pagination',
		'perPage':3
	});
});
</script>
</head>
<body>
<h1>jcPagination</h1>
<div class="mydiv">
html content 1
</div>
<div class="mydiv">
html content 2
</div>
<div class="mydiv">
html content 3
</div>
<body>
</html>
		


	
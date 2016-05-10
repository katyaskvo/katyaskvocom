---
title: "Converting Famous Verner Panton's pattern into HTML/CSS"
date: 2016-04-06 15:39:49 -0800
image: panton/panton-pink.png
---
Verner Panton is one of my favorite designer and I like his patterns a lot. They are so simple and beautiful. So I thought why not to convert them into HTML/CSS. Fun exercise for myself.

[![Verner Panton's Pink Pattern]({{ site.blog_assets }}/panton/panton-pink.png)](/web-library/panton/pink-theme.html "Verner Panton's Pink Pattern")

[![Verner Panton's Orange Pattern]({{ site.blog_assets }}/panton/panton-orange.png)](/web-library/panton/orange-theme.html "Verner Panton's Orange Pattern")

[![Verner Panton's Multicolor Pattern]({{ site.blog_assets }}/panton/panton-multicolor.png)](/web-library/panton/multicolor-theme.html "Verner Panton's Multicolor Pattern")

[![Verner Panton's Purple Pattern]({{ site.blog_assets }}/panton/panton-purple.png)](/web-library/panton/purple-theme.html "Verner Panton's Purple Pattern")

[![Verner Panton's Blue Pattern]({{ site.blog_assets }}/panton/panton-blue.png)](/web-library/panton/blue-theme.html "Verner Panton's Blue Pattern")

I started by writing HTML first. Here's a smallest unit of the pattern:

```
<div class="pattern-unit">
	<div class="top">
		<div class="core"></div>
	</div>
	<div class="bottom">
		<div class="core"></div>
	</div>
</div>
```

Continued with Sass. I created a mixin which takes care of colors:

```
@mixin unit-colors($unit, $color1, $color2, $color3, $color4, $color5, $color6, $color7, $color8) {
	.top {
		.core {
			bottom: 0;
			right: 0;
			box-shadow:
				0 0 0 $unit $color8,
				0 0 0 $unit*2 $color7,
				0 0 0 $unit*3 $color6,
				0 0 0 $unit*4 $color5,
				0 0 0 $unit*5 $color4,
				0 0 0 $unit*6 $color3,
				0 0 0 $unit*7 $color2,
				0 0 0 $unit*8 $color1;
				border-radius: 100% 0 0 0;
		}
	}
	.bottom {
		.core {
			top: 0;
			left: 0;
			box-shadow:
				0 0 0 $unit $color1,
				0 0 0 $unit*2 $color2,
				0 0 0 $unit*3 $color3,
				0 0 0 $unit*4 $color4,
				0 0 0 $unit*5 $color5,
				0 0 0 $unit*6 $color6,
				0 0 0 $unit*7 $color7,
				0 0 0 $unit*8 $color8;
				border-radius: 0 0 100% 0;
		}
	}
	&:nth-of-type(2n + 2) {
		.top {
			.core {
				bottom: 0;
				left: 0;
				box-shadow:
					0 0 0 $unit $color8,
					0 0 0 $unit*2 $color7,
					0 0 0 $unit*3 $color6,
					0 0 0 $unit*4 $color5,
					0 0 0 $unit*5 $color4,
					0 0 0 $unit*6 $color3,
					0 0 0 $unit*7 $color2,
					0 0 0 $unit*8 $color1;
					border-radius: 0 100% 0 0;
			}
		}
		.bottom {
			.core {
				top: 0;
				right: 0;
				left: auto !important;
				box-shadow:
					0 0 0 $unit $color1,
					0 0 0 $unit*2 $color2,
					0 0 0 $unit*3 $color3,
					0 0 0 $unit*4 $color4,
					0 0 0 $unit*5 $color5,
					0 0 0 $unit*6 $color6,
					0 0 0 $unit*7 $color7,
					0 0 0 $unit*8 $color8;
					border-radius: 0 0 0 100%;
			}
		}
	}
}
```

Added general styling:

```
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html, body {
	height: 100%;
	position: relative;
}
body {
	min-height: 100%;
	width: 100%;
	overflow: hidden;
}
.pattern-unit {
	float: left;
	 > div {
		display: block;
		height: $unit * 9;
		width: $unit * 10;
		overflow: hidden;
		position: relative;
	}
	.core {
		position: absolute;
		height: $unit;
		width: $unit;
	}
}
```

Created html pages with a class in the <body>, which indicates the color theme and added color styles:

```
<!doctype html>
<html>
	<head>
		<meta charset="utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link rel="stylesheet" href="css/panton.css">
		<title>Verner Panton Pattern</title>
	</head>
	<body class="orange-theme">
		<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>		
		<script src="js/script.js"></script>
	</body>
</html>
```

```
.orange-theme {
	$background-color: #fe8f1c;
	$color1: #ba5c40;
	$color2: #c95c35;
	$color3: #e26628;
	$color4: #ee7421;
	$color5: #f98413;
	$color6: #ff9115;
	$color7: #feac02;
	$color8: #ffba02;

	background-color: $background-color;

	.pattern-unit{
	
		@include unit-colors($unit, $color1, $color2, $color3, $color4, $color5, $color6, $color7, $color8);
	}
}
```

I use a javascript to insert the right number of units into the html depending on window size.

```
const PATTERN_HTML = '<div class="pattern-unit"><div class="top"><div class="core"></div></div><div class="bottom"><div class="core"></div></div></div>';
const PATTERN_UNIT = PATTERN_HTML + PATTERN_HTML;
const LINE_WIDTH = 15;
const PATTERN_UNIT_WIDTH = LINE_WIDTH * 10 * 2;
const PATTERN_UNIT_HEIGHT = LINE_WIDTH * 9 * 2;

var bodyWidth = 0;
var height = $(document).height();
var patternRepeatition = 0;
var width = $(document).width();	
var unitsInRow = Math.round(width / PATTERN_UNIT_WIDTH) + 1;
var numberOfRows = Math.round(height / PATTERN_UNIT_HEIGHT) + 1;
var numberOfUnits = 0;

function init() {
	bodyWidth = unitsInRow * PATTERN_UNIT_WIDTH;	
	$("body").css({
		"width":bodyWidth
	});
	
	numberOfUnits = unitsInRow * numberOfRows;
	
	for (i = 0; i < numberOfUnits; i++){
		$('body').append(PATTERN_UNIT);
	}
}
init();
```

[Demo Pink Theme]({{ site.base_url }}/web-library/panton/pink-theme.html)  
[Demo Orange Theme]({{ site.base_url }}/web-library/panton/orange-theme.html)  
[Demo Multicolor Theme]({{ site.base_url }}/web-library/panton/multicolor-theme.html)  
[Demo Purple Theme]({{ site.base_url }}/web-library/panton/purple-theme.html)  
[Demo Blue Theme]({{ site.base_url }}/web-library/panton/blue-theme.html)
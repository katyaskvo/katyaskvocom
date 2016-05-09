---
title: "CSS substring matching attribute selectors"
date: 2015-06-02 15:39:49 -0800
image: list-of-links.png
---

CSS substring matching attribute selectors are very powerful and have an excellent browser support (ie7+), but not that commonly used. Here’s an example which shows how great they are. In the HTML there’s no classes or ids are used, just clean and simple markup.

#### HTML:

```
<li><a href="/">Internal link</a></li>
<li><a href="file.pdf">Link to pdf file</a></li>
<li><a href="archive.zip">Link to zip archive</a></li>
<li><a href="http://kotikey.com">External link</a></li>
<li><a href="mailto:katyaskvo@gmail.com">@mailto link</a></li>
```

With substring matching attribute selectors we can simply target all types of links and get this result (I’m using [fontawesome](http://fontawesome.io/ "fontawesome website") icons in this example):
  
[![List of links with icons]({{ site.blog_assets }}/list-of-links.png)](http://katyaskvo.com/web-library/advanced-css-selectors/ "Advanced CSS selectors")

#### Sass with Compass:

```
a[href$=".pdf"] {
	@extend .fa;
	@extend .fa-file-pdf-o;
}
a[href$=".zip"] {
	@extend .fa;
	@extend .fa-file-archive-o;
}
a[href^="http://"] {
	@extend .fa;
	@extend .fa-external-link;
	&.fa:before {
		float: right;
		padding: 2px 0 0 6px;
	}
}
a[href^="mailto:"] {
	padding: 6px 20px;
	background: #1293ba;
	color: white;
	font-size: 14px;
	font-weight: bold;
	@include border-radius(5px);
	&:hover {
		background: coral;
	}
	&:active {
		@include box-shadow(grey 1px 1px 3px);
	}
	@extend .fa;
	@extend .fa-envelope;
	&.fa:before {
		float: right;
		padding: 1px 0 0 6px;
	}
}
```

[demo](http://katyaskvo.com/web-library/advanced-css-selectors/ "Advanced CSS selectors")
 


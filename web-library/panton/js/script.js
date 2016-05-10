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
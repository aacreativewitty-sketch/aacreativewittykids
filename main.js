(function($) {
	"use strict"
	
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	// Mobile Toggle Btn
	$('.navbar-toggle').on('click',function(){
		$('#header').toggleClass('nav-collapse')
	});
	
})(jQuery);
{
  "image_generation": {
    "prompt": "A modification of image_3.png, where the yellow rectangular boxes containing service titles, descriptions, and 'Watch Now' buttons have been replaced by a series of six distinct, visually rich, and kid-friendly video thumbnails arranged in a two-column grid. The overall coral background and 'Our Services' title remain. Each thumbnail image (with rounded corners and subtle white borders similar to image_0.png) is topped by its respective text and button, integrated directly onto the thumbnail image itself.
    
    Top Left Thumbnail (Noorani Qaida): An illustration of a child in a thobe reading from a lit Quran on a rehal. Text (white, Comic Sans style) at the bottom: 'Noorani Qaida', 'Learn Quran at Home'. Below it, the orange 'Watch Now' button.
    Top Right Thumbnail (ABC): An illustration of colorful alphabet blocks (A, B, C) and a smiling cartoon bear. Text: 'ABC', 'Basic Learning'. Orange 'Watch Now' button.
    Middle Left Thumbnail (Math Tables): An illustration of a friendly owl sitting in front of a blackboard with simple multiplication tables (e.g., '2x3=6'). Text: 'Math Tables', 'Math Made Easy'. Orange 'Watch Now' button.
    Middle Right Thumbnail (Poems): An illustration of a jumping child and a book with musical notes flying out. Text: 'Poems', 'Fun Rhymes'. Orange 'Watch Now' button.
    Bottom Left Thumbnail (Swimming): An illustration of a happy child in a swimsuit doing a safe kick at the pool's edge. Text: 'Swimming', 'Lessons for Beginners'. Orange 'Watch Now' button.
    Bottom Right Thumbnail (Kids Stories): An illustration of a diverse group of children gathered around a storyteller with a large book. Text: 'Kids Stories', 'Lessons for Beginners'. Orange 'Watch Now' button.
    
    The text on the thumbnails is clear and readable. The original text styles are maintained but integrated onto the new thumbnail backgrounds."
  }
}
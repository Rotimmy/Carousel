// GLOBAL VARIABLES -------

// The images array should hold 6 objects. Refer to the
var images = [
	{
		votes: 0,
		caption: 'Image 1',
		src: 'images/image_1.jpg'
	},
	{
		votes: 0,
		caption: 'Image 2',
		src: 'images/image_2.jpg'
	},
	{
		votes: 0,
		caption: 'Image 3',
		src: 'images/image_3.jpg'
	},
	{
		votes: 0,
		caption: 'Image 4',
		src: 'images/image_4.jpg'
	},
	{
		votes: 0,
		caption: 'Image 5',
		src: 'images/image_5.jpg'
	},
	{
		votes: 0,
		caption: 'Image 6',
		src: 'images/image_6.jpg'
	},

];

// Set a variable for the current position(index) and give it an initial value of 0
var currentIndex = 0;


// EVENTS ---------

// Listen for click events on the next and previous buttons
$('#next').on('click', function () {
	console.log(currentIndex);

	// Update the current position
	if (currentIndex === images.length - 1) {
		currentIndex = 0;
	} else {
		currentIndex += 1;
	}

	// Update the src attribute of the image to the url that's stored within the
	// src property for the object at the currentIndex in the array
	$('#image-to-vote-on').attr('src', images[currentIndex].src);

	// Display the amount of likes for the current image in the #votes element.
	$('#votes').text('Likes: ' + images[currentIndex].votes)

	// Display the caption for the current image in the #caption element.
	$('#caption').text(images[currentIndex].caption);

});

$('#prev').on('click', function () {
	console.log(currentIndex);

	// Update the current position
	if (currentIndex === 0) {
		currentIndex = images.length - 1;
	} else {
		currentIndex -= 1;
	}

	$('#image-to-vote-on').attr('src', images[currentIndex].src);

	// Display the amount of likes for the current image in the #votes element.
	$('#votes').text('Likes: ' + images[currentIndex].votes)

	// Display the caption for the current image in the #caption element.
	$('#caption').text(images[currentIndex].caption);

});

$('#upvote').on('click', function () {
	console.log(images[currentIndex].votes);

	images[currentIndex].votes += 1;
	$('#votes').text('Likes: ' + images[currentIndex].votes)
});

$('#downvote').on('click', function () {
	console.log(images[currentIndex].votes);

	images[currentIndex].votes -= 1;
	$('#votes').text('Likes: ' + images[currentIndex].votes)
});
// Hook up functionality for the #upvote and #downvote buttons.

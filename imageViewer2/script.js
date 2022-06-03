var sizeInput = document.getElementById("sizeInput")
var sizeDisplay = document.getElementById("sizeDisplay")
var root = document.querySelector(':root');



$(function() {
	// Multiple images preview in browser
	var imagesPreview = function(input, placeToInsertImagePreview) {

		if (input.files) {
			var filesAmount = input.files.length;

			for (i = 0; i < filesAmount; i++) {
				var reader = new FileReader();

				reader.onload = function(event) {
					$($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
				}

				reader.readAsDataURL(input.files[i]);
			}
		}

	};

	$('#gallery-photo-add').on('change', function() {
		imagesPreview(this, 'div.gallery');
	});
});
setInterval(() => {
	sizeDisplay.innerText = sizeInput.value + "px"
	var sI = sizeInput.value + "px"
	root.style.setProperty('--sizer', sI)
})
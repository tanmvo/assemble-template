
//============================
// Checkboxes JQuery
//============================

// If checkboxes with class .preference are "checked", #all is equal to "checked"
// If all checkboxes with class .preference are "checked" - add Message In
$('.preference').change(function() {
	if ($('.preference:checked').length == $('.preference').length) {
		$('#all').prop('checked', true);
		$("#message-in").removeClass('message-hide');
		$('label').addClass('optout');
	} else {
		$('#all').prop('checked', false);
		$("#message-in").addClass('message-hide');
		//$('label').removeClass('optout');
	}
	// If any preference is checked - hide message "You are receving all message from Yellow Pages"
	if ($('.preference:checked')) {
		$('#message-out').addClass('message-hide');
	} else {
		$('#message-out').removeClass('message-hide');
	}

	// If all boxes are unchecked, display message "You are receving all message from Yellow Pages"
	if ($('.preference:checked').length == 0) {
		$("#message-out").removeClass('message-hide');
	}
	// If any checkbox is not selected, all should NOT be RED
	if ($('.preference:checked').length !== $('.preference').length) {
		$('#label-all').removeClass('optout');
	}
});

// If #all is checked, then all checkboxes are "checked"
$('#all').on('click', function() {
	$(this).closest('fieldset').find(':checkbox').prop('checked', this.checked);
});

// If #all is checked, hide message "You have opted out from all messages from Yellow Pages®"
// If #all is checked, all boxes are RED
$('#all').on('click', function() {
	$("#message-in").toggleClass('message-hide');
	$('label').toggleClass('optout');
});

$('#all').on('click', function() {
	if ($('#all').prop('checked')) {
		$('#message-out').addClass('message-hide');
		$('label').addClass('optout');
	} else {
		$('#message-out').removeClass('message-hide');
		$('label').removeClass('optout');
	}
});

// Individual preference update

$('#events').change(function() {
	if (this.checked) {
		$('#out').append($('#events-info'));
	} else {
		$('#in').append($('#events-info'));
	}
});

$('#products').change(function() {
	if (this.checked) {
		$('#out').append($('.products-info'));
	} else {
		$('#in').append($('.products-info'));
	}
});

$('#tips').change(function() {
	if (this.checked) {
		$('#out').append($('#tips-info'));
	} else {
		$('#in').append($('#tips-info'));
	}
});

$('#all').change(function() {
	if (this.checked) {
		$('#out').append($('#events-info'));
		$('#out').append($('#tips-info'));
		$('#out').append($('.products-info'));
	} else {
		$('#in').append($('#events-info'));
		$('#in').append($('#tips-info'));
		$('#in').append($('.products-info'));
	}
});


$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $(this).closest('label').addClass("optout");
    } else {
        $(this).closest('label').removeClass("optout");
    }
});

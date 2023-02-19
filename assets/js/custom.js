var myEvents = [{
	name: "New Year",
	date: "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
	type: "holiday",
	everyYear: true
}, {
	name: "Valentine's Day",
	date: "Fri Feb 14 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
	type: "holiday",
	everyYear: true
}, {
	name: "Birthday",
	date: "February/3/2020",
	type: "birthday"
}, {
	name: "Author's Birthday",
	date: "February/15/2020",
	type: "birthday",
	everyYear: true
}, {
	name: "Holiday",
	date: "February/15/2020",
	type: "event"
}, ]
var side_bar = $('#hela_side_nav');
var logger = function() {
	var oldConsoleLog = null;
	var pub = {};
	pub.enableLogger = function enableLogger() {
		if (oldConsoleLog == null) {
			return;
		}
		window['console']['log'] = oldConsoleLog;
	};
	pub.disableLogger = function disableLogger() {
		oldConsoleLog = console.log;
		window['console']['log'] = function() {};
	};
	return pub;
}();
(function($) {
	$.fn.autogrow = function() {
		return this.each(function() {
			var textarea = this;
			$.fn.autogrow.resize(textarea);
			$(textarea).focus(function() {
				textarea.interval = setInterval(function() {
					$.fn.autogrow.resize(textarea);
				}, 500);
			}).blur(function() {
				clearInterval(textarea.interval);
			});
		});
	};
	$.fn.autogrow.resize = function(textarea) {
		var lineHeight = parseInt($(textarea).css('line-height'), 10);
		var lines = textarea.value.split('\n');
		var columns = textarea.cols;
		var lineCount = 0;
		$.each(lines, function() {
			lineCount += Math.ceil(this.length / columns) || 1;
		});
		var height = lineHeight * (lineCount + 1);
		$(textarea).css('height', height);
	};
})(jQuery);
$(document).ready(function() {
	
	var ui_data = JSON.parse(localStorage.getItem('dashbord_ui_data')) || '';
	if (ui_data.SIDE_BAR_CLASS) {
		side_bar.addClass(ui_data.SIDE_BAR_CLASS);
	}
	history.replaceState(null, null, ' ');
	var site_topic = localStorage.getItem('sub_topic');
	var subscribed_topics = JSON.parse(localStorage.getItem('topics')) || []
	for (var z = 0; z < subscribed_topics.length; z++) {
		if (subscribed_topics[z] == site_topic) {
			$('#nofificationpanel_sub').attr("onclick", "unsubscirb_topic()");
			$('#notification_subscription').addClass('fa-bell-on').css({
				'color': 'red'
			});
			$('#enable_notification_button').css('visibility', 'hidden');
			break;
		}
	}
});



function set_typing_format(type, text) {
	$('#keyboard').val(type)
	$('#des-typing-type').html(text)
}

function getNewsById(id, type, lang, l_type) {
	var user_id = null;
	if (localStorage.getItem('u') != null && localStorage.getItem('u') != undefined) {
		var authUserData = JSON.parse(localStorage.getItem('u'));
		user_id = authUserData.tk;
	}
	var path_name = window.location.pathname;
	var news_viewer = $('#news_viewer');
	if (type === 'true' || type === true || type === '1') {
		if (l_type) {
			window.location.href = index_url + 'esana/' + id
		} else {
			window.location.href = index_url + 'niwedana/' + id
		}
	} else {
		$.ajax({
			type: "POST",
			url: index_url + 'esana/search',
			data: {
				"GET_NEWS_BY_ID": true,
				"NEWS_ID": id,
				"LOAD_TYPE": l_type,
				[csrfName]: csrfHash
			},
			success: function(data) {
				var json_response = JSON.parse(data);
				if (json_response.STATUS) {
					news_viewer.empty();
					news_viewer.append(json_response.VIEW);
					if (l_type) {
						if (path_name.includes("esana")) {
							window.history.replaceState("", "", index_url + 'esana/news/' + id);
						}
					} else {
						if (path_name.includes("niwedana")) {
							window.history.replaceState("", "", index_url + 'niwedana/reports/' + id);
						}
					}
					$.ajax({
						type: "POST",
						url: index_url + 'esana/comments',
						data: {
							"NewsId": id,
							'uid': user_id,
							'loadType': l_type,
							[csrfName]: csrfHash
						},
						success: function(data) {
							var _data = JSON.parse(data);
							var comment_set = $('#news_comment_list');
							comment_set.empty();
							comment_set.append(_data.newsList);
						},
						error: function(data) {
							console.log(data)
						}
					})
				}
			},
			error: function(data) {
				console.log(data)
			},
			beforeSend: function() {
				news_viewer.empty();
				news_viewer.append(news_div_data)
			},
			complete: function() {}
		})
	}
}



function find_words(value) {
	$.ajax({
		type: "POST",
		url: index_url + 'ajaxcalls/searchWord',
		data: {
			part: value.toLowerCase()
		},
		success: function(data) {
			var word_response = JSON.parse(data);
			var res = JSON.parse(word_response.RESPONSE);
			if (res[0].success) {
				var found_words = $('#found_words');
				found_words.empty();
				var records = res[1].records;
				for (var x = 0; x < records.length; x++) {
					var append_string = "<div class='aruth-single-result p-3 border-bottom'><h5 class='mb-0'>" + records[x].word + "</h5></div>";
					found_words.append(append_string);
				}
			}
		},
		error: function(data) {
			console.log(data)
		}
	})
}



function disable_pop_up() {
	var name = localStorage.getItem('sub_topic');
	setCookie(name, false, 30)
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = "topics_" + cname + "=" + cvalue + ";" + expires + ";path=/";
}

function enable_pop_up() {
	var name = localStorage.getItem('sub_topic');
	return getCookie(name)
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	var topic_list = [];
	for (var i = 0; i < ca.length; i++) {
		if (ca[i].includes("topics_")) {
			var topic_name = ca[i].split("_");
			var topic = topic_name[1].split("=");
			topic_list.push(topic[0])
		}
	}
	return topic_list;
}

function set_topic_array_local(test_topic) {
	var current_subscribes = JSON.parse(localStorage.getItem('topics')) || [];
	var current_set = [];
	if (current_subscribes.length >= 1) {
		for (var w = 0; w < current_subscribes.length; w++) {
			if (current_subscribes[w] !== test_topic) {
				current_set.push(current_subscribes[w])
			}
		}
		current_set.push(test_topic)
	} else {
		current_set.push(test_topic)
	}
	localStorage.setItem('topics', JSON.stringify(current_set));
}

function remove_topic_array_local(test_topic) {
	$('#nofificationpanel_sub').attr("onclick", "enable_notifications()");
	$('#notification_subscription').removeClass('fa-bell-on').css({
		'color': '#656565'
	});
	$('#enable_notification_button').css('visibility', 'visible');
	var current_subscribes = JSON.parse(localStorage.getItem('topics')) || [];
	var current_set = [];
	if (current_subscribes.length >= 1) {
		for (var w = 0; w < current_subscribes.length; w++) {
			if (current_subscribes[w] !== test_topic) {
				current_set.push(current_subscribes[w])
			}
		}
	}
	localStorage.setItem('topics', JSON.stringify(current_set));
}



function set_topics_from_server(topics) {
	var current_set = [];
	if (topics.length >= 1) {
		for (var w = 0; w < topics.length; w++) {
			current_set.push(topics[w])
		}
	}
	localStorage.setItem('topics', JSON.stringify(current_set));
}

function change_font(font_id, class_name, name, type) {
	if (type === '0') {
		$('#results').removeClass().addClass("form-control " + class_name);
		$('#des-typing-type-un').html(name)
		$('#unicode_font_download').show()
	} else {
		$('#results_legacy').removeClass().addClass("form-control " + class_name);
		$('#des-typing-type-leg').html(name)
		$('#legacy_font_download').show()
	}
	$('#font_id_download').val(font_id)
}

function download_font() {
	let id = $('#font_id_download').val()
	if (id) {
		window.location.href = index_url + 'keyboard/download-font/' + id
	}
}

function showFontConverter(mode) {
	if (mode === "unicode") {
		$('#drop_down_un').show();
		$('#drop_down_leg').hide();
	} else {
		var un_value = $('#results')
		if (un_value.val()) {
			$('#drop_down_un').hide();
			$('#drop_down_leg').show();
		} else {
			Swal.fire({
				position: 'middle',
				icon: 'error',
				title: 'Please type some text in Unicode in order to convert them to Legacy fonts.',
				showConfirmButton: false,
				timer: 2000,
				customClass: {
					container: 'converter_warning',
				}
			}).then(function(result) {
				switch_tab()
			})
		}
	}
}

function textAreaAdjust(element) {
	element.style.height = "1px";
	element.style.height = (25 + element.scrollHeight) + "px";
}

function key_bord_grow(text_area) {
	var press_count = 1;
	document.getElementById(text_area).addEventListener("keydown", function(e) {
		if (e.keyCode == 13) {
			var current_row_count = this.rows;
			if (press_count >= current_row_count) {
				this.rows = current_row_count + 1
			}
			press_count = press_count + 1
		}
		if (e.keyCode == 8) {
			var current_row_count = this.rows;
			if (press_count > 10) {
				this.rows = current_row_count - 1
			}
			press_count = press_count - 1
		}
	});
}

function switch_tab() {
	$('#nav-unicode-tab').click();
}

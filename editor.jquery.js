/* Simple Text Editor jQuery Plugin*/

$.fn.texteditor = function(options) {
    
    options = $.extend({
    	defaultText: "Lorem Ipsum Dolor Lorem Ipsum...",
    }, options);
    
    // Initiate
    textcontainer = this;
   	textcontainer.addClass("texteditor");
   	textarea = $("<div class='textarea'/>");
   	textcontainer.append(textarea);   	
    textarea.attr("contenteditable", "true").attr("designmode", "on").text(options.defaultText);
    
    // Editor
    textcontainer.prepend("<button class='italic'>italic</button>");
    textcontainer.prepend("<button class='bold'>bold</button>");

	// Formatting Handler
    $(".bold").live("click", function(){
		document.execCommand('bold',false,null);
	});
	
    $(".italic").live("click", function(){
		document.execCommand('italic',false,null);
	});	
};
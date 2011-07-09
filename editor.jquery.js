/* Simple Text Editor jQuery Plugin*/

$.fn.simpleEdit = function(options) {
    
    // Save Text
    textcontainer = this;
   	textcontent   = this.text();
   	
   	// Options
    options = $.extend({
    	defaultText: textcontent,
    }, options);
    
    // Initiate
    textcontainer.text("").addClass("texteditor");
   	textarea = $("<div class='textarea'/>");
   	textcontainer.append(textarea);
    textarea.attr("contenteditable", "true").attr("designmode", "on").text(options.defaultText);
    
    // Editor Buttons
    textcontainer.prepend("<button class='list'>list</button>");
    textcontainer.prepend("<button class='italic'>italic</button>");
    textcontainer.prepend("<button class='bold'>bold</button>");

	// Button Handlers
    $(".bold").live("click", function(){
		document.execCommand('bold',false,null);
	});
	
    $(".italic").live("click", function(){
		document.execCommand('italic',false,null);
	});	
	
	$(".list").live("click", function(){
		document.execCommand('insertunorderedlist',false,null)
	});
};
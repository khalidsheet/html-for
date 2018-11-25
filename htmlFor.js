/**
 * HtmlFor is the main function that handle all the work
 * @return {Object}s
 */
let HtmlFor = function() {
	return {

		/**
		 * run() will start the main functionality
		 */
		run: function() {
			this.for();
		},

		/**
		 * for() it's our lady.
		 * This function search for every <for></for> element in any webpage
		 * and do the for functionality on an html tag :)
		 * Notice: our lady loves "key" attribute. be sure you added this attribute
		 * before running the code.
		 */
		for: function() {

			// search for every <for> element and store it in selector.
			let selector = $('for');

			// show the user an error if the "key" attribute missing or empty.
			if (!selector.attr('key')) {
				console.error("One or more of your beauty html for tags doesn't have {key} Attribute. Please add it and reload the page again.")
				return;
			}

			// loop throw all items that stored in "selector"
			// and run "startIteration()" function.
			for(item = 0; item < selector.length; item++) {
				this.startIteration(selector[item])
			}
		},
		/**
		 * Start Iteration function it's a simple function that recognize the element
		 * and loop the content inside.
		 * @param  {[any]} el The <for> element passed by for() function
		 */
		startIteration: function(el) {

			// search for element and store it in "elem".
			let elem = $(el);

			// store the inner HTML of that element
			let elemHtml = elem.html();

			// clear the content for now.
			elem.html('');
			
			// eval turns the string to actual JS code. then render it.
			// Here is a simple code that will replace the inner HTML for <for> elem
			// with somthing like this: <item parent="{KEY}">{HTML CONTENT}</item>
			eval(`
				for(${elem.attr('condition')}){
					elem.append("<item parent='"+elem.attr('key')+"' data-i='"+i+"'>"+elemHtml+"</item>")
			 	}
			 `);
		}
	}
}
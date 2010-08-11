/*
		
		jQuery.checkable
		================
		Bequethed input checking of child objects
		
		Written by: Alex Eckermann
		Created on: 11 August 2010
		
		Version:    0.1
		jQuery:     1.8.2
		
		License:    Copyright (c) 2010 Alex Eckermann
								@alexeckermann
		
		Permission is hereby granted, free of charge, to any person obtaining
		a copy of this software and associated documentation files (the
		"Software"), to deal in the Software without restriction, including
		without limitation the rights to use, copy, modify, merge, publish,
		distribute, sublicense, and/or sell copies of the Software, and to
		permit persons to whom the Software is furnished to do so, subject to
		the following conditions:

		The above copyright notice and this permission notice shall be
		included in all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
		EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
		NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
		LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
		OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
		WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
		
*/

$.fn.checkable = function() {

	var args = arguments,
			this_obj = this;

		var funcs = {
		
		initialize: function(obj){
			
			if(!obj.jquery || obj.length < 1){
				if(console && console.error) console.error("The object supplied did not have any objects or was not a jQuery object.");
		    return;
			}
			
			obj.click(function(){ $(this).checkable("click"); });
			
		},
		click: function(){
			
			if(!this_obj.jquery || this_obj.length < 1){
				if(console && console.error) console.error("The object supplied did not have any objects or was not a jQuery object.");
		    return;
			}
			
			$(this_obj).siblings(".jq-checkable-selected").removeClass("jq-checkable-selected");
			$(":radio, :checkbox", this_obj).attr("checked", "checked");
			$(this_obj).addClass("jq-checkable-selected");
			
		}
		
	}
	
	// With what we were given, see what to do
	var request = args[0];

	if(args.length == 0 && this_obj) {
	  // -- Force an init
	 return funcs.initialize(this_obj);
	} else {
	  // -- Find a function then pass options
	  return funcs[request](this_obj);
	} 

	return this_obj;
	
}
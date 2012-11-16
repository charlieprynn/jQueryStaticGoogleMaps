/*
	Name: jQuery Google Static Maps
	Author: Charlie Prynn
	Website: http://www.charlieprynn.com
*/
(function($){
	$.fn.extend({
		staticGoogleMaps: function(options){
			//Default settings
			var defaults = {
				useData: false,
				center: false,
				zoom: 12,
				width: 400,
				height: 400,
				mapType: 'roadmap',
				sensor: true
			}
			var options = $.extend(defaults, options);
				return this.each(function(){
				var o = options;
				o.size = o.width + 'x' + o.height;
				//Check if center has been set or if using data-center attribute
				if(o.center || o.useData){
					//Google Map Url
					var mapUrl = 'http://maps.googleapis.com/maps/api/staticmap?';
		
					//Cache options length
					var oLength = Object.keys(o).length;
					
					var count = 0;
					//Loop through each option and build Google Map url
					for (var key in o){
						count++;
						//If set use the data-center attribute value as the center
						if(key == 'center' && o.useData){
							mapUrl = mapUrl + 'center=' + $(this).attr('data-center') + (count ==  oLength ? '' : '&');
						}
						else{
							mapUrl = mapUrl + key + '=' + o[key] + (count ==  oLength ? '' : '&');
						}
					}
					$(this).append('<img src="'+ mapUrl +'" alt="'+ o.center +'" title="'+ o.center +'" />');
				}
			});
		}
	});
})(jQuery);
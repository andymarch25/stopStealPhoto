(function($) {
  $.fn.stopStealPhoto = function(options) {

     // default settings
     var settings = $.extend({
     	message : 'This image is protected',
          delay: 600,
          customClass: undefined,
          cursorOffset: 14
     }, options);

     var timer;
     var elem = this;

     this.on('contextmenu', function(event){
     	event.preventDefault();

          currentElement = event.currentTarget;

     	hintPositionX = event.clientX + settings.cursorOffset;
     	hintPositionY = event.clientY + settings.cursorOffset;

          window.clearTimeout(timer);
     	$('.ssph-hint').remove();

     	newId = Math.floor(Date.now());

     	hint = $('<div class="ssph-hint" id="ssph-'+newId+'" />');

          hint.css({
               'position' : 'absolute',
               'left' : hintPositionX,
               'top' : hintPositionY,
               'z-index' : 100
          })

          if(settings.customClass) {
               
               hint.addClass(settings.customClass)

          }else{
               hint.css({
                    'background-color' : 'rgba(0,0,0,0.75)',
                    'color' : '#fff',
                    'font-size' : '11px',
                    'padding' : '4px',
                    'font-family' : 'sans-serif',
                    'border-radius' : '4px',
               })
          }

          // if data attribute exist in current element -> take text from it
          var dataText = $(currentElement).attr('data-ssph');
          hintText = (dataText ? dataText : settings.message);
     	hint.text(hintText);

     	$('body').append(hint);

     	timer = window.setTimeout(function(){
     		$('#ssph-'+newId).fadeOut();
     	}, settings.delay);

     })

  };
})(jQuery);
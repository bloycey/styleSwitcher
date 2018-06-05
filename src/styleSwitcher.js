(function ( $ ) {

    $.fn.styleSwitcher = function(options) {

        var settings = $.extend({
            path: "css/customstyles/",
            prefix: "custom",
            session: true
        }, options);
    
        var path = settings.path;
        var prefix = settings.prefix;
        var session = settings.session;
    
        if(session == true) {
            if(sessionStorage.getItem("customStyle") !== null) {
                $('head').append(sessionStorage.getItem("customStyle"));
            }
        
            if(sessionStorage.getItem("customValue") !== null){
                $(this).val(sessionStorage.getItem("customValue"));
            }
        }
    
        $(this).change(function(){

            var linkUrl = "link[rel=stylesheet][href^='" + path + prefix + "']";
            var styleSheet = $(this).val();

            if (styleSheet == "defaultstyles") {
                $(linkUrl).each(function(){
                        $(this).remove();
                })
            } else {

                var basicStyle = "<link rel='stylesheet' type='text/css' href='" + path + styleSheet + ".css'>"
                $('head').append(basicStyle);
        
                if(session == true){
                    sessionStorage.setItem("customStyle", basicStyle);
                    sessionStorage.setItem("customValue", styleSheet);
                }
                $(linkUrl).each(function(){
                    var stylesheetHref = path + styleSheet + ".css";
                    if($(this).attr("href") !== stylesheetHref) {
                        $(this).remove();
                    }
                })
            }
        })
        return this;
    }

}( jQuery ));
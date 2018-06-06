(function ( $ ) {

    $.fn.styleSwitcher = function(options) {

        var settings = $.extend({
            path: "css/customstyles/",
            prefix: "custom",
            inputType: "select",
            session: true
        }, options);
    
        var path = settings.path;
        var prefix = settings.prefix;
        var inputType = settings.inputType;
        var session = settings.session;
    
        if(session == true) {
            if(sessionStorage.getItem("customStyle") !== null) {
                $('head').append(sessionStorage.getItem("customStyle"));
            }
        
            if(sessionStorage.getItem("customValue") !== null){
                if(inputType == "select") {
                    $(this).val(sessionStorage.getItem("customValue"));
                }
                if(inputType == "radio") {
                    $(this).find("input").each(function(){
                        $(this).attr("checked", false)
                    })
                
                var selectedRadio = "input[value='" + sessionStorage.getItem("customValue") + "']"

                $(selectedRadio).attr("checked", true);
                
                }
            }
        }

        if(inputType == "select") {

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
        })}

        if(inputType == "radio") {
            $(this).find("input").click(function(){
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
        }

        return this;
    }

}( jQuery ));
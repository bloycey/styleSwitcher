$(document).ready(function(){

    function styleChange(selectId, prefix) {

        if(sessionStorage.getItem("customStyle") !== null) {
            $('head').append(sessionStorage.getItem("customStyle"));
        }

        if(sessionStorage.getItem("customValue") !== null){
            $('#' + selectId).val(sessionStorage.getItem("customValue"));
        }

        $('#' + selectId).change(function(){
            var styleSheet = $(this).val();
            var basicStyle = "<link rel='stylesheet' type='text/css' href='css/" + styleSheet + ".css'>"
            $('head').append(basicStyle);

            sessionStorage.setItem("customStyle", basicStyle);
            sessionStorage.setItem("customValue", styleSheet);

            var linkUrl = "link[rel=stylesheet][href^='css/" + prefix + "']";

            $(linkUrl).each(function(){
                var stylesheetHref = "css/" + styleSheet + ".css";
                if($(this).attr("href") !== stylesheetHref) {
                    $(this).remove();
                }
            })
        })
    }

    styleChange("colorpick", "custom");

})
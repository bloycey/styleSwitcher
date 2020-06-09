(function ($) {
    $.fn.styleSwitcher = function (options) {
        const settings = $.extend(
            {
                path: "css/customstyles/",
                prefix: "custom",
                inputType: "select",
                session: true
            },
            options
        );

        const path = settings.path;
        const prefix = settings.prefix;
        const inputType = settings.inputType;
        const session = settings.session;

        if (session === true) {
            if (sessionStorage.getItem("customStyle") !== null) {
                $("head").append(sessionStorage.getItem("customStyle"));
            }

            if (sessionStorage.getItem("customValue") !== null) {
                if (inputType == "select") {
                    $(this).val(sessionStorage.getItem("customValue"));
                }
                if (inputType == "radio") {
                    const selectedRadio =
                        "input[value='" +
                        sessionStorage.getItem("customValue") +
                        "']";
                    $(selectedRadio).prop("checked", true);
                }
            }
        }

        const setStyles = (thisValue, type) => {
            const linkUrl =
                "link[rel=stylesheet][href^='" + path + prefix + "']";
            const styleSheet =
                type === "button" ? thisValue.data("value") : thisValue.val();

            if (styleSheet == "defaultstyles") {
                sessionStorage.setItem("customStyle", null);
                sessionStorage.setItem("customValue", "defaultstyles");
                $(linkUrl).each(function () {
                    $(this).remove();
                });
            } else {
                const basicStyle =
                    "<link rel='stylesheet' type='text/css' href='" +
                    path +
                    styleSheet +
                    ".css'>";

                $("head").append(basicStyle);

                if (session == true) {
                    sessionStorage.setItem("customStyle", basicStyle);
                    sessionStorage.setItem("customValue", styleSheet);
                }
                $(linkUrl).each(function () {
                    const stylesheetHref = path + styleSheet + ".css";
                    if ($(this).attr("href") !== stylesheetHref) {
                        $(this).remove();
                    }
                });
            }
        };

        if (inputType == "select") {
            $(this).change(function () {
                setStyles($(this));
            });
        }

        if (inputType == "radio") {
            $(this)
                .find("input")
                .click(function () {
                    setStyles($(this));
                });
        }

        if (inputType == "button") {
            $(this)
                .find("button")
                .click(function () {
                    setStyles($(this), "button");
                });
        }

        return this;
    };
})(jQuery);

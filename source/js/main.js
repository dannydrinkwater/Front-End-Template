var site = {
    // site wide settings
    settings: {
        // cache some common variables
        $window: $(window),
        $html: $('html'),
        $body: $('body'),
        $page: $('#page'),
        $header: $('#header'),
        $main: $('#main'),
        $footer: $('#footer')
    },
    // use for debugging/logging
    log: function (content) {
        if (typeof (console) !== "undefined") {
            console.log(content);
        }
    },
    // standard cookie get/set
    cookies: {
        globalObj: null,
        setCookie: function (cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
        },
        getCookie: function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
            }
            return null;
        }
    },
    // placeholder polyfill
    placeholders: function () {
        var self = this;
        if (!Modernizr.input.placeholder) {
            $('[placeholder]:not([type=password])').focus(function () {
                var $input = $(this);
                if ($input.val() === $input.attr('placeholder')) {
                    $input.val('');
                    $input.removeClass('placeholder');
                }
            }).blur(function () {
                var $input = $(this);
                if ($input.val() === '' || $input.val() === $input.attr('placeholder')) {
                    $input.addClass('placeholder');
                    $input.val($input.attr('placeholder'));
                }
            }).blur().parents('form').submit(function () {
                var $input = $(this);
                $input.find('[placeholder]').each(function () {
                    if ($input.val() === $input.attr('placeholder')) {
                        $input.val('');
                    }
                });
            });
        }
        $('.password_placeholder').on('click', function(){
            $this = $(this);
            $this.hide();
            $this.siblings('input[type="password"]').focus();
        });
        $('input[type="password"]').blur(function(){
            $this = $(this);
            if ($this.val() === '') {
                $this.siblings('.password_placeholder').show();
            }
        });
    },
    // reusable site loaded function
    loaded: function () {
        var self = this;
        self.settings.$window.on('load', function () {
            // loaded functions
        });
    },
    // set objects globally that aren't declared as functions
    setglobalObj: function () {
        var self = this;
        self.cookies.globalObj = self;
    },
    // reusable site ready function
    ready: function () {
        var self = this;
        // init functions
        self.placeholders();
        self.setglobalObj();
        site.loaded();
    }
};
// onReady jQuery function
$(function() {
    site.ready();
});
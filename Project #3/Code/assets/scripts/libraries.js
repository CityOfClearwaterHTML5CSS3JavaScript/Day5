Modernizr.load([
    {
        // Step #1: Add JQuery and Boostrap Code
        load: "//code.jquery.com/jquery-1.11.1.min.js",
        complete: function () {
            if (!window.jQuery) {
                Modernizr.load('assets/scripts/jquery-1.11.1.min.js');
                console.info("jQuery had to be loaded locally");
            }
            else console.info("jQuery loaded from CDN");
        }
    },
    {
        // Step #4: Add jquery.vegas code
        load: {
            "bootstrap" : "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js", 
            "jquery.vegas": "assets/scripts/jquery.vegas.min.js",
        },
        callback : {  
            "bootstrap": function (url, result, key) {
                console.info("bootstrap loaded...");
                $('#bsCarousel').carousel()
            },
            "jquery.vegas" : function(url, result, key){      
                console.info("jquery.vegas loaded...");

                $.vegas('slideshow', {
                    delay: 15000,
                    fade: 1000,
                    loading: false,
                    backgrounds: [
                      { src: 'assets/images/backgrounds/ClearwaterBeach2.jpg' },
                      { src: 'assets/images/backgrounds/ClearwaterBeach1.jpg' }
                    ],
                })('overlay', {
                    src: 'assets/images/backgrounds/overlay.png'
                });
            },
        }
    }
    /*,
    {
        test: Modernizr.geolocation,
        yep : "geo.js",
        nope: "geo-polyfill.js",
        both: "geo-common.js"
    }*/
]);
var lastScrollTop = 0;
            var yPosition = 0;
            var amount = 10;
            // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
            window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop){
                // downscroll code
                yPosition -= amount;
                console.log('Scroll Down');
                document.getElementsByTagName('body')[0].style.backgroundPositionY = yPosition + "px";
            } else {
                // upscroll code
                yPosition += amount;
                console.log('Scroll Up');
                document.getElementsByTagName('body')[0].style.backgroundPositionY = yPosition+"px";

            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
            }, false);
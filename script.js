var lastScrollTop = 0;
            var yPosition = 0;
            var amount = 5;
            window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop){
                yPosition -= amount;
                document.getElementsByTagName('body')[0].style.backgroundPositionY = yPosition + "px";
            } else {
                yPosition += amount;
                document.getElementsByTagName('body')[0].style.backgroundPositionY = yPosition+"px";
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


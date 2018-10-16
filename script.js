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

var cards = [
    { id: 0, name: 'geit', src: 'img/geit_display.jpg', class: 'display'},
    { id: 1, name: 'gris', src: 'img/gris_display.jpg', class: 'display'},
    { id: 2, name: 'name', src: 'img/geit_display.jpg', class: 'card'},
    { id: 3, name: 'name', src: 'link', class: 'card'},
    { id: 4, name: 'name', src: 'link', class: 'card' }
];

function insertCard(cardObject, link) {
    cardObject.style.backgroundImage = 'url(' + link + ')';
}

function main() {
    var cardObjs = [];
    for (var i = 1; i < 4; i++) {
        cardObjs.push(document.getElementById('card' + i));
    }
    console.log(cardObjs);
    for (var i = 0; i < cardObjs.length; i++) {
        insertCard(cardObjs[i], cards[i].src);
    }
}


/*
 * Kort på fremsiden viser bare motivet. Kunden kan klikke på kortet for å få opp en side med mer detaljert informasjon.
 */
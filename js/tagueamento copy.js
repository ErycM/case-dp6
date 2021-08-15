// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// Instanciando Google Analytics
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    
ga('create', 'UA-12345-6', 'auto');
// ga('create', 'UA-12345-6', 'auto', 'myTracker');
ga('send', {
    hitType: 'pageview',
    page: location.pathname,
    title: document.title,
    location: location.href
});


liContato = document.getElementsByClassName("menu-lista-contato")[0];
liDownloadPdf = document.getElementsByClassName("menu-lista-download")[0];

try {
    cardLorem = document.querySelectorAll('[data-id="lorem"]')[0];
    cardLorem.addEventListener("click", fnCardLorem);
    cardIpsum = document.querySelectorAll('[data-id="ipsum"]')[0];
    cardIpsum.addEventListener("click", fnCardIpsum);
    cardDolor = document.querySelectorAll('[data-id="dolor"]')[0];
    cardDolor.addEventListener("click", fnCardDolor);
  }
catch(err) {
    console.log("Fora da pagina análise");
}


console.log(ga.q);

liContato.addEventListener("click", function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
    });
    console.log(ga.q);
});

liDownloadPdf.addEventListener("click", function() {
    console.log(e.target.href);
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
    });
    console.log(ga.q);
});



function fnCardLorem(){
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',    
        eventAction: 'ver_mais',
        eventLabel: cardLorem.getElementsByClassName("card-title")[0].textContent
      });
    console.log(ga.q);
}

function fnCardIpsum(){
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',    
        eventAction: 'ver_mais',
        eventLabel: cardIpsum.getElementsByClassName("card-title")[0].textContent
      });
    console.log(ga.q);
    
}

function fnCardDolor() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',    
        eventAction: 'ver_mais',
        eventLabel: cardDolor.getElementsByClassName("card-title")[0].textContent
      });
    console.log(ga.q);
}




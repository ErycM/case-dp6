// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// Instanciando Google Analytics
(function(i, s, o, g, r, a, m){
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

var gaCached = ga;

gaCached('create', 'UA-12345-6', 'auto');

// gaCached('create', 'UA-12345-6', 'auto');

// gaCached('create', 'UA-12345-6', 'auto', 'myTracker');
gaCached('send', {
    hitType: 'pageview',
    page: location.pathname,
    title: document.title,
    location: location.href
});
console.log(ga.q);


liContato = document.getElementsByClassName("menu-lista-contato")[0];
liContato.addEventListener("click", function(){fnSend("event","menu","entre_em_contato","link_externo")});

liDownloadPdf = document.getElementsByClassName("menu-lista-download")[0];
liDownloadPdf.addEventListener("click", function(){fnSend("event","menu","download_pdf","download_pdf")});

try{
    cardLorem = document.querySelectorAll('[data-id="lorem"]')[0];
    cardLorem.addEventListener("click", function(){fnSend("event","analise","ver_mais","lorem")});

    cardIpsum = document.querySelectorAll('[data-id="ipsum"]')[0];
    cardIpsum.addEventListener("click", function(){fnSend("event","analise","ver_mais","ipsum")});

    cardDolor = document.querySelectorAll('[data-id="dolor"]')[0];
    cardDolor.addEventListener("click", function(){fnSend("event","analise","ver_mais","dolor")});
}
catch(err){
    console.log('Fora da pagina análise');
}

try{
    cardNome = document.getElementById('nome');
    cardNome.addEventListener('input',  function(){fnSend("event","contato","nome","preencheu")});

    cardEmail = document.getElementById('email');
    cardEmail.addEventListener('input',  function(){fnSend("event","contato","email","preencheu")});
    
    cardPhone = document.getElementById('telefone');
    cardPhone.addEventListener('input',  function(){fnSend("event","contato","telefone","preencheu")});

    cardContact = document.getElementById('aceito');
    cardContact.addEventListener('input',  function(){fnSend("event","contato","aceito","preencheu")});

    cardSent = document.querySelectorAll('[type="submit"]')[0];
    cardSent.addEventListener('click',  function(){fnSend("event","contato","enviado","enviado")});
}
catch(err){
    console.log('Fora da pagina "Contato"');
}

//Contato
function fnSend(hitType, eventCategory, eventAction, eventLabel){
    gaCached('send', {
        hitType: hitType,
        eventCategory: eventCategory,    
        eventAction: eventAction,
        eventLabel: eventLabel
    });
    console.log(ga.q);
}



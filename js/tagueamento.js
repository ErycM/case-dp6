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

const executeFn = (info, errorMessage) => {
    try {
        info();
    }
    catch(err){
        console.log("fora da pagina "+errorMessage);
    }
}

fnPageView('pageview', location.pathname, document.title, location.href);

fnMenu();

executeFn(fnAnalise, "Análise");
executeFn(fnSobre, "Contato");


//---------------------------------------------------------------------------------------------------------------------
function fnMenu(){
    let getLiContato = document.getElementsByClassName("menu-lista-contato")[0];
    getLiContato.addEventListener("click", function(){fnSend("event","menu","entre_em_contato","link_externo")});

    let getLiDownloadPdf = document.getElementsByClassName("menu-lista-download")[0];
    getLiDownloadPdf.addEventListener("click", function(){fnSend("event","menu","download_pdf","download_pdf")});
}


function fnAnalise(){
    let getCardLorem = document.querySelectorAll('[data-id="lorem"]')[0];
    getCardLorem.addEventListener("click", function(){fnSend("event","analise","ver_mais","lorem")});

    let getCardIpsum = document.querySelectorAll('[data-id="ipsum"]')[0];
    getCardIpsum.addEventListener("click", function(){fnSend("event","analise","ver_mais","ipsum")});

    let getCardDolor = document.querySelectorAll('[data-id="dolor"]')[0];
    getCardDolor.addEventListener("click", function(){fnSend("event","analise","ver_mais","dolor")});
}

function fnSobre(){
    let getCardNome = document.getElementById('nome');
    getCardNome.addEventListener('focusout',  function(){ getCardNome.value ? fnSend("event","contato","nome","preencheu"): null });

    let getCardEmail = document.getElementById('email');
    getCardEmail.addEventListener('focusout',  function(){ getCardEmail.value ? fnSend("event","contato","email","preencheu"): null });
    
    let getCardPhone = document.getElementById('telefone');
    getCardPhone.addEventListener('focusout',  function(){ getCardPhone.value ? fnSend("event","contato","telefone","preencheu"): null });

    let getCardContact = document.getElementById('aceito');
    getCardContact.addEventListener('change',  function(){ fnSend("event","contato","aceito","preencheu")});
    
    let getCardSent = document.querySelectorAll('[type="submit"]')[0];
    getCardSent.addEventListener('click',  function(){fnSend("event","contato","enviado","enviado")});
}

function fnSend(hitType, eventCategory, eventAction, eventLabel){
    gaCached('send', {
        hitType: hitType,
        eventCategory: eventCategory,    
        eventAction: eventAction,
        eventLabel: eventLabel
    });
    // console.log(ga.q);
}

function fnPageView(hitType, page, title, location){
    gaCached('send', {
        hitType: hitType,
        page: page,
        title: title,
        location: location
    });
    // console.log(ga.q);
}


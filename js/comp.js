//---------------------------------------------Inicializações gerais
var aberta = 0,
    mobile = false,
    mobileAnterior = false,
    galeriaCriada = false,
    larguraMaximaMobile = 900,
    largura = $(window).width();    
        
    VerificaMobile(largura);


//---------------------------------------------Loading
setTimeout(function(){
    
    $('.loading img').fadeOut(500);
    $('.loading').fadeOut(1000);
    
},3000);


//---------------------------------------------Testes de largura
$(window).resize(function() {
    var largura = $(window).width();
    
    VerificaMobile(largura);    
    
    //Evita recarregar caso o estado não mude
    if(mobile != mobileAnterior){
        Abre(aberta);
    };
    
    mobileAnterior = mobile;
});

function VerificaMobile(largura){    
    if (largura < larguraMaximaMobile) {
        mobile = true;        
    }else {
        mobile = false;		
    }   
}


//---------------------------------------------Controles de seção
function Abre(secao){
    
    var aberto = "100%",
        fechado = "0";
    
    switch(secao){
        case 0:
            aberta = 0;            
            $('.botao h2').css('margin', '15px 0 0 50px');            
            $(".botao h2").mouseenter(function() {
                $(this).css("margin", "15px 0 0 60px");
                }).mouseleave(function() {
                     $(this).css("margin", "15px 0 0 50px");
                });		
            $("#secao1, #secao2, #secao3").fadeIn();
            $(".conteudo-sobre").fadeOut(200);
            $(".conteudo-trabalhos").fadeOut(200);            
            $(".conteudo-contato").fadeOut(200);
            $(".rodape").fadeIn(200);
            $(".voltar").fadeOut(100);                
            if(mobile){
                $("#menu, .marca").fadeIn(100);  
                $(".conteudo-trabalhos-mobile, .voltar-mobile").fadeOut(200);
                $("#secao1, #secao2, #secao3").width("100%");                
            }else{
                $("#secao1, #secao2, #secao3").width("calc(100% / 3)");
            }               	
        break;

        case 1:
            aberta = 1;
            $("#secao1").width(aberto);
            $(".botao h2").mouseenter(function() {
                $(this).css("margin", "5px 0 0 20px");
                }).mouseleave(function() {
                $(this).css("margin", "5px 0 0 20px");
            });
            $('.botao h2').css('margin', '5px 0 0 20px');
            $('.botao h2').css('text-decoration', 'none');
            $("#secao2, #secao3").width(fechado);
            $("#secao2, #secao3").fadeOut(200);
            $(".rodape").fadeOut(200);
            setTimeout( function(){                
                $(".voltar").fadeIn();					
                $("#conteudo-sobre").fadeIn();
                PreencheHabilidades();
            }, 400);
            if(mobile){
                $("#menu, .marca").hide();				
                $(".voltar-mobile").fadeIn();               
            }else{
                $("#menu, .marca").show();				
                $(".voltar-mobile").fadeOut(); 
            }            
        break;            
            
        case 2:
            aberta = 2;   
            AnimaScroll();
            $("#secao2").width(aberto);
            $(".botao h2").mouseenter(function() {
                $(this).css("margin", "5px 0 0 20px");
                }).mouseleave(function() {
                $(this).css("margin", "5px 0 0 20px");
            });
            $('.botao h2').css('margin', '5px 0 0 20px');
            $('.botao h2').css('text-decoration', 'none');
            $("#secao1, #secao3").width(fechado);
            $("#secao1, #secao3").fadeOut(200);
            $(".rodape").fadeOut(200);
            setTimeout( function(){                
                $(".voltar").fadeIn();               
            }, 400);
            if(mobile){
                CriaGaleriaMobile();
                $("#menu, .marca, .conteudo-trabalhos").hide();				
                $("#conteudo-trabalhos-mobile, .voltar-mobile").fadeIn();               
            }else{
                $(".link-saiba-mais").attr("href",link[imagemAtual]);
                $("#menu, .marca, #conteudo-trabalhos").fadeIn();
                $("#conteudo-trabalhos-mobile, .voltar-mobile").fadeOut(); 
            }            
        break;            
            
        case 3:
            aberta = 3;
            $("#secao3").width(aberto);
            $(".botao h2").mouseenter(function() {
                $(this).css("margin", "5px 0 0 20px");
                }).mouseleave(function() {
                $(this).css("margin", "5px 0 0 20px");
            });
            $('.botao h2').css('margin', '5px 0 0 20px');
            $('.botao h2').css('text-decoration', 'none');
            $("#secao1, #secao2").width(fechado);
            $("#secao1, #secao2").fadeOut(200);
            $(".rodape").fadeOut(200);
            setTimeout( function(){                
                $(".voltar").fadeIn();					
                $("#conteudo-contato").fadeIn();
            }, 400);
            if(mobile){
                $("#menu, .marca").hide();				
                $(".voltar-mobile").fadeIn();               
            }else{
                $("#menu, .marca").show();				
                $(".voltar-mobile").fadeOut(); 
            }            
        break;
    }    
}


//---------------------------------------------Itens da galeria
var imagemAtual = 0,		
    numeroTrabalhos = 6,

    urlImagem = ["img/briko.png",
                 "img/arcadia.jpg",
                 "img/reinventar.jpg",
                 "img/gnf.jpg",
                 "img/horizonte.jpg",
                 "img/bitsentregrids.jpg",
                 "img/finance_8.jpg"
    ],
    
    titulo = ["Briko",
              "Arcadia bay",
              "Reinventar",
              "Gilrs n' Fire",
              "Horizonte Cultural",
              "Bits entre Grids",
              "Finance 8"
    ],
    
    descricao = ["Toy Art desenvolvido para a matéria de Metodologia Aplicada I da Escola de Design da              UEMG.",
                 "Cena inspirada em Arcadia Bay, cidade fictícia do jogo Life is Strange",
                 "Site desenvolvido para o Reinventar, projeto de alunos da UFMG, que tem como objetivo levar conhecimento aos servidores da universidade.",
                 "Girls n' Fire é um jogo para Android, do tipo infinite scroller, onde você joga com John, um bombeiro que tem dois empregos!",
                 "Trabalho de Conclusão do Curso de Design Gráfico da Universidade do Estado de Minas Gerais",
                 "Livro que relaciona o desenvolvimento de jogos com design editorial",
                 "Landing page para o app Finance 8 da Paiva Piovesan Softwares"
    ],
    
    link = ["https://www.behance.net/gallery/4363429/Briko",
            "https://www.behance.net/gallery/60905163/Arcadia-Bay",
            "https://www.behance.net/gallery/52490469/Projeto-Reinventar",
            "https://www.behance.net/gallery/52673873/Girls-n-Fire",
            "https://www.behance.net/gallery/52719987/Horizonte-Cultural",
            "https://www.behance.net/gallery/4363875/Bits-Entre-Grids",
            "https://www.behance.net/gallery/54527231/Finance-8-Landing-page"
    ];

    
    
    //Inicialização da galeria
    $("#imagem1").attr("src", urlImagem[imagemAtual]);
    $(".cabecalho-foto h1").html(titulo[imagemAtual]);
    $(".cabecalho-foto h2").html(descricao[imagemAtual]);
    $(".para-cima").hide();

    Preload();

//---------------------------------------------Preload das imagens e fim do loading

function Preload(){
    
    for(var j=0; j<numeroTrabalhos; j++){
        $('#preload').append('<img src="' + urlImagem[j] + '">');
    };    
    
}

    
//---------------------------------------------Gera galeria mobile   

    function CriaGaleriaMobile(){
        if(!galeriaCriada){
            for(var i=0; i<numeroTrabalhos; i++){
                $('#conteudo-trabalhos-mobile').append('<div class="item-mobile">' 
                                                     +'<img src="' + urlImagem[i] + '">'
                                                     +'<div class="descricao">'
                                                     +'<span class="descricao-titulo">' + titulo[i] + '</span><br>'
                                                     +'<span class="descricao-texto">' + descricao[i] + '</span><br>'
                                                     +'<div class="link-mobile">'
                                                     +'<a href="' + link[i] + '"target="_blank"> Ver Mais > </a>'
                                                     +'</div></div></div>'
                                                    );
            }
            galeriaCriada = true;
        }
    }

//---------------------------------------------Troca imagens da galeria    

var ultimoClique = 0;

//Ativa e desativa os botões de rolagem
setInterval(function(){
    if(imagemAtual == 0){
        $(".para-cima").fadeOut();
    }else{
        $(".para-cima").fadeIn();
    }
    if(imagemAtual == numeroTrabalhos - 1){
        $(".para-baixo").fadeOut();
    }else{
        $(".para-baixo").fadeIn();
    }
}, 500);

function Move(sentido){
   
    if(aberta == 2){
        var agora = new Date();    
        //Controle de intervalo de movimento
        if(agora - ultimoClique > 410){
            ultimoClique = agora;
            switch(sentido){
                case 0:	  
                    if(imagemAtual < numeroTrabalhos - 1){
                        imagemAtual++;
                        
                        $("#imagem2").attr("src", urlImagem[imagemAtual]);
                        $("#imagem1").animate({ opacity: 0, marginTop: "-100%" }, 400);
                        $("#imagem2").animate({ opacity: 0, marginTop: "100%" }, 0);
                        $("#imagem2").animate({ opacity: 1, marginTop: "0px" }, 400);
                    }
                break;
                case 1:	
                    if(imagemAtual > 0){				
                        imagemAtual--;
                        
                        $("#imagem2").attr("src", urlImagem[imagemAtual]);
                        $("#imagem1").animate({ opacity: 0, marginTop: "100%" }, 400);
                        $("#imagem2").animate({ opacity: 0, marginTop: "-100%" }, 0);
                        $("#imagem2").animate({ opacity: 1, marginTop: "0px" }, 400);
                    }
                break;			
            }

            //Tempo da troca
            setTimeout(function(){
                    $("#imagem1").attr("src", urlImagem[imagemAtual]);
                }, 390);				
            $("#imagem1").animate({ opacity: 1, marginTop: "0px" }, 0);
            $(".cabecalho-foto h1").html(titulo[imagemAtual]);
            $(".cabecalho-foto h2").html(descricao[imagemAtual]);
            $(".link-saiba-mais").attr("href",link[imagemAtual]);
        }
    }
}

//---------------------------------------------Anima botão baixo

function AnimaScroll(){    
    setInterval(function(){
        if(imagemAtual == 0){
            $(".para-baixo").animate({bottom: '+=20px'}, 500);
            $(".para-baixo").animate({bottom: '-=20px'}, 200);
        }else if(imagemAtual == numeroTrabalhos-1){
            $(".para-cima").animate({top: '-=20px'}, 200);
            $(".para-cima").animate({top: '+=20px'}, 500);   
        }else{
            $(".para-cima").stop(true, true, true);
            $(".para-baixo").stop(true, true, true);   
        }
    }, 700);    
 }

//---------------------------------------------Controle pelas setas

 $(document).keyup(function(e) {
    if(aberta ==2){
        switch(e.which) {
            case 40:
            Move(0);
            break;			
            case 38:
            Move(1);
            break;
            default: return;
        }
    }
});

//---------------------------------------------Controle pelo scroll

function handle(delta) {
    
    if (delta < 0){						
        Move(0);
    } else {
        Move(1);
    }    
}

function wheel(event){

    var delta=0;

    if(!event){
        event=window.event;
    }			
    if(event.wheelDelta){
        delta=event.wheelDelta/120;if(window.opera)delta=-delta;
    }else if(event.detail){
        delta=-event.detail/3;
        }
        if(delta){
            handle(delta);
        }
}

if(window.addEventListener){
    window.addEventListener('DOMMouseScroll',wheel,false);
    window.onmousewheel=document.onmousewheel=wheel;
}

//---------------------------------------------Controle pelo scroll

function PreencheHabilidades(){
    $("#photoshop").css('width', '80%');
    $("#illustrator").css('width', '70%');
    $("#indesign").css('width', '50%');
    $("#after").css('width', '60%');
    $("#html").css('width', '70%');
    $("#css").css('width', '60%');
    $("#js").css('width', '50%');
    $("#jq").css('width', '50%');
    $("#java").css('width', '60%');
    $("#c").css('width', '50%');
    $("#unity").css('width', '60%');
    $("#3d").css('width', '70%');
}


































var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

/*function setTxt(){
                document.sett.settxt.value=30
}*/

function unCheck(){
    var op1=document.getElementById("opc1");
    var op2=document.getElementById("opc2");
    var op3=document.getElementById("opc3");
    var op4=document.getElementById("opc4");

    op1.onclick=function(){
        if(op1.checked != false){ 
            op2.checked =null; 
            op3.checked=null;
            op4.checked=null;
        }
    }

    op2.onclick=function(){
        if(op2.checked != false){ 
            op1.checked =null; 
            op3.checked=null;
            op4.checked=null;
        }
    }


    op3.onclick=function(){
        if(op3.checked != false){ 
            op2.checked =null; 
            op1.checked=null;
            op4.checked=null;
        }
    }

    op4.onclick=function(){
        if(op4.checked != false){ 
            op2.checked =null; 
            op3.checked=null;
            op1.checked=null;
        }
    }                
}

function unCheck2(){
    var op1=document.getElementById("opc11");
    var op2=document.getElementById("opc21");
    var op3=document.getElementById("opc31");
    var op4=document.getElementById("opc41");

    op1.onclick=function(){
        if(op1.checked != false){ 
            op2.checked =null; 
            op3.checked=null;
            op4.checked=null;
        }
    }

    op2.onclick=function(){
        if(op2.checked != false){ 
            op1.checked =null; 
            op3.checked=null;
            op4.checked=null;
        }
    }


    op3.onclick=function(){
        if(op3.checked != false){ 
            op2.checked =null; 
            op1.checked=null;
            op4.checked=null;
        }
    }

    op4.onclick=function(){
        if(op4.checked != false){ 
            op2.checked =null; 
            op3.checked=null;
            op1.checked=null;
        }
    }                
}

function unCheck3(){
    var op1=document.getElementById("opc12");
    var op2=document.getElementById("opc22");
    var op3=document.getElementById("opc32");
    var op4=document.getElementById("opc42");

    op1.onclick=function(){
        if(op1.checked != false){ 
            op2.checked =null; 
            op3.checked=null;
            op4.checked=null;
        }
    }

    op2.onclick=function(){
        if(op2.checked != false){ 
            op1.checked =null; 
            op3.checked=null;
            op4.checked=null;
        }
    }


    op3.onclick=function(){
        if(op3.checked != false){ 
            op2.checked =null; 
            op1.checked=null;
            op4.checked=null;
        }
    }

    op4.onclick=function(){
        if(op4.checked != false){ 
            op2.checked =null; 
            op3.checked=null;
            op1.checked=null;
        }
    }                
}

function res(){
    var tr1=document.getElementById("opc1");
    var fl2=document.getElementById("opc2");
    var fl3=document.getElementById("opc3");
    var fl4=document.getElementById("opc4");

    var tr2=document.getElementById("opc11");
    var fl5=document.getElementById("opc21");
    var fl6=document.getElementById("opc31");
    var fl7=document.getElementById("opc41");

    var tr3=document.getElementById("opc12");
    var fl8=document.getElementById("opc22");
    var fl9=document.getElementById("opc32");
    var fl10=document.getElementById("opc42");

    var re=0;
    var nr=0;
    var tt=0;

    if(tr1.checked==true){
    	re=re+1;
    }else{
    	nr=nr+1;
    }

	if(tr2.checked==true){
    	re=re+1;
    }else{
    	nr=nr+1;
    }

    if(tr3.checked==true){
    	re=re+1;
    }else{
    	nr=nr+1;
    }

    var sre=''+re+'/'+10+'';
    document.ress.ac.value=sre;
    var srn=''+nr+'/'+10+'';
    document.ress.er.value=srn;
}
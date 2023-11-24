const btn = document.getElementById('btn')
const question = document.querySelectorAll('.perguntas')


function formulario(){

    let adm = 0
    let comercio = 0
    let marketing  = 0
    let juridico = 0
    let seguranca = 0
    let rh = 0
    let info = 0 

    let respostas = 0

    for(let i = 0; i < question.length; i++){
        if(question[i].checked){

          respostas++
    
            if(question[i].value === 'ADM'){
                adm++
                    
            }    
            else if(question[i].value === 'Comercio'){
               comercio++
            }
            else if(question[i].value === 'Marketing'){
              marketing++
              
            }
            else if(question[i].value === 'Juridico'){
              juridico++

            }
            else if(question[i].value === 'Seguranca'){
              seguranca++
            }
            else if(question[i].value === 'RH'){
              rh++
            }
            else{
              info++
             
            }
        }
    }


    if(respostas >= 10){

      if(adm >= comercio && adm >= marketing && adm >= juridico && adm >= seguranca && adm >= rh && adm >= info){
        alert('Você é ADM')
        console.log('ADM', adm)
        
    }
     else if(comercio >= adm && comercio >= marketing && comercio >= juridico && comercio >= seguranca && comercio >= rh && comercio >= info){
        alert('Você é do Comércio')
        console.log('comercio', comercio)
        
    }
    else if(marketing >= adm && marketing >= comercio && marketing >= juridico && marketing >= seguranca && marketing >= rh && marketing >= info){
        alert('Você é do Marketing')
        console.log('marketing', marketing)

    }
    else if(juridico >= adm && juridico >= comercio && juridico >= marketing && juridico >= seguranca && juridico >= rh && juridico >= info){
        alert('Você é Jurídico')
        console.log('Juridico', juridico)
        
    }
    else if(seguranca >= comercio && seguranca >= marketing && seguranca >= juridico && seguranca >= adm && seguranca >= rh && seguranca >= info){
        alert('Você é Segurança')
        console.log('Segurança', seguranca)

    }
     else if(rh >= comercio && rh >= marketing && rh >= juridico && rh >= seguranca && rh >= adm && rh >= info){
        alert('Você é do RH')
        console.log('RH', rh)

    }else{
      alert('voce é do Info')
      console.log('info', info)

    }

          
    }else{
      alert('Você tem que responder TUDO!!!')
    }

  }

  btn.addEventListener('click', formulario);

import React, {useState} from 'react';
import './form.css';


function Form() {
const[adesivos, setAdesivos] = useState(0);
const[react, setReact] = useState(false);
const[vue, setVue] = useState(false);
const[angular, setAngular] = useState(false);
const[observacoes, setObservacoes] = useState(false);
const[dados, setDados] = useState({});

function sendForm(e) {
  e.preventDefault()
   setDados( {
    react:react,
    vue:vue,
    angular:angular,
    quantidade: adesivos,
    observacoes: observacoes
  });
}
console.log(dados)


    return ( 
      <div className = "Form" >
        <form>
        <div className="topo">
            <h1>Formulário<br></br> para compra de<br></br> <b>Pacote de adesivos</b></h1>
          </div>
        <div className="container">  
            <h2>Quais adesivos:</h2>
        <div>
            <input type="checkbox" onChange={(e) => setReact(e.target.checked)} id="React" name="contact" />
            <label htmlFor="contactChoice1">React</label><br></br>
            <br></br>
            <input type="checkbox" onChange={(e) => setVue(e.target.checked)} id="Vue" name="contact" />
            <label htmlFor="contactChoice2">Vue</label><br></br>
            <input type="checkbox" onChange={(e) => setAngular(e.target.checked)} id="Angular"name="contact"/>
            <label htmlFor="contactChoice3">Angular</label>
        </div>
        <div className="margin-bottom">
          <h2>Quantos adesivos de cada?</h2>
          <button type='button' className="button-menos" onClick={()=> setAdesivos(adesivos - 1)}>-</button>
          <input className="input-button" placeholder={adesivos} type="text" disabled/>
          <button type='button' className="button-mais" onClick={()=> setAdesivos(adesivos + 1)}>+</button>
        </div>
        <h2>Observações:</h2>
        <textarea onChange={(e) => setObservacoes(e.target.value)} placeholder='Alguma duvida? Recado?'></textarea><br></br>
        </div>
        <div className="button-enviar1">
          <button className="button-enviar" onClick={sendForm}>Enviar</button>
        </div>
        </form>
        </div>
        
    );
}

export default Form;

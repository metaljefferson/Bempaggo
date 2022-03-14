import './App.css';

function App() {
    return ( 
      <div className = "App" >
        <form>
        <div class="container">
          <h1>Formulário<br></br> para compra de<br></br> <span>Pacote de adesivos</span></h1>
            <h2>Quais adesivos:</h2>
        <div>
            <input type="checkbox" id="react" name="contact" value="email"/>
            <label for="contactChoice1">React</label><br></br>
            <input type="checkbox" id="vue" name="contact" value="phone"/>
            <label for="contactChoice2">Vue</label><br></br>
            <input type="checkbox" id="angular"name="contact" value="mail"/>
            <label for="contactChoice3">Angular</label>
        </div>
        <div>
          <h2>Quantos adesivos de cada?</h2>
          <button>-</button>
          <input value={0} type="text"/>
          <button>+</button>
        </div>
        <h2>Observações:</h2>
        <textarea placeholder='Alguma duvida? Recado?'></textarea><br></br>
        <button>Enviar</button>
        </div>
        </form>
        </div>
        
    );
}

export default App;
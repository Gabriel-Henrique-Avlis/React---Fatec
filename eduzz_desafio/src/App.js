import React, {useState, useEffect} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from "./components/Navbar";
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Professores from './components/Professores';
import Estudantes from './components/Estudantes';

function App() {
  const [professores, setProfessores] = useState ([]);
  const [estudantes, setEstudantes] = useState ([]);

  //Estabelecendo a estrutura que receberá os dados através do hook useState.

 // Ao utilizar o hook useEffect, requisito os dados através da API, inserida nas duas funções assíncronas abaixo,
 // e os armazeno utilizando o método mencionado anteriormente, useState.
  useEffect(() =>{
    async function fetchProfessores(){
      let res = await fetch('http://hp-api.herokuapp.com/api/characters/staff');
      let data = await res.json();
      setProfessores(data);
    }

    async function fetchEstudantes(){
      let res = await fetch('http://hp-api.herokuapp.com/api/characters/students');
      let data = await res.json();
      setEstudantes(data);
    }

    fetchProfessores();
    fetchEstudantes();
  }, [])

  //Abaixo encontra-se a estrutura do app. Ao utilizar o Router, é possível navegar para outras páginas.
  //Os componentes filhos estão contidos em um container.
  //Navbar - Basicamente é o menu.
  //Home - Página Inicial.
  //Estudantes - Página que demonstra visualmente os dados requisitados na api, utilizando a rota 'Students'.
  //Professores - Página que demonstra visualmente os dados requisitados na api, utilizando a rota 'Staff'.
  return (
    <div className="App" style={{background: 'linear-gradient(rgba(150,15,48,0.8),transparent)' , backgroundColor: 'goldenrod', height: 3000 + 'px'}}>
      <>
        <Router>
        <Navbar />
            <Container>
              <Switch>
                  <Route exact path="/">
                  <Home />
                  </Route>
                  <Route exact path="/professores">
                  <Professores data={professores} />
                </Route>
                <Route exact path="/estudantes">
                  <Estudantes data={estudantes} />
                </Route>
              </Switch>
            </Container>
        </Router>
      </>
    </div>
  );
}

export default App;

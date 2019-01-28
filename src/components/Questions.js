import React from 'react';
import './Questions.css';
import Button from './Button';

class Questions  extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          currentQuestion: 0
      };
    }

    setNextQuestion(value) {
        this.setState({
            currentQuestion: value
        });
    }

    getCurrentQuestion() {
        const questionNumber = this.state.currentQuestion;
        switch (questionNumber) {
            case 0:
                return (
                    <div>
                        <p>Você está pronto?</p>
                        <Button action={() => this.setNextQuestion(1)} text="Sim" />
                        <Button action={() => this.setNextQuestion(99)} text="Não" />
                    </div>
                )
            case 1:
                return (
                    <div>
                        <p>Você está empregado?</p>
                        <Button action={() => this.setNextQuestion(9)} text="Sim" />
                        <Button action={() => this.setNextQuestion(2)} text="Não" />
                    </div>
                )
            case 2:
                return (
                    <div>
                        <p>É o seu primeiro emprego?</p>
                        <Button action={() => this.setNextQuestion(3)} text="Sim" />
                        <Button action={() => this.setNextQuestion(3)} text="Não" />
                    </div>
                )
            case 3:
                return (
                    <div>
                        <p>Qual seu grau de escolaridade?</p>
                        <Button action={() => this.setNextQuestion(7)} text="Não graduado" />
                        <Button action={() => this.setNextQuestion(8)} text="Cursando" />
                        <Button action={() => this.setNextQuestion(8)} text="Graduado" />
                        <Button action={() => this.setNextQuestion(4)} text="Pós-graduado" />
                    </div>
                )
            case 4:
                return (
                    <div>
                        <p>Você tem Currículo?</p>
                        <Button action={() => this.setNextQuestion(5)} text="Sim" />
                        <Button action={() => this.setNextQuestion("BuildCV")} text="Não" />
                    </div>
                )
            case 5:
                return (
                    <div>
                        <p>Seu Currículo está atualizado?</p>
                        <Button action={() => this.setNextQuestion("PrimeEmployers")} text="Sim" />
                        <Button action={() => this.setNextQuestion("AnalyseCV")} text="Não" />
                    </div>
                )
            case 6:
                return (
                    <div>
                        <p>Está procurando uma Pós-graduação?</p>
                        <Button action={() => this.setNextQuestion("Edu")} text="Sim" />
                        <Button action={() => this.setNextQuestion("Academy")} text="Não" />
                    </div>
                )
            case 7:
                return (
                    <div>
                        <p>Está procurando uma Graduação?</p>
                        <Button action={() => this.setNextQuestion("Edu")} text="Sim" />
                        <Button action={() => this.setNextQuestion(4)} text="Não" />
                    </div>
                )
            case 8:
                return (
                    <div>
                        <p>Está procurando uma Especialização?</p>
                        <Button action={() => this.setNextQuestion("Academy")} text="Sim" />
                        <Button action={() => this.setNextQuestion(6)} text="Não" />
                    </div>
                )
            case 9:
                return (
                    <div>
                        <p>Está procurando um novo emprego?</p>
                        <Button action={() => this.setNextQuestion(4)} text="Sim" />
                        <Button action={() => this.setNextQuestion(3)} text="Não" />
                    </div>
                )
            case "BuildCV":
                return (
                   <p>Elaboração de CV</p> 
                )
            case "AnalyseCV":
                return (
                    <p>Análise de CV</p> 
                )
            case "Edu":
                return (
                    <p>Catho - Edu</p> 
                )
            case "Academy":
                return (
                    <p>Cursos Rápidos</p> 
                )
            case "PrimeEmployers":
                return (
                    <p>Vagas Exclusívas</p> 
                )
            case 99:
                return (
                    <p>Que pena, volte quando estiver :)</p>
                )
                default:
                break;
        }
    }

  render() {
    return (
      <div>
        {this.getCurrentQuestion()}
      </div>
    );
  }
}

export default Questions;

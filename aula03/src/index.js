import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = { nome: 'Mirraely', assunto: 'Formulário React' }
    this.handleChance = this.handleChance.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChance(event) {

    const nameEvt = event.target.name

    this.setState({ [nameEvt]: event.target.value })

  }

  handleSubmit(event) {

    alert(`Hoje, ${this.state.nome} escolheu estudar o assunto: ${this.state.assunto}!`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Digite o seu nome: </label>
        </div>
        <div>
          <input name="nome" type="text" onChange={this.handleChance} value={this.state.nome}></input>
        </div>
        <br/>
        <div>
          <div>
            <label>Selecione um assunto: </label>
          </div>
          <select name="assunto" value={this.state.assunto} onChange={this.handleChance}>
            <option value="Fundamentos do React - 1">Fundamentos do React - 1</option>
            <option value="Fundamentos do React - 2">Fundamentos do React - 2</option>
            <option value="Formulário React">Formulário React</option>
            <option value="React Hooks">React Hooks</option>
          </select>
          <br/> <br/>
          <input type="submit" value="Enviar!" />
        </div>
      </form>
    )
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
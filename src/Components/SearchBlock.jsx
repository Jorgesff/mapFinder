import React, { Component } from 'react';
/**
 * class for search block
 */

export default class SearchBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: ""
    }
    this.handleCep = this.handleCep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearchChange(this.state.cep);
  }
  handleCep(event) {
    this.setState({ cep: event.target.value});
  }
  /**
   * render - render the component
   *
   * @returns component  description
   */
  render() {
    return (
      <div className="search-block">
        <div className="search-block__title">
          <h2>Consultar</h2>
        </div>
        <div className="search-block__form">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search-input">CEP </label>
            <input
              id="search-input"
              pattern="\d{5}-?\d{3}"
              value={this.state.cep}
              placeholder="Exemplo: 14403-131 ou 14403131"
              onChange={this.handleCep}
              name="cep"
              className="formControl--search"
              type="text"
              required
            />
            <button type="submit" className="button--search">Pesquisar</button>
          </form>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import $ from 'jquery';

const url = cep => "https://www.google.com/maps/embed/v1/place?key=AIzaSyAUs8yaeUFrctyDLUWjLuHyyQt2_chtMyQ&q="+cep;

export default class MapBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bairro:"",
      cep:"",
      complemento:"",
      gia:"",
      ibge:"",
      localidade:"",
      logradouro:"",
      uf:"",
      unidade:""
    }
    this.mapUpdate = this.mapUpdate.bind(this);
  }
  mapUpdate(addr) {
    $.getJSON('http://viacep.com.br/ws/'+ addr + '/json/',function(resp){

    })
    .done((response) => {
      this.setState({cep: response.cep});
      this.setState({bairro: response.bairro});
      this.setState({logradouro: response.logradouro});
      this.setState({localidade: response.localidade});
      this.setState({uf: response.uf});

    })
    .fail((error) => {
      console.log(error);
    })
  }
  componentDidMount() {
    this.setState({cep:this.props.address})
  }
  componentWillReceiveProps() {
    this.mapUpdate(this.props.address);
      // this.setState({address: this.props.address});
      // this.setState({cep: this.props.address.cep});
  }
  render() {
    const local = this.state;
    return (
      <div className="map-block">
        <h1>{local.logradouro}</h1>
        <h3>{local.bairro}</h3>
        <h3>{local.localidade}  {local.uf}</h3>
        <h3>{local.cep}</h3>
        <iframe
          title="map"
          className="map-block__map"
          width="100%"
          height="450"
          frameBorder="0"
          src={url(this.state.cep)}
          allowFullScreen>
        </iframe>
      </div>
    );
  }
}

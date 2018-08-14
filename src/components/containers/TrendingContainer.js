import React, {Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    actionTest
  } from "../../store/actions";


class TrendingContainer extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.actionTest({data:"loremp ipsum"});
    }

    render(){
    return(
        <div>
            <div>Informacion proveniente del Store de Redux:</div>
            <br />
            <div><strong>{JSON.stringify(this.props.trending)}</strong></div>
            <br />
            <div>Flujo:</div>
            <img width="500"  src="https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966" />           
        </div>)  
    }

};

/*
Se obtiene la información del store (del reducer trending), en este punto aun no se utilizan selectores
*/
function mapStateToProps(state) {
    let { trending } = state;

    return {
      trending
    };
  }


  /*
  Inyecta los action creators a nuestro container, via props 
  Esto permitira que arriba podamos llamarlas de la forma this.props.actionTest()
  */
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        actionTest
      },
      dispatch
    );
  }


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrendingContainer);

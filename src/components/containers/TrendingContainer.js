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
        this.props.actionTest();
    }

    render(){
    return(<div>TrendingContainer (Componente React)</div>)  
    }

};

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
    null,
    mapDispatchToProps
  )(TrendingContainer);

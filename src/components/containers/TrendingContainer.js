import React, {Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    actionTrendingGetDataRequest
  } from "../../store/actions";
import  {getMeta}  from "../../store/selectors/trendingSelectors";


class TrendingContainer extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.actionTrendingGetDataRequest();
    }

    render(){
        return(
            <div>
                <div>Informacion proveniente del Store de Redux:</div>
                <br />
                <div><strong>El Selector getMeta retorna: {JSON.stringify(this.props.meta)}</strong></div>

                <br />
                <div>Flujo:</div>
                <img width="500"  src="https://cdn-images-1.medium.com/max/1200/1*QERgzuzphdQz4e0fNs1CFQ.gif"/>           
            </div>
        )
    }

};


function mapStateToProps(state) {
    let { trending } = state;

    return {
        meta : getMeta(trending)
    };
}

/*
Inyecta los action creators a nuestro container, via props 
Esto permitira que arriba podamos llamarlas de la forma this.props.actionTest()
*/
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        actionTrendingGetDataRequest
      },
      dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrendingContainer);

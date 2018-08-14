import React, {Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    actionTest
  } from "../../store/actions";
import  {getTestData_1, getTestData_2, getMeta}  from "../../store/selectors/trendingSelectors";

const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;
const path = "/v1/gifs/trending";

class TrendingContainer extends Component {

    constructor(props){
        super(props)

        this.state = {
            data:{}
        }
    }

    componentDidMount(){
        this.props.actionTest(
            {
                data_1:"loremp ipsum 1", 
                data_2:"loremp ipsum 2"
            }
        );

        /*
        Se hace una llamada al Api, no es el mejor lugar para hacerlo.
        Se utiliza un selector para obtener solo el contenido "meta"
        **** Esta parte no usa Redux, es solo una llamada con fetch que setea el resultado al State del componente ****
        */
       fetch(apiUrl + path + `?api_key=${giphyApiKey}`).
       then(response => response.json()).
       then(data => this.setState({ data: getMeta(data) }));
       
    }


    render(){
        return(
            <div>
                <div>Informacion proveniente del Store de Redux:</div>
                <br />
                <div><strong>El Selector getTestData_1 retorna: {JSON.stringify(this.props.data_1)}</strong></div>
                <div><strong>El Selector getTestData_2 retorna: {JSON.stringify(this.props.data_2)}</strong></div>
                <div><strong>El Selector getMeta retorna: {JSON.stringify(this.state.data)}</strong></div>

                <br />
                <div>Flujo:</div>
                <img width="500"  src="https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966" />           
            </div>
        )
    }

};

/*
Se obtiene la información del store (del reducer trending)
Se utilizan selectores para obtener información mas especifica
*/
function mapStateToProps(state) {
    let { trending } = state;

    return {
        data_1 : getTestData_1(trending),
        data_2 : getTestData_2(trending)
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

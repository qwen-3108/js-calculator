/*STORE DEFINITION*/

import { createStore } from 'redux';
import compute from './compute';
import inputControl from './inputControl';

//state initialization
const data = {input: '0', output:'0'};

//action creators
const log = (num) => ({
  type: 'LOG',
  numStr: num
});

const clear = () => ({
  type: 'CLEAR'
});

const calc = () => ({
  type: 'CALC'
});

//reducer
const reducer = (state = data, action) => {

  switch (action.type) {
      case 'LOG':
        const { inp, out } = inputControl(action.numStr, state);
        return {input: inp, output: out};

      case 'CLEAR':
        return {input: '0', output:'0'};

      case 'CALC':
        let newStr = '';
        let result = compute(state.input);
        if(result===state.input){
          newStr = state.input;
        }else{
          newStr = state.input + '=';
        }
        //console.log(compute(state), result);
        return {input:newStr, output:result.toString()};

      default:
        return state;
  }
}

export const memory = createStore(reducer);

//mapStateToProps & mapDispatchToProps
export const mapStateToProps = (state) => ({memory:state});
export const mapDispatchToProps = (dispatch) => ({logInput:(num)=>dispatch(log(num)), clearInput:()=>dispatch(clear()),calcInput:()=>dispatch(calc())});
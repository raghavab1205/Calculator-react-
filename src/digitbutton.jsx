import {Actions} from "./App.jsx"
export default function DigitButton({digit, dispatch}){
    return(
        <button onClick={() => dispatch({type: Actions.ADD_DIGIT, payload: {digit}})}>{digit}</button>
    )
}
import {Actions} from "./App.jsx"
export default function OperationButton({operation, dispatch}){
    return(
        <button onClick={() => dispatch({type: Actions.CHOOSE_OPERATION, payload: {operation}})}>{operation}</button>
    )
}
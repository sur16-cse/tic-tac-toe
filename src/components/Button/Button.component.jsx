import './Button.styles.css'
const Button=(props)=>{
    return(
        <button className='clear-button' onClick={props.onClick}>Clear Game</button>
    )
}

export default Button
import './square.styles.css'
const SquareComponent=(props)=>{
    const classes=props.className?`${props.className} square`:'square'
    return(
        <span 
            className={classes + (props.state === "X" ? ` fc-aqua` : ` fc-white`)}
            onClick={props.onClick}
        >
            {props.state}
        </span>
    )
}

export default SquareComponent
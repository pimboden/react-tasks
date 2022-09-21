const Button = ({color, text, onClick}) =>{
  return(
    <button className="btn" onClick={onClick}>{text}</button>


 )
}
Button.defaultProps = {
  color:"$light-grey"
}
export default Button
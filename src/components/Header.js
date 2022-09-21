// export default class Header extends Component{
//   render (){
//     return <div>Hello Component</div>
//   }
// }

// const Header = () =>{
//   return <div>Hello Component</div>
// }
// export default Header


// const Header = (props) =>{
//   return(
//    <div></div>
//  )
// }
//export default Header

import PropTypes from 'prop-types'
import Button from "./Button"
const Header = ({title}) =>{
  const onClick = () =>{
    console.log('click')
  }
  return (
    <header className="header">
    <h1 className="text-3xl">{title}</h1>
    <Button text="Add" onClick={onClick}/>
    </header>
  )
}
Header.propTypes = {
  title:PropTypes.string.isRequired
}
Header.defaultProps = {
  title:"Tasks"
}
export default Header
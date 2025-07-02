import './button.css'

const Button = ({label}) => {
  const handleClick = () => {alert(`A label desse botão é ${label}`)}

  return <button className="btn" onClick={handleClick}>{label}</button>
}

export default Button
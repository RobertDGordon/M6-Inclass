function PropsDisplayer(props){

  const stringsProps = JSON.stringify(props);

  let newUserName = props.user.name

  newUserName = "Someone Else"

  return(
    <div className="PropsDisplayer componentBox">
      <h2>Check out my props!</h2>
      <h3>{stringsProps}</h3>
      <h4>Name: {props.user.name}</h4>
    </div>
  )
}

export default PropsDisplayer
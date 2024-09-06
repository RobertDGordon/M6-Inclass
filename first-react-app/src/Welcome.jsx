function Welcome(props) {
  return (
    <div className="Welcome componentBox">
      <h3 style={{color: 'blue', textTransform: 'uppercase'}}>Welcome {props.name}</h3>
      {props.children}
    </div>
  )
}

function Goodbye(){
  return(
    <></>
  )
}

export default Welcome

// Named exports
export {
  Welcome,
  Goodbye
}

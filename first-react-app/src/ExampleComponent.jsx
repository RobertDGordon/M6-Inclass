function ExampleComponent() {

  const divStyle = {
    background: 'lightblue',
    padding: '1em',
    fontWeight: 'bold'
  }

  return (
    <div style={divStyle} className="ExampleComponent">
      <h1 style={divStyle}>My Example Component</h1>
      <p style={divStyle}>My first React component!</p>
    </div>
  )
}

export default ExampleComponent
function FancyBox(props) {
  return(
    <div className={'FancyBox FancyBox-' + props.color}>
      {props.children}
    </div>
  )
}

export default FancyBox;
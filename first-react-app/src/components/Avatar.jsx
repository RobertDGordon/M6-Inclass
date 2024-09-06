function Avatar(props) {
  return(
    <img
        className="Avatar"
        src={props.avatarUrl}
        alt={props.name}
      />
  )
}

export default Avatar
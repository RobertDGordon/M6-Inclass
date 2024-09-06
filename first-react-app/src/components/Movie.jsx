function Movie({title, year, synopsis, id, onDeleteMovie}) {

  console.log('Movie:', id)

  return(
    <li>
      <h3>{title}</h3> <span>({year})</span>
      <div>{synopsis}</div>
      <button onClick={() => onDeleteMovie(id)}>Delete Movie</button>
    </li>
  )
}

export default Movie;
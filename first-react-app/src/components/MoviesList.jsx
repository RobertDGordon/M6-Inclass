import { useState } from "react";
import Movie from "./Movie";
import AddMovieForm from "./AddMovieForm";

const movies = [
  {
    id: 1,
    title: "Shrek 2",
    year: 2004,
    synopsis: "Green guy and a donkey",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
  },
];

function MoviesList() {
  const [currentMovies, setCurrentMovies] = useState(movies);
  const [formData, setFormData] = useState({
    id: 4,
    title: "The Whale",
    year: 2022,
    synopsis:
      "A morbidly obese teacher attempts to reconnect with his daughter.",
  });

  // const handleAddMovie = () => {
  //   // get data from form, likely from state
  //   // add that form state to the newMovies
  //   // formData
  //   // may need to generate a new id
  //   let newId = currentMovies.length + 1
  //   let newMovies = [...currentMovies,
  //     {...formData,
  //       id: newId,
  //     }
  //   ]

  //   console.log('handleAddMovie:', newMovies)
  //   setCurrentMovies(newMovies)
  // }

  const handleAddMovie = (newMovie) => {
    newMovie.id = currentMovies.length + 1;
    let newMovies = [...currentMovies, newMovie];
    setCurrentMovies(newMovies);
  };

  const handleReverseMovies = () => {
    let newMovies = [...currentMovies];
    newMovies.reverse();
    console.log("handleReverseMovies:", newMovies);
    setCurrentMovies(newMovies);
  };

  const handleSortByYear = () => {
    let newMovies = [...currentMovies];
    newMovies.sort((a, b) => {
      return a.year - b.year;
    });

    console.log("handleSortByYear:", newMovies);
    setCurrentMovies(newMovies);
  };

  const handleDeleteMovie = (idToDelete) => {
    let newMovies = currentMovies.filter((movie) => movie.id != idToDelete);

    setCurrentMovies(newMovies);
  };

  const handleUpdateSynopsis = (idToUpdate) => {
    let updatedSynopsis1 = "Iconic heart-warming prison break movie";
    let newMovies = currentMovies.map((movie) =>
      movie.id === idToUpdate ? { ...movie, synopsis: updatedSynopsis1 } : movie
    );

    console.log("handleUpdateSynopsis:", newMovies);

    setCurrentMovies(newMovies);
  };

  // creates a variable to store our JSX items
  const movieItems = currentMovies.map((movie) => (
    <Movie
      key={movie.id}
      id={movie.id}
      {...movie}
      onDeleteMovie={handleDeleteMovie}
    />
  ));

  return (
    <div className="MoviesList componentBox">
      <ul>
        {movieItems}
        {/* { movies.map((movie) => (
          <li>{movie.title}</li>
        ))} */}
      </ul>
      <button onClick={handleReverseMovies}>Reverse List</button>
      <button onClick={handleSortByYear}>Sort By Year</button>
      <button onClick={handleAddMovie}>Add Movie</button>
      <button onClick={() => handleDeleteMovie(2)}>Delete Movie</button>
      <button onClick={() => handleUpdateSynopsis(2)}>Update Synopsis</button>

      <AddMovieForm onAddMovie={handleAddMovie} />
    </div>
  );
}

export default MoviesList;

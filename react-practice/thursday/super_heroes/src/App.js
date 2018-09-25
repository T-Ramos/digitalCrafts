import {connect} from 'react-redux';
import Movies from './components/movies';
import addMovie from './actions/addImage';
import deleteMovie from './actions/deleteImage';

function mapStateToProps(state){
  return{
    movieCart: state.movieCart
  }
}

function mapDispatchToProps(dispatch){
  return{
    onAddMovie: (movieData) => dispatch(addMovie(movieData)),
    onDeleteMovie: (movieData) => dispatch(deleteMovie(movieData))
  }
}

var connectedComponents = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);



export default connectedComponents;

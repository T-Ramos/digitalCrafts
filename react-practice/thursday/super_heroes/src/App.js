import {connect} from 'react-redux';
import Movies from './components/movies';
import addMovie from './actions/addImage';
import deleteMovie from './actions/deleteImage';
import apiData from './actions/apiData';

function mapStateToProps(state){
  return{
    movieCart: state.movieCart,
    movieData: state.apiInfo
  }
}

function mapDispatchToProps(dispatch){
  return{
    onAddMovie: (movieData) => dispatch(addMovie(movieData)),
    onDeleteMovie: (movieData) => dispatch(deleteMovie(movieData)),
    onFetch: (response) => dispatch(apiData(response))
  }
}

var connectedComponents = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);



export default connectedComponents;

import React from 'react';
import AddMovie from './addMovie';

export default class Movies extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){

        // var apiKey = "c71e4a1d";
        // http://www.omdbapi.com/?s=batman&apikey=insertyourkeyhere
        fetch("http://www.omdbapi.com/?s=batman&apikey=c71e4a1d")
        .then((response => response.json()))
        .then(response => this.props.onFetch(response))
    }

    render(){

        let movieArray = this.props.movieData.Search;

        // let movieResults = this.movieArray.map(movie => {
        //     return "hello"
        // })
        
       let movieResult = [];

       for (let x in movieArray){
           movieResult.push(movieArray[x]);
       }
       console.log(movieResult)
        
        return(
            <div>
                
                {
                    movieResult.map(movie => {
                        return <li>{movie.Title}</li>
                    })
                }
                
                <AddMovie addMovie={this.props.onAddMovie} />

                <table>
                    <thead>
                        <tr>
                            <th>Movie Name</th>
                            <th>Movie URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.movieCart.map(movieData =>{
                                return <tr key={movieData.movieName}>
                                        <td>{movieData.movieName}</td>
                                        <td><img src={movieData.movieUrl} alt="moviePic"/></td>
                                        <td> <button onClick={() => {
                                            this.props.onDeleteMovie(movieData)
                                        }}>X</button></td>
                                
                                    </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}
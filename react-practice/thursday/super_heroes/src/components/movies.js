import React from 'react';
import AddMovie from './addMovie';

export default class Movies extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
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
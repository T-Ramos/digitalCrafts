import React from 'react';

export default class AddMovie extends React.Component {
    constructor(props){
        super(props);
        this.state={
            movieName: "",
            movieUrl: "",
            movie: [{
                movieName: "Deadpool 2",
                movieUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6252/6252771_sa.jpg;maxHeight=640;maxWidth=550"
            }]

        }
    }

    movieNameChangedHandler(e){
        this.setState({movieName: e.target.value});
    }

    movieUrlChangedHandler(e){
        this.setState({movieUrl: e.target.value});
    }

    render(){
        return(
            <div>
                <input type="text" 
                placeholder="Movie Name"
                onChange={this.movieNameChangedHandler.bind(this)}
                value={this.state.movieName}/>

                <input type="text"
                placeholder="Movie Url"
                onChange={this.movieUrlChangedHandler.bind(this)}
                value={this.state.movieUrl}/>

                <button onClick={() => this.props.addMovie({
                    movieName: this.state.movieName,
                    movieUrl: this.state.movieUrl
                })}>
                    Add Movie
                    </button>

            </div>
        );
    }
}
//Reducer

function movieReducer(state, action){
    if(state === undefined){
        console.log('reducer initialized');
        return{
            apiInfo: [],
            movieCart: [
                {
                    movieName: "Deadpool 2",
                    movieUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6252/6252771_sa.jpg;maxHeight=640;maxWidth=550"
                }
            ]
        };
    }

    switch(action.type){

        case "newMovie":
        console.log("Added movie called " + action.movieData.movieName);
            return {
                ...state,
                movieCart: state.movieCart.concat({
                    movieName: action.movieData.movieName,
                    movieUrl: action.movieData.movieUrl
                })
            }
        
        case "removeMovie":
            var updatedArray = state.movieCart.filter( movie => {
                return movie.movieName !== action.movieData.movieName
            })

            return {
                ...state,
                movieCart: updatedArray
            }
        
        case "apiFetchData":
            return{
                ...state,
                apiInfo: action.payload
            }
        default:
            return(state)

        
    }
}

export default movieReducer
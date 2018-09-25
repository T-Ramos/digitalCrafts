//action to add 
function addImage(item){

    return {
        type: "newMovie",
        movieData: {
            movieName: item.movieName,
            movieUrl: item.movieUrl
        }
    }
}

export default addImage
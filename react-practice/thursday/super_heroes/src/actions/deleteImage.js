//action to delete

function deleteImage(item){

    return {
        type: "removeMovie",
        movieData: {
            movieName: item.movieName,
            movieUrl: item.movieUrl
        }
    }
}

export default deleteImage
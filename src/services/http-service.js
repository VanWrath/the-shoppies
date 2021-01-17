class HttpService {
     searchMovies = (searchText) => {
        var promise = new Promise((resolve, reject) => {
            fetch("http://www.omdbapi.com/?s=" + searchText + "&apikey=cda9abc8")
            .then((res) =>{
                resolve(res.json());
            });
        });
        return promise;
      };
}

export default HttpService;
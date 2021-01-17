import React, {Component} from 'react';
import './App.css';
import HttpService from "./services/http-service";
import MovieList from './components/movieList';

const http = new HttpService();
var testList = [ 
  {Title: "Batman",Year: 1989, imdbID : 'tt0096895'},
  {Title: "The Avengers", Year: 2012, imdbID : 'tt0848228'}
]

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nominees: [],
      searchText: '',
      movies: []
    }
    this.searchMovies = this.searchMovies.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.nominateMovie = this.nominateMovie.bind(this);
    this.removeNomination = this.removeNomination.bind(this);
    this.checkNominated = this.checkNominated.bind(this);
  }

  componentDidMount() {
    const json = localStorage.getItem("nominees");
    const savedNominees = JSON.parse(json);
    if (savedNominees) {
      this.setState({nominees: savedNominees});
    }
  }

  componentDidUpdate() {
    const json = JSON.stringify(this.state.nominees);
    localStorage.setItem("nominees", json);
  }

  searchMovies = async(text) => {
    var movies;
    const res = await fetch("http://www.omdbapi.com/?s=" + text + "&type=movie&apikey=cda9abc8")
    .then(res => res.json()).then(data =>  {
      this.setState({movies: data.Search});
    }
      );
     //console.log('movies: ' + JSON.stringify(this.movies));
    return res;
  };

  onTextChange = (event) => {
    var text = event.target.value;
    this.setState({searchText: text});
   if(text.length > 0) {
     this.searchMovies(text);
   }
 }

  nominateMovie = (movie) => {
    var nomineesList = this.state.nominees;
      if(this.state.nominees.length < 5){
        nomineesList.push(movie);
        //console.log(this.state.nominees.length)
        this.setState({nominees: nomineesList});
        
      }
      
      //console.log(JSON.stringify(this.state.nominees));
  }

  removeNomination = (movie) => {
    var nomineesList = this.state.nominees;
    for(let i = 0; i < this.state.nominees.length; i++){
      if(movie.imdbID == this.state.nominees[i].imdbID){
        nomineesList.splice(i,1);
        this.setState({nominees: nomineesList});
      }
    }
  }

  checkNominated = (movie) => {
    for (let i = 0; i < this.state.nominees.length; i++){
      if(movie.imdbID == this.state.nominees[i].imdbID){
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <div className="container text-light">
        {this.state.nominees.length == 5 &&
        <div className="alert alert-primary sticky-top" role="alert">
          <strong>You are done picking your 5 movie nominees.</strong>
        </div>}
        
        {/* title */}
        <h1 className='my-5'>The Shoppies</h1>
  
        {/* Search bar */}
        <div className="row bg-dark p-4 m-0">
          <div className="col">
            <form className="form-group">
              <label>Movie Titles</label>
              <input type="text" className="form-control" name="searchbox" id="search" aria-describedby="helpId" placeholder="Search" onChange={this.onTextChange}/>
            </form>
          </div>
          
        </div>
  
        <div className="row">
          {/* Search Results */}
          <div className="col bg-dark m-3 p-4">
            <h4 className='mb-4'>Results for "{this.state.searchText}"</h4>
           {typeof this.state.movies !== 'undefined' && this.state.movies.length > 0 &&
              <MovieList movies={this.state.movies} onClick={this.nominateMovie} nominees={this.state.nominees} check={this.checkNominated} nominated={false}/>
           }
           
  
          </div>
  
          {/* nominations list */}
        <div className="col bg-dark m-3 p-4">
          <h4 className='mb-4'>Nominations</h4>
          {this.state.nominees.length > 0 &&
              <MovieList movies={this.state.nominees} onClick={this.removeNomination} nominated={true}/>
           }
  
        </div>
        </div>
      </div>
  
  );
}
}
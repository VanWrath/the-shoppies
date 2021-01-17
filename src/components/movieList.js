import MovieItem from './movieItem';

import React, { Component } from 'react'

/* Props
*  movies : Array
*  onClick : function
*  check : function
*  nominated : boolean
*/
export default class movieList extends Component {
    render() {
        const movies = this.props.movies;
        const listMovies = movies.map((movie)=>
            <MovieItem key={movie.imdbID} movie={movie} onClick={this.props.onClick} check={this.props.check} nominated={this.props.nominated}/>
        );
        return (
            <ul className='p-1'>{listMovies}</ul>
        )
    }
}

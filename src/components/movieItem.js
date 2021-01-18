import React, { Component } from 'react'

/* Props:
* key : string
* movie : object
* onClick : function
* check : function
* nominated : boolean
*/
export default class movieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
           animationCss : this.props.nominated ? 'new-item' : '',
           beingRemoved: false
        }
    }

    render() {
        var movie = this.props.movie;
        return (
            <li className={'my-3 row text-center ' + this.state.animationCss }>
                <div className='col-5'>
                    <img src={movie.Poster} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="Movie Poster"/>
                </div>
                <div className='col-7'>
                    <div className='col'> 
                        <p className='movieTitle'>{movie.Title} ({movie.Year})</p>
                    </div>
                    <div className='col'>
                        { this.props.nominated
                            ? <button type="button" className="btn btn-danger m-3" 
                            onClick={() => {this.props.onClick(movie)}}>
                                    Remove
                                </button>

                            : (!this.props.check(movie)
                                ? <button type="button" className="btn btn-primary " onClick={()=> {this.props.onClick(movie)}}>Nominate</button>
                                : <button type="button" className="btn btn-primary " disabled>Nominate</button>)
                        
                        }
                    </div>
                </div>                
            </li>
        )
    }
}
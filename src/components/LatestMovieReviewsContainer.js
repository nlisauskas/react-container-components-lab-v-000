import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
<<<<<<< HEAD
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(data => this.setState({ reviews: data.results }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        < MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
=======
export default class LatestMovieReviewsContainer extends Component {

}

export default class SearchableMovieReviewsContainer extends Component {

}
>>>>>>> 9fec5e57d7598a2053d741e8751cd8b24021982f

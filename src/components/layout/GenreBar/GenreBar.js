import React, { Component } from "react";

//finish this tomorrow (FRIDAY).

class GenreBar extends Component {
  render() {
    return (
      <div className="wrapper-genrebuttons">
        <button
          className="btn btn-primary"
          onClick={() => this.props.onGenreClick(18)}
        >
          Drama
        </button>
        <button
          className="btn btn-primary"
          onClick={() => this.props.onGenreClick(35)}
        >
          Comedy
        </button>
        <button
          className="btn btn-primary"
          onClick={() => this.props.onGenreClick(28)}
        >
          Action
        </button>
        <button
          className="btn btn-primary"
          onClick={() => this.props.onGenreClick(53)}
        >
          Thriller
        </button>
        <button
          className="btn btn-primary"
          onClick={() => this.props.onGenreClick(878)}
        >
          SciFi
        </button>
      </div>
    );
  }
}

export default GenreBar;

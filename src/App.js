import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    filmes: [
      {
        id: 1,
        title: "The Conjuring",
        sinopse:
          "Harrisville, United States. A couple (Ron Livinston and Lili Taylor) move into a new house with their five daughters. Inexplicably, strange events begin to frighten the children, their father, and especially their mother. Concerned by some stains that appear on her body and a string of scares she has been subjected to, she decides to seek out a famous couple of paranormal investigators (Patrick Wilson and Vera Farmiga), but they do not accept the invitation, believing it to be just another mista",
        foto:
          "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Conjuring_poster.jpg/220px-Conjuring_poster.jpg",
        alt: "Post the conjuring"
      },
      {
        id: 2,
        title: "Mean of honor",
        sinopse:
          "Harrisville, United States. A couple (Ron Livinston and Lili Taylor) move into a new house with their five daughters. Inexplicably, strange events begin to frighten the children, their father, and especially their mother. Concerned by some stains that appear on her body and a string of scares she has been subjected to, she decides to seek out a famous couple of paranormal investigators (Patrick Wilson and Vera Farmiga), but they do not accept the invitation, believing it to be just another mista",
        foto:
          "https://www.themoviedb.org/t/p/w500/wNUAnXV1mzOOfvnVBIYsalkk078.jpg",
        alt: "post de mean of honor"
      }
    ]
  };

  render() {
    return (
      <>
        {this.state.filmes.map((filme) => (
          <section key={filme.id}>
            <h1> Titulo :{filme.title}</h1>
            <p>{filme.sinopse}</p>
            <figure>
              <img src={filme.foto} alt={filme.alt} />
            </figure>
          </section>
        ))}
      </>
    );
  }
}

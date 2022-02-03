import React from "react";
import unsplash from "../api/unsplash.js";
import SearchBar from "./SearchBar";
import ImageList from "./imageList.js";
import ButtonApi from "./Button.js";

class App extends React.Component {
  state = { images: [], page: 1, term: "" };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, page: this.state.page },
    });
    console.log(response);
    this.setState({ images: response.data.results, term });
  };

  onChangePageNext = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.onSearchSubmit(this.state.term);
    });
  };
  onChangePageBack = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 }, () => {
        this.onSearchSubmit(this.state.term);
      });
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ButtonApi
          page={this.state.page}
          onChangeNext={this.onChangePageNext}
          onChangeBack={this.onChangePageBack}
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

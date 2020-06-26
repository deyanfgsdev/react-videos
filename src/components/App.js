import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";

const KEY = "AIzaSyACj8LxrHxmzor-m4r3jKB8wWZjVLylscQ";

class App extends React.Component {
  state = {
    videos: [],
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        Found: {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;

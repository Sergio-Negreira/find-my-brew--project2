import React, { Component } from "react";
import axios from "axios";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { SearchProvider, Results, SearchBox } from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

    const connector = new AppSearchAPIConnector({
    // searchKey: "[YOUR_SEARCH_KEY]",
    engineName: "beer_engine",
    hostIdentifier: "api/records/1.0/search/?dataset=open-beer-database%40public-us&rows=6000",
    });

export default class Search extends Component {
  // Step #3: Configuration Options
  configurationOptions = {
    apiConnector: connector,
    // Let's fill this in together.
  };
  // Step #4, SearchProvider: The Finishing Touches.

  getBeerRandomDetail() {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=open-beer-database%40public-us&rows=6000"
      )
      .then((response) => {
        const randomBeer = response.data;

        this.setState({
          beer: randomBeer,
        });
      });
  }

  render() {
    return (
      <SearchProvider config={configurationOptions}>
        <div className="search">
          <Layout // Let's fill this in together.
          />
        </div>
      </SearchProvider>
    );
  }
}

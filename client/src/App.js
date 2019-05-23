import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

//importing semantics
import { Icon } from 'semantic-ui-react'

//importing Components
import MussicList from './Components/MussicList'
import AddMussic from './Components/AddMussic'

//apollo client setup
const client = new ApolloClient ({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>&nbsp;&nbsp;<Icon name='music'/>&nbsp;My Playlist</h1>
          <MussicList />
          <AddMussic />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

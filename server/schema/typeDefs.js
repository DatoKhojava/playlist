import { gql } from 'apollo-server-express'

export const typeDefs = gql`

    type Mussic { 
        id: ID!
        name: String!
        lyrics: String!
        album: String!
        genres: String!
        artist: Artist!
    }

    type Artist {
        id: ID!
        name: String!
        genres: String!
        mussics: [Mussic]
    }

    type Query {
        mussic (id: ID!): Mussic
        artist (id: ID!): Artist
        mussics: [Mussic]
        artists: [Artist]
    }

    type Mutation {
        addArtist (name: String!, genres: String!): Artist
        addMussic (name: String!, lyrics: String!, album: String, genres: String, artistid: ID!): Mussic 
    }
`
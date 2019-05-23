import { gql } from 'apollo-boost' 

const getArtistsQuery = gql`
    {
        artists {
            id
            name
        }
    } 
`

const getMussicsQuery = gql`
    {
        mussics {
            id
            name
        }
    }
`

const addMussicMutation = gql`
    mutation($name: String!, $lyrics: String!, $album: String!, $genres: String!, $artistid: String!) {
        addMussic(name: $name, lyrics: $lyrics, album: $album, genres: $genres, artistid: $artistid) {
            name
            id
        }
    }
`

const getMussicQuery = gql`
    query getMussicQuery($id: ID!){
        mussic(id: $id){
            name
            lyrics
            album
            genres
            artist {
                name
                genres
                mussics {
                    id
                    name
                    lyrics
                    album
                    genres
                }
            }    
        }
    }
`

export { getArtistsQuery, getMussicsQuery, addMussicMutation, getMussicQuery } 
import { _ } from 'lodash';

//importing Models
import Artist from '../models/Artist'
import Mussic from '../models/Mussic'

export const resolvers = {
    Query: {
        mussic: (parent, args) => {
            //return _. find(Mussics, {id: args.id});
            return Mussic.findById(args.id);
        },
    
        artist: (parent, args) => {
            //return  _. find(Artists, {id: args.id});
            return Artist.findById(args.id);
        },
    
        mussics: () => {
            //return Mussics
            return Mussic.find({});
        },
        
        artists: () => {
            //return Artist.find({})
            return Artist.find({});
        }
    },
    
    Mussic: {
        artist: (parent) => {
           // return Mussic
           return Artist.findById(parent.artistid);
        }
    },
    
    Artist: {
        mussics: (parent) => {
           // return Artist.findById(parent.artistid)
           return Mussic.find({artistid: parent.id});
        }
    },

    Mutation: {
        addArtist: (obj, { name, genres }) =>
            new Artist ({
                name,
                genres,
            })
        .save(),

        addMussic: (obj, {name, lyrics, album, genres, artistid}) =>
            new Mussic ({
                name,
                lyrics,
                album,
                genres,
                artistid,
            })
        .save()
        
    }
}

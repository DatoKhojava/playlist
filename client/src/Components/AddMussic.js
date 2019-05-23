import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'

//Queryes importing
import { getArtistsQuery, addMussicMutation, getMussicsQuery } from '../Queries/queries'

//import Semantics
import { Button, Form, Modal, Icon } from 'semantic-ui-react'

class AddMussic extends Component { 
   
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lyrics: '',
            album: '',
            released: '',
            genres: '',
            artistid: ''
        };
    }

    displayArtists() {
        var data = this.props.getArtistsQuery;
        if(data.loading) {
            return(
                <option disabled>
                    loading...
                </option>
            )
        } else {
            return data.artists.map(artist => {
                return(
                    <option key={ artist.id } value={ artist.id }>
                        { artist.name }
                    </option>
                )
            })
        }
    }

    submitForm(e) {
        e.preventDefault();
        this.props.addMussicMutation({
            variables: {
                name: this.state.name, 
                lyrics: this.state.lyrics, 
                album: this.state.album, 
                released: this.state.released, 
                genres: this.state.genres, 
                artistid: this.state.artistid
            },
            refetchQueries: [{ query: getMussicsQuery }]
        });
    }

    render() {
        return (
            <Modal trigger={<Button>Add Mussic</Button>}>
                <Modal.Header>Add New Mussic To The PlayList</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={ this.submitForm.bind(this) }>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Name' placeholder='Type mussic name' onChange={ (e) => this.setState({ name: e.target.value})} />
                            <Form.Input fluid label='Album' placeholder='Type album name' onChange={ (e) => this.setState({ album: e.target.value})} />
                            <Form.Input fluid label='Genres' placeholder='Type genres' onChange={ (e) => this.setState({ genres: e.target.value})} />
                        </Form.Group>
                        <Form.TextArea label='Mussic Lyrics' placeholder='Type mussic lyrics...' onChange={ (e) => this.setState({ lyrics: e.target.value})}/>
                        <Form.Input fluid label='Released' placeholder='Type released years' onChange={ (e) => this.setState({ released: e.target.value})}/>
                        <Form.Field label='Sellect Artist' control='select' onChange={ (e) => this.setState({ artistid: e.target.value})}>
                            <option>Sellect Artist</option>
                            { this.displayArtists() }
                        </Form.Field>
                        <Button animated='vertical' widths='big'>
                        <Button.Content hidden>add artist</Button.Content>
                            <Button.Content visible>
                                <Icon name='add' />
                            </Button.Content>
                        </Button>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}

export default compose(
    graphql(getArtistsQuery, { name: "getArtistsQuery" }),
    graphql(addMussicMutation, {name: "addMussicMutation" })
)(AddMussic)

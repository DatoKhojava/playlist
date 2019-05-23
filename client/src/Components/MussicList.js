import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import faker from 'faker'

//Queryes importing
import { getMussicsQuery } from '../Queries/queries'

//import Semantics
import { Loader, Dimmer, Card, Container } from 'semantic-ui-react'

//importing Components
import MussicDetails from '../Components/MussicDetails'

class MussicList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    displayMussics() {
        var data = this.props.data;
        if(data.loading){
            return (
              <Dimmer active inverted>
                <Loader inverted content='Loading' />
              </Dimmer>
            )
        } else {
            return (
                <Card.Group>
                    { data.mussics.map(mussic => {
                        return (
                            <Card key={ mussic.id } onClick={ ()=> { this.setState({ selected: mussic.id })} }>
                                <Card.Content>
                                    <Card.Header>{ mussic.name }</Card.Header>
                                    <Card.Meta>{faker.lorem.words()}</Card.Meta>
                                    <Card.Description>{faker.lorem.words()}</Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })}
                </Card.Group>
            )
        }
    }
    render() {

        return (
            <ul id="mussic-list">
                { this.displayMussics() }
                <MussicDetails mussicid={ this.state.selected }/>
            </ul>
        );
    }
}

export default graphql(getMussicsQuery)(MussicList)
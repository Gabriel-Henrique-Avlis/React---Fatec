import React from 'react';
import { Card, Container, Grid } from 'semantic-ui-react';

export default function Professores({ data }) {
    return (
        <>
            <h1 style={{color: "white"}}>Professores</h1>
            <Grid columns={3}>
                {data.map((professores, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card style={{width: 350 + "px"}}>
                                <Card.Content>
                                    <Card.Header>{professores.name}</Card.Header>
                                    <Card.Description>
                                        <img src={professores.image}></img>
                                        <h1>Casa</h1>
                                        <p>{professores.house}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )
}
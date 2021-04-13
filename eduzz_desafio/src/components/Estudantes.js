import React from 'react';
import { Card, Container, Grid } from 'semantic-ui-react';
//Abaixo os dados são demonstrados através de um mapeamento de um array, onde estão contidos os dados.
//Através da interpolação, os dados podem ser visualizados.

export default function Estudantes({ data }) {
    return (
        <>
            <h1 style={{color: "white"}}>Estudantes</h1>
            <Grid columns={3}>
                {data.map((estudantes, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card style={{width: 350 + "px"}}>
                                <Card.Content>
                                    <Card.Header>{estudantes.name}</Card.Header>
                                    <Card.Description>
                                        <img src={estudantes.image}></img>
                                         <h1>Casa</h1>
                                        <p>{estudantes.house}</p>
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
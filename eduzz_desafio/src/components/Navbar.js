import React from 'react';
import {Menu, Container} from  'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <Menu style={{borderRadius: 0, background: 'green'}}>
            <Container>
                <Link to='/'>
                    <Menu.Item name="home" style={{color: 'white'}}>Home</Menu.Item>
                </Link>
                <Link to='/professores'>
                    <Menu.Item name="professores" style={{color: 'white'}}>Professores</Menu.Item>
                </Link>    
                <Link to='/estudantes'>
                    <Menu.Item name="estudantes" style={{color: 'white'}}>Estudantes</Menu.Item>
                </Link>
            </Container>
        </Menu>       
    )

}
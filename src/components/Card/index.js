import React from 'react'
import { Container, Label } from './styles'

const Card = () => {
    return (
        <Container>
            <header>
                <Label color="#7159c1" />
            </header>
            <p>Fazer a migração completa de servidor</p>
            <img
                src="https://avatars.githubusercontent.com/u/58841768?s=400&v=4"
                alt=""
            />
        </Container>
    )
}

export default Card

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const cards = [
    {
        url: "../covers/music.png",
        title: "Music Dashboard",
        desc: "UI Design & Web Development",
    },
    {
        url: "../covers/hotel.png",
        title: "Hotel Booking Website",
        desc: "UI Design & Front-end Development",
    },
    {
        url: "../covers/ecomm.png",
        title: "E-commerce Website",
        desc: "UI Design & Front-end Development",
    },
    {
        url: "../covers/music.png",
        title: "KliniKo (Ongoing)",
        desc: "UI Design & Front-end Development",
    },
    {
        url: "../covers/hotel.png",
        title: "Portfolio",
        desc: "UI Design",
    },
    {
        url: "../covers/ecomm.png",
        title: "Logo Collection",
        desc: "Illustration",
    }
];

function CardPortfolio() {
    return (
        <CardGroup className='row card_group'>
            {cards.map(card => (
                <Card className='col card_item'>
                    <Card.Img src={card.url} className='card_img'/>
                    <Card.Body className='card_body'>
                        <Card.Title className='card_title'><h4>{card.title}</h4></Card.Title>
                        <Card.Text>
                            <h5>{card.desc}</h5>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className='card_btn' variant="primary">View in Figma</Button>
                    </Card.Footer>
                </Card>
            ))} 
        </CardGroup>     
    );
}

export default CardPortfolio;

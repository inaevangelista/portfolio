import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Routes, Route, useNavigate } from "react-router-dom";



function CardPortfolio() {

    const cards = [
        {
            pic: "../covers/music.png",
            title: "RITMO (Dashboard)",
            desc: "UI Design & (Blockchain) Web Development",
            url: "https://www.figma.com/file/T2YQlHEznhVnwkj6QNDdCP/Portfolio-(Ina-Evangelista)?type=design&node-id=15%3A470&mode=design&t=kval60zVdG5Rl0U4-1"
        },
        {
            pic: "../covers/hotel.png",
            title: "Hotel Booking Website",
            desc: "UI Design & Front-end Development",
            url: "https://www.figma.com/file/T2YQlHEznhVnwkj6QNDdCP/Portfolio-(Ina-Evangelista)?type=design&node-id=15%3A5&mode=design&t=kval60zVdG5Rl0U4-1"
        },
        {
            pic: "../covers/ecomm.png",
            title: "E-commerce Website",
            desc: "UI Design & Front-end Development",
            url: "https://www.figma.com/file/T2YQlHEznhVnwkj6QNDdCP/E-commerce-Website?type=design&node-id=0%3A1&mode=design&t=kval60zVdG5Rl0U4-1"
        },
        {
            pic: "../covers/KliniKo.png",
            title: "KliniKo (Ongoing)",
            desc: "UI Design & Front-end Development",
            url: "https://www.figma.com/file/T2YQlHEznhVnwkj6QNDdCP/Portfolio-(Ina-Evangelista)?type=design&node-id=24%3A96&mode=design&t=kval60zVdG5Rl0U4-1"

        },
        {
            pic: "../covers/port.png",
            title: "Portfolio",
            desc: "UI Design",
            url: "https://www.figma.com/file/T2YQlHEznhVnwkj6QNDdCP/Portfolio-(Ina-Evangelista)?type=design&node-id=26%3A99&mode=design&t=kval60zVdG5Rl0U4-1"
        },
        {
            pic: "../covers/logo_col.png",
            title: "Logo Collection",
            desc: "Illustration",
            url: "https://www.figma.com/file/T2YQlHEznhVnwkj6QNDdCP/Portfolio-(Ina-Evangelista)?type=design&node-id=31%3A554&mode=design&t=kval60zVdG5Rl0U4-1"
        
        }
    ];

    const navigate = useNavigate();


    return (
        <CardGroup className='row card_group'>
            {cards.map(card => (
                <Card className='col card_item'>
                    <Card.Img src={card.pic} className='card_img'/>
                    <Card.Body className='card_body'>
                        <Card.Title className='card_title'><h4>{card.title}</h4></Card.Title>
                        <Card.Text>
                            <h5>{card.desc}</h5>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer> 
                        <Button href={card.url} className='card_btn' variant="primary">View in Figma</Button>
                    </Card.Footer>
                </Card>
            ))} 
        </CardGroup>     
    );
}

export default CardPortfolio;

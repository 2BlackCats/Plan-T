import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ name, image, id }) => {

    const navigate = useNavigate();
    return (
        <BootstrapCard onClick={() => navigate(`plant/${id}`)} style={{ width: '18rem', height: '20rem', margin: '1rem'}}>
            <BootstrapCard.Img variant="top" src={image} alt={name} style={{ width: '100%', height: '15rem', objectFit: 'cover' }} />
            <BootstrapCard.Body style={{ width: '18rem', height: '5rem', backgroundColor: '#45f248' }}>
                <BootstrapCard.Title>{name}</BootstrapCard.Title>
                {/* <BootstrapCard.Text>ID: {id}</BootstrapCard.Text> */}
            </BootstrapCard.Body>
        </BootstrapCard>
    );
};

export default Card;
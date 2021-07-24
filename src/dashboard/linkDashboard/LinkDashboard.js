import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import _ from 'lodash';
import Card from '../../components/card/Card';
import thunder from '../../assets/img/thunder.svg';
import './LinkDashboard.scss';

const cardTemplate = {
    "title": "",
    "url": "",
    "fav": false,
    "img": "",
    "active": false,
}

export default function LinkDashboard(props) {
    const [cards, setCards] = useState([]);
    const [id, setId] = useState('0')

    useEffect(() => {
        if (cards.length < 0) {

        } else {
            let cardArr = [];
            cardArr.push({ id, ...cardTemplate })
            setCards(cardArr)
        }
    }, [])
    useEffect(() => {
    }, [cards])

    const newCard = () => {
        let newId = cards[0].id ?? 0;
        if (typeof newId === 'string') newId = Number.parseInt(newId, 10);
        let newCard = { id: newId + 1, ...cardTemplate };
        setCards([newCard, ...cards])
    }

    const deleteCard = (deleteId) => {
        let newCardsArr = cards;
        _.remove(newCardsArr, (n) => (n.id === deleteId));
        setCards([...newCardsArr])
    }

    return (
        <div className="linkDash">
            <div className="linkDash_container">
                <div className="linkDash_buttons">
                    <button className="linkDash_buttons_add" onClick={() => newCard()}>
                        Add New Link
                    </button>
                    <button className="linkDash_buttons_config">
                        <ReactSVG src={thunder} className="linkDash_buttons_config_svg" />
                    </button>
                </div>
                <div className="linkDash_cards">
                    {cards.map(card => (
                        <Card cardContent={card} deleteCard={deleteId => deleteCard(deleteId)} />
                    ))}
                </div>
            </div>
        </div>
    )
}


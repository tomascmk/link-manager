import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { ReactSVG } from 'react-svg';
import _ from 'lodash';
import Card from '../../components/card/Card';
import thunder from '../../assets/img/thunder.svg';
import './LinkDashboard.scss';

import Draggable from 'react-draggable';

const cardTemplate = {
    "title": "",
    "url": "",
    "fav": false,
    "img": "",
    "active": false,
}
const SortableItem = SortableElement(({ value, updateCards, deleteCard }) => (
    <Card
        cardContent={value}
        updateCard={updatedCard => updateCards(updatedCard)}
        deleteCard={deleteId => deleteCard(deleteId)}
    />
));

const SortableList = SortableContainer(({ items, updateCards, deleteCard }) => {
    return (
        <ul>
            {items.map((value, index) => (
                <SortableItem className="sortableDrag" key={`item-${value}`} index={index} value={value} updateCards={updateCards} deleteCard={deleteCard} />
            ))}
        </ul>
    );
});

export default function LinkDashboard(props) {
    const [cards, setCards] = useState([]);
    const [lastCard, setLastCard] = useState();
    const [id, setId] = useState('0')

    useEffect(() => {
        if (cards.length > 0) {

        } else {
            let cardArr = [];
            cardArr.push({ id, ...cardTemplate })
            setCards(cardArr)
            props.handleCards(cardArr)
        }
    }, [])

    useEffect(() => {
    }, [cards])

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setCards(({ cards }) => ({
            cards: arrayMove(cards, oldIndex, newIndex),
        }));
    };
    const newCard = () => {
        let newId = cards[0] && cards[0].id ? cards[0].id : 0;
        if (typeof newId === 'string') newId = Number.parseInt(newId, 10);
        let newCard = { id: _.toString(newId + 1), ...cardTemplate };
        setCards([newCard, ...cards])
    }

    const updateCards = (card) => {
        let cardsUpdated = cards;
        cardsUpdated.map((cardUpdated, i) => {
            if (cardUpdated.id === card.id) {
                cardsUpdated[i] = card
            }
        })
        setLastCard(card)
        setCards(cardsUpdated);

        props.handleCards(cards)
    }

    const deleteCard = (deleteId) => {
        let newCardsArr = cards;
        _.remove(newCardsArr, (n) => (n.id === deleteId));
        setCards([...newCardsArr])
        if (cards.length === 0) {
            newCard()
        }
        props.handleCards(cards)
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
                <div className="linkDash_cards" id="linkDash_cards">
                    <SortableList items={cards} onSortEnd={pos => onSortEnd(pos)} updateCards={updatedCard => updateCards(updatedCard)} deleteCard={deletedCard => deleteCard(deletedCard)} useDragHandle />
                </div>
            </div>
        </div>
    )
}


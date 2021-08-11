import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { ReactSVG } from 'react-svg';
import _ from 'lodash';
import Card from '../../components/card/Card';
import save from '../../assets/img/save.svg';
import './LinkDashboard.scss';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
    SET_CARDS_DATA,
} from '../../redux/types/managerTypes/managerTypes';
// Json
import cardTemplate from '../../utils/json/cardTemplate.json'


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
    const dispatch = useDispatch();
    const { cardsData } = useSelector(state => state.managerReducers);

    const [cards, setCards] = useState(cardsData);
    const [lastCard, setLastCard] = useState();
    const [id, setId] = useState('0')

    useEffect(() => {
        if (cards.length > 0) {

        } else {
            let cardArr = [];
            cardArr.push({ id, ...cardTemplate })
            setCards(cardArr)
        }
    }, [])

    useEffect(() => {
        dispatch({ type: SET_CARDS_DATA, payload: cards });
    }, [cards])

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setCards(arrayMove(cards, oldIndex, newIndex));
    };
    const newCard = () => {
        let newCard = { id: _.toString(cards.length > 0 ? cards.length : 0), ...cardTemplate };
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
        dispatch({ type: SET_CARDS_DATA, payload: cardsUpdated });
    }

    const deleteCard = (deleteId) => {
        let newCardsArr = cards;
        _.remove(newCardsArr, (n) => (n.id === deleteId));
        setCards([...newCardsArr])
        if (cards.length === 0) {
            newCard()
        }
    }

    return (
        <div className="linkDash">
            <div className="linkDash_container">
                <div className="linkDash_buttons">
                    <button className="linkDash_buttons_add" onClick={() => newCard()}>
                        Add New Link
                    </button>
                    <button className="linkDash_buttons_save">
                        Save
                        {/*  <ReactSVG src={save} className="linkDash_buttons_save_svg" /> */}
                    </button>
                </div>
                <div className="linkDash_cards" id="linkDash_cards">
                    <SortableList items={cards} onSortEnd={pos => onSortEnd(pos)} updateCards={updatedCard => updateCards(updatedCard)} deleteCard={deletedCard => deleteCard(deletedCard)} useDragHandle />
                </div>
            </div>
        </div>
    )
}


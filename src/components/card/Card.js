import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ReactSVG } from 'react-svg';
import {
    sortableHandle,
} from 'react-sortable-hoc';
import _ from 'lodash';
import './card.scss';
import dragAndDrop from '../../assets/img/dragAndDrop.svg'
import trash from '../../assets/img/trash.svg'
import star from '../../assets/img/star.svg'
import image from '../../assets/img/image.svg'
import { TOAST_MSG } from '../../redux/types/toastTypes/toastTypes';

const DragHandle = sortableHandle(() => (
    <div className="card_drag">
        <ReactSVG src={dragAndDrop} className="card_drag_icon" />
    </div>
));

export default function Card({ cardContent, updateCard, deleteCard }) {
    const dispatch = useDispatch();

    useEffect(() => {
    }, [])

    const handleChange = (event) => {
        let cardObj = { ...cardContent }
        let change = _.pick(cardObj, [`${event.target.id}`]);
        cardObj[_.keys(change)[0]] = event.target.value;
        if ((cardObj.title === "" || cardObj.url === "") && cardObj.active) {
            cardObj.active = false
        }
        updateCard(cardObj)
    }

    const handleActive = (value) => {
        let cardObj = { ...cardContent }
        if (cardObj.title === "" || cardObj.url === "") {
            dispatch({
                type: TOAST_MSG,
                payload: {
                    type: 'error',
                    msg:
                        'El titulo y el link deben completarse.'
                }
            });
        } else {
            cardObj.active = value;
            updateCard(cardObj)
        }
    }

    return (
        <div className="card" id={`${cardContent.id}`}>
            <DragHandle />
            <div className="card_content">
                <div className="card_content_left">
                    <div className="card_content_left_up">
                        <ul className="card-ul">
                            <li className="card-ul_li">
                                <input
                                    className="card-ul_li_title"
                                    value={cardContent.title}
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Title"
                                    onChange={event => handleChange(event)}
                                />
                            </li>
                            <li className="card-ul_li">
                                <input
                                    className="card-ul_li_url"
                                    value={cardContent.url}
                                    type="text"
                                    name="url"
                                    id="url"
                                    placeholder="URL"
                                    onChange={event => handleChange(event)}
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="card_content_left_down">
                        <ReactSVG src={star} className="contentIcon checked" />
                        <ReactSVG src={image} className="contentIcon" />
                    </div>

                </div>
                <div className="card_content_right">
                    <div className="card_content_right_up">
                        <label className={`switch${cardContent.active ? '_active' : ''}`} onClick={() => handleActive(!cardContent.active)} >
                            <span className={`slider`}></span>
                        </label>
                    </div>
                    <div className="card_content_right_down">
                        <ReactSVG src={trash} className="card_content_trash" onClick={() => deleteCard(cardContent.id)} />
                    </div>
                </div>
            </div>
        </div>
    )
}


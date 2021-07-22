import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import './card.scss';
import dragAndDrop from '../../assets/img/dragAndDrop.svg'
import trash from '../../assets/img/trash.svg'

export default function Card(props) {

    return (
        <div className="card">
            <div className="card_drag">
                <ReactSVG src={dragAndDrop} className="card_drag_icon" />
            </div>
            <div className="card_content">
                <div className="card_content_left">
                    <div className="card_content_left_up">
                        <h3>Title</h3>
                        <Link
                            className="card_link"
                            to={{
                                pathname: `https://www.w3schools.com/cssref/tryit.asp?filename=trycss_cursor`,
                                state: {}
                            }}
                            target="_blank"
                        >
                            https://www.w3schools.com/cssref/tryit.asp?filename=trycss_cursor
                        </Link>
                    </div>
                    <div className="card_content_left_down">hola</div>

                </div>
                <div className="card_content_right">
                    <div className="card_content_right_up">
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div className="card_content_right_down">
                        <ReactSVG src={trash} className="card_content_trash" />
                    </div>
                </div>
            </div>
        </div>
    )
}


import React from 'react';
import {Star} from "@mui/icons-material";
import {format} from "util";

type PlaceProps = {
    title?: string,
    rate?: number,
    review?: string,
    username?: string,
    createdAt?: string
};

export const PlaceCard = (
    {
        title,
        review,
        rate,
        username,
        createdAt
    }: PlaceProps) => {
    return (
        <div>
            <div className="card">
                <label>Place</label>
                <h4 className="place">{title}</h4>
                <label>Review</label>
                <p className="desc">{review}</p>
                <label>Rating</label>
                <div className="stars">
                    {Array(rate).fill(<Star className="star"/>)}
                </div>
                <label>Information</label>
                <span className="username">
                    Created by <b>{username}</b>
                  </span>
                <span className="date">{format(createdAt)}</span>
            </div>
        </div>
    );
};
